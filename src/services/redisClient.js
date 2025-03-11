/**
 * Shared Redis Client
 * Creates a singleton Redis client that can be used across services
 */

import { createClient } from 'redis';

// Create a singleton Redis client
let client = null;
let isConnecting = false;
let isConnected = false;

/**
 * Get the Redis client instance
 * @returns {Promise<Object>} Redis client
 */
export async function getRedisClient() {
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

		// Create Redis client with the provided URL
		const redisUrl = import.meta.env.VITE_REDIS_URL || process.env.REDIS_URL;

		if (!redisUrl) {
			console.error('Redis URL not found in environment variables');
			isConnecting = false;
			return null;
		}

		client = createClient({
			url: redisUrl,
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
	if (client) {
		try {
			await client.quit();
			client = null;
			isConnected = false;
			console.log('Redis connection closed');
		} catch (error) {
			console.error('Error closing Redis connection:', error);
		}
	}
}

// Close Redis connection when the application is terminated
if (typeof window !== 'undefined') {
	window.addEventListener('beforeunload', () => {
		closeRedisConnection();
	});
}

export default {
	getRedisClient,
	isRedisConnected,
	closeRedisConnection,
};
