import express from 'express';
import { postScheduler } from '../src/services/PostScheduler';
import Post from '../src/models/Post';
const router = express.Router();

router.get('/posts', async (req, res) => {
	try {
		const posts = await Post.find({
			status: { $in: ['scheduled', 'published'] },
		}).sort({ publishDate: 1 });
		res.json(posts);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
// Schedule a post
router.post('/posts/schedule', async (req, res) => {
	try {
		const { postId, publishDate } = req.body;

		const post = await Post.findByIdAndUpdate(
			postId,
			{
				status: 'scheduled',
				publishDate: new Date(publishDate),
				updatedAt: new Date(),
			},
			{ new: true },
		);

		if (!post) {
			return res.status(404).json({ error: 'Post not found' });
		}

		await postScheduler.schedulePost(post);
		res.json(post);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Update schedule
router.put('/posts/schedule/:id', async (req, res) => {
	try {
		const { publishDate } = req.body;

		const post = await Post.findByIdAndUpdate(
			req.params.id,
			{
				publishDate: new Date(publishDate),
				updatedAt: new Date(),
			},
			{ new: true },
		);

		if (!post) {
			return res.status(404).json({ error: 'Post not found' });
		}

		await postScheduler.schedulePost(post);
		res.json(post);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Cancel schedule
router.delete('/posts/schedule/:id', async (req, res) => {
	try {
		await postScheduler.cancelSchedule(req.params.id);
		res.json({ success: true });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export default router;
