import { getRedisClient, closeRedisConnection } from './src/services/redisClient.js';

async function testRedisConnection() {
	console.log('Testing Redis connection...');
	
	try {
		const client = await getRedisClient();
		
		if (!client) {
			console.error('Failed to get Redis client');
			process.exit(1);
		}

		// Test basic operations
		console.log('Testing basic Redis operations...');
		
		// Set a test value
		await client.set('test_key', 'test_value');
		console.log('Successfully set test value');

		// Get the test value
		const value = await client.get('test_key');
		console.log('Retrieved test value:', value);

		// Delete the test value
		await client.del('test_key');
		console.log('Successfully deleted test value');

		// Close the connection
		await closeRedisConnection();
		console.log('Redis test completed successfully');
		process.exit(0);
	} catch (error) {
		console.error('Redis test failed:', error);
		process.exit(1);
	}
}

// Run the test
testRedisConnection();
