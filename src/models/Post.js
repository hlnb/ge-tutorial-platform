import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ['draft', 'scheduled', 'published'],
			default: 'draft',
		},
		publishDate: {
			type: Date,
			required: function () {
				return this.status === 'scheduled';
			},
		},
		author: {
			type: String,
			required: true,
		},
		tags: [
			{
				type: String,
				trim: true,
			},
		],
		slug: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	},
);

// Create URL-friendly slug from title
postSchema.pre('save', function (next) {
	if (this.isModified('title')) {
		this.slug = this.title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
	}
	next();
});

const Post = mongoose.model('Post', postSchema);

export default Post;
