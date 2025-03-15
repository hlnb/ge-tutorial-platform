import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import progressRoutes from './routes/progress.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['POST', 'OPTIONS'],
		allowedHeaders: ['Content-Type'],
	}),
);

app.use(express.json());

// Import the subscribe handler using dynamic import
const { default: subscribeHandler } = await import('./subscribe.js');

// Routes
app.use('/api/progress', progressRoutes);

// Convert the handler to Express middleware
app.post('/api/subscribe', async (req, res) => {
	try {
		await subscribeHandler(req, res);
	} catch (error) {
		console.error('API Error:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

app.listen(port, () => {
	console.log(`API server running at http://localhost:${port}`);
});
