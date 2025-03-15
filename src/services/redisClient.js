/**
 * Shared Redis Client
 * Creates a singleton Redis client that can be used across services
 */

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Only import Redis client in Node.js environment
let createClient;
if (!isBrowser) {
	const redis = require('redis');
	createClient = redis.createClient;
}

// Create a singleton Redis client
let client = null;
let isConnecting = false;
let isConnected = false;

/**
 * Get the Redis client instance
 * @returns {Promise<Object>} Redis client
 */
export async function getRedisClient() {
	// If in browser environment, return null
	if (isBrowser) {
		console.warn('Redis client is not supported in browser environment');
		return null;
	}

	// If client already exists and is connected, return it
	if (client && isConnected) {
		return client;
	}

	// If we're in the process of connecting, wait for it
	if (isConnecting) {
		// Wait for connection to complete
		while (isConnecting) {
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		return client;
	}

	try {
		isConnecting = true;
		console.log('Initializing Redis client...');

		// Get Redis URL from environment variables
		const redisUrl = process.env.VITE_REDIS_URL || process.env.REDIS_URL;

		if (!redisUrl) {
			console.error('Redis URL not found in environment variables');
			isConnecting = false;
			return null;
		}

		console.log('Connecting to Redis at:', redisUrl.replace(/\/\/.*@/, '//*****@')); // Hide credentials in logs

		client = createClient({
			url: redisUrl,
			socket: {
				reconnectStrategy: (retries) => {
					if (retries > 10) {
						console.error('Max reconnection attempts reached');
						return new Error('Max reconnection attempts reached');
					}
					return Math.min(retries * 100, 3000);
				}
			}
		});

		// Set up event handlers
		client.on('error', (err) => {
			console.error('Redis Client Error:', err);
			isConnected = false;
		});

		client.on('connect', () => {
			console.log('Connected to Redis');
			isConnected = true;
		});

		client.on('reconnecting', () => {
			console.log('Reconnecting to Redis...');
		});

		client.on('end', () => {
			console.log('Redis connection ended');
			isConnected = false;
		});

		// Connect to Redis
		await client.connect();
		isConnecting = false;

		return client;
	} catch (error) {
		console.error('Failed to initialize Redis client:', error);
		isConnecting = false;
		isConnected = false;
		return null;
	}
}

/**
 * Check if Redis client is connected
 * @returns {boolean} Connection status
 */
export function isRedisConnected() {
	return isConnected;
}

/**
 * Close the Redis connection
 */
export async function closeRedisConnection() {
	if (client && isConnected) {
		await client.quit();
		client = null;
		isConnected = false;
	}
}

// Close Redis connection when the application is terminated
if (!isBrowser) {
	process.on('SIGTERM', closeRedisConnection);
	process.on('SIGINT', closeRedisConnection);
}

export default {
	getRedisClient,
	isRedisConnected,
	closeRedisConnection,
};
