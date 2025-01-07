import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import handler from './subscribe.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Add more detailed CORS configuration
app.use(
	cors({
		origin: 'http://localhost:5173', // Add your frontend URL
		methods: ['POST'],
		allowedHeaders: ['Content-Type'],
	}),
);

app.use(express.json());

// Add request logging
app.use((req, res, next) => {
	console.log('Incoming request:', {
		method: req.method,
		path: req.path,
		body: req.body,
	});
	next();
});

app.post('/subscribe', async (req, res, next) => {
	try {
		await handler(req, res);
	} catch (error) {
		next(error); // Pass errors to error handling middleware
	}
});

// Add more detailed error handling
app.use((err, req, res, next) => {
	console.error('Server Error:', {
		message: err.message,
		stack: err.stack,
		details: err,
	});

	// Check environment variables on error
	console.log('Environment variables check:', {
		hasApiKey: !!process.env.BREVO_API_KEY,
		hasTutorialListId: !!process.env.BREVO_TUTORIAL_LIST_ID,
		hasBlogListId: !!process.env.BREVO_BLOG_LIST_ID,
		apiKeyLength: process.env.BREVO_API_KEY?.length,
		tutorialListId: process.env.BREVO_TUTORIAL_LIST_ID,
		blogListId: process.env.BREVO_BLOG_LIST_ID,
	});

	res.status(500).json({
		error: 'Internal Server Error',
		message: err.message,
	});
});

app.listen(port, () => {
	console.log(`API server running at http://localhost:${port}`);
	console.log('Environment check:', {
		hasApiKey: !!process.env.BREVO_API_KEY,
		hasTutorialListId: !!process.env.BREVO_TUTORIAL_LIST_ID,
		hasBlogListId: !!process.env.BREVO_BLOG_LIST_ID,
	});
});

// Add unhandled rejection handler
process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
