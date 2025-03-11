# Setting Up Redis for Student Progress Tracking

This document explains how to set up Redis for storing student progress data in the GraphiteEdge tutorial platform.

## What is Redis?

Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. For our tutorial platform, we're using Redis to store user authentication data and progress tracking information.

## Redis Cloud Setup

We're using Redis Cloud for our hosted Redis instance. Here's how to set it up:

1. Create an account on [Redis Cloud](https://redis.com/try-free/)
2. Create a new subscription (the free tier is sufficient for development)
3. Create a new database within your subscription
4. Get your Redis connection string, which will look something like:
   ```
   redis://default:password@host:port
   ```

## Environment Configuration

The Redis connection URL needs to be available to the application through environment variables:

1. Create a `.env` file in the project root with:

   ```
   VITE_REDIS_URL="your-redis-connection-string"
   ```

2. For local development, create a `.env.local` file with the same content:

   ```
   VITE_REDIS_URL="your-redis-connection-string"
   ```

3. For Vercel deployment, add the environment variable in your Vercel project settings or in `vercel.json`:
   ```json
   {
   	"env": {
   		"VITE_REDIS_URL": "your-redis-connection-string"
   	}
   }
   ```

## Data Structure

The application uses the following Redis key patterns:

- `user:{userId}` - Stores user data (name, email, hashed password)
- `user:email:{email}` - Maps email addresses to user IDs
- `progress:{userId}` - Stores user progress data

## Security Considerations

1. **Connection Security**: Ensure your Redis instance is properly secured with authentication and, if possible, TLS encryption.

2. **Password Storage**: The current implementation uses a simple SHA-256 hash for passwords, which is not secure for production. In a real production environment, you should use a proper password hashing library like bcrypt.

3. **Data Privacy**: Be mindful of what user data you store and ensure compliance with relevant data protection regulations.

## Local Development

For local development, you can either:

1. Connect to your Redis Cloud instance (easiest option)
2. Run Redis locally using Docker:
   ```
   docker run --name redis -p 6379:6379 -d redis
   ```
   And update your `.env.local` to use:
   ```
   VITE_REDIS_URL="redis://localhost:6379"
   ```

## Troubleshooting

### Connection Issues

If you're having trouble connecting to Redis:

1. Check that your Redis URL is correctly formatted
2. Ensure your Redis instance is running and accessible from your development or production environment
3. Check for any network restrictions or firewall rules that might block the connection
4. Verify that the Redis credentials are correct

### Data Persistence Issues

If data isn't being saved or retrieved correctly:

1. Check the Redis connection status in the browser console
2. Verify that the keys are being created correctly
3. Check for any errors in your application logs

## Resources

- [Redis Documentation](https://redis.io/documentation)
- [Redis Cloud Documentation](https://docs.redis.com/latest/rc/)
- [Node Redis Client Documentation](https://github.com/redis/node-redis)
