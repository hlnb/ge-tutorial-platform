<template>
	<div class="content">
		<h1 class="title is-1"><i class="fas fa-calendar"></i> Post Scheduler</h1>

		<div class="box">
			<h2 class="title is-4">Scheduled Posts</h2>
			<table class="table is-fullwidth">
				<thead>
					<tr>
						<th>Title</th>
						<th>Status</th>
						<th>Publish Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="post in scheduledPosts" :key="post.id">
						<td>{{ post.title }}</td>
						<td>
							<span
								class="tag"
								:class="{
									'is-warning': post.status === 'scheduled',
									'is-success': post.status === 'published',
								}"
							>
								{{ post.status }}
							</span>
						</td>
						<td>{{ formatDate(post.publishDate) }}</td>
						<td>
							<div class="buttons are-small">
								<button class="button is-info" @click="editSchedule(post)">
									<i class="fas fa-edit"></i>
								</button>
								<button
									class="button is-danger"
									@click="cancelSchedule(post.id)"
								>
									<i class="fas fa-times"></i>
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Edit Schedule Modal -->
		<div class="modal" :class="{ 'is-active': isModalActive }">
			<div class="modal-background" @click="closeModal"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Edit Schedule</p>
					<button class="delete" @click="closeModal"></button>
				</header>
				<section class="modal-card-body">
					<div class="field">
						<label class="label">Post Title</label>
						<div class="control">
							<input
								v-model="selectedPost.title"
								class="input"
								type="text"
								disabled
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Publish Date</label>
						<div class="control">
							<input
								v-model="selectedPost.publishDate"
								class="input"
								type="datetime-local"
								:min="minDate"
							/>
						</div>
					</div>
				</section>
				<footer class="modal-card-foot">
					<button class="button is-success" @click="updateSchedule">
						Save Changes
					</button>
					<button class="button" @click="closeModal">Cancel</button>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { format } from 'date-fns';
import { scheduleJob } from 'node-schedule';
import Post from '../models/Post.js';

class PostScheduler {
	constructor() {
		this.jobs = new Map();
		this.init();
	}

	async init() {
		try {
			// Load all scheduled posts on startup
			const scheduledPosts = await Post.find({
				status: 'scheduled',
				publishDate: { $gt: new Date() },
			});

			scheduledPosts.forEach((post) => this.schedulePost(post));
		} catch (error) {
			console.error('Failed to initialize post scheduler:', error);
		}
	}

	async schedulePost(post) {
		if (this.jobs.has(post._id.toString())) {
			this.jobs.get(post._id.toString()).cancel();
		}

		const job = scheduleJob(post.publishDate, async () => {
			try {
				await Post.findByIdAndUpdate(post._id, {
					status: 'published',
					updatedAt: new Date(),
				});

				this.jobs.delete(post._id.toString());
				console.log(`Post published: ${post.title}`);
			} catch (error) {
				console.error(`Failed to publish post ${post._id}:`, error);
			}
		});

		this.jobs.set(post._id.toString(), job);
	}

	async cancelSchedule(postId) {
		if (this.jobs.has(postId)) {
			this.jobs.get(postId).cancel();
			this.jobs.delete(postId);

			await Post.findByIdAndUpdate(postId, {
				status: 'draft',
				publishDate: null,
			});
		}
	}
}

export const postScheduler = new PostScheduler();
</script>
