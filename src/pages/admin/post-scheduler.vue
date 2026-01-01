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
import { postScheduler } from '../../services/PostScheduler';
import Post from '../../models/Post.js';

// Component state
const scheduledPosts = ref([]);
const isModalActive = ref(false);
const selectedPost = ref({});
const minDate = ref('');

onMounted(async () => {
	await loadScheduledPosts();
	setMinDate();
});

async function loadScheduledPosts() {
	try {
		scheduledPosts.value = await Post.find({
			status: { $in: ['scheduled', 'published'] },
		}).sort({ publishDate: 1 });
	} catch (error) {
		console.error('Failed to load scheduled posts:', error);
	}
}

function formatDate(date) {
	return date ? format(new Date(date), 'PPpp') : 'Not set';
}

function setMinDate() {
	const now = new Date();
	now.setMinutes(now.getMinutes() + 5);
	minDate.value = now.toISOString().slice(0, 16);
}

function openEditModal(post) {
	selectedPost.value = { ...post };
	isModalActive.value = true;
}

function closeModal() {
	isModalActive.value = false;
	selectedPost.value = {};
}

async function updateSchedule() {
	try {
		const publishDate = new Date(selectedPost.value.publishDate);
		
		await Post.findByIdAndUpdate(selectedPost.value._id, {
			publishDate,
			status: 'scheduled',
		});

		// Reschedule the post
		postScheduler.schedulePost({
			_id: selectedPost.value._id,
			publishDate,
		});

		await loadScheduledPosts();
		closeModal();
	} catch (error) {
		console.error('Failed to update schedule:', error);
	}
}

async function cancelSchedule(postId) {
	if (confirm('Are you sure you want to cancel this scheduled post?')) {
		try {
			await postScheduler.cancelSchedule(postId);
			await loadScheduledPosts();
		} catch (error) {
			console.error('Failed to cancel schedule:', error);
		}
	}
}
</script>
