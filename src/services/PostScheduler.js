import { scheduleJob } from 'node-schedule';
import { db } from '../db'; // Your database connection

class PostScheduler {
	constructor() {
		this.jobs = new Map();
		this.init();
	}

	async init() {
		// Load all scheduled posts on startup
		const scheduledPosts = await db.posts.find({
			status: 'scheduled',
			publishDate: { $gt: new Date() },
		});

		scheduledPosts.forEach((post) => this.schedulePost(post));
	}

	schedulePost(post) {
		// Cancel existing job if any
		if (this.jobs.has(post.id)) {
			this.jobs.get(post.id).cancel();
		}

		// Schedule new job
		const job = scheduleJob(post.publishDate, async () => {
			await db.posts.updateOne(
				{ _id: post.id },
				{
					$set: {
						status: 'published',
						updatedAt: new Date(),
					},
				},
			);
			this.jobs.delete(post.id);
		});

		this.jobs.set(post.id, job);
	}

	cancelSchedule(postId) {
		if (this.jobs.has(postId)) {
			this.jobs.get(postId).cancel();
			this.jobs.delete(postId);
		}
	}
}

export const postScheduler = new PostScheduler();
