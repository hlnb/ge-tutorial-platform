import { getRedisClient } from './services/redisClient.js';

async function testRedisConnection() {
	try {
		console.log('Testing Redis connection...');
		const redis = await getRedisClient();

		if (redis) {
			console.log('Successfully connected to Redis!');

			// Test setting and getting a value
			await redis.set('test-key', 'Hello from GraphiteEdge!');
			const value = await redis.get('test-key');
			console.log('Test value:', value);

			// Clean up
			await redis.del('test-key');
		} else {
			console.error('Failed to get Redis client');
		}
	} catch (error) {
		console.error('Error testing Redis connection:', error);
	}
}

testRedisConnection();
