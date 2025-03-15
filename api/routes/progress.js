import express from 'express';
import { getRedisClient } from '../../src/services/redisClient.js';

const router = express.Router();
const PROGRESS_PREFIX = 'user_progress:';

// Get user progress
router.get('/:userId', async (req, res) => {
    try {
        const client = await getRedisClient();
        if (!client) {
            return res.status(500).json({ error: 'Redis client not available' });
        }

        const userId = req.params.userId;
        const key = `${PROGRESS_PREFIX}${userId}`;
        const progress = await client.get(key);

        res.json(progress ? JSON.parse(progress) : null);
    } catch (error) {
        console.error('Error getting progress:', error);
        res.status(500).json({ error: 'Failed to get progress' });
    }
});

// Save user progress
router.post('/:userId', async (req, res) => {
    try {
        const client = await getRedisClient();
        if (!client) {
            return res.status(500).json({ error: 'Redis client not available' });
        }

        const userId = req.params.userId;
        const key = `${PROGRESS_PREFIX}${userId}`;
        await client.set(key, JSON.stringify(req.body));

        res.json({ success: true });
    } catch (error) {
        console.error('Error saving progress:', error);
        res.status(500).json({ error: 'Failed to save progress' });
    }
});

// Clear user progress
router.delete('/:userId', async (req, res) => {
    try {
        const client = await getRedisClient();
        if (!client) {
            return res.status(500).json({ error: 'Redis client not available' });
        }

        const userId = req.params.userId;
        const key = `${PROGRESS_PREFIX}${userId}`;
        await client.del(key);

        res.json({ success: true });
    } catch (error) {
        console.error('Error clearing progress:', error);
        res.status(500).json({ error: 'Failed to clear progress' });
    }
});

export default router; 