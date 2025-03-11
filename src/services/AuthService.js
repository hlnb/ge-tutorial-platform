/**
 * Authentication Service
 * Handles user authentication using Vercel KV for storage
 */

// Import the KV client from the Vercel SDK
import { kv } from '@vercel/kv';
import externalProgressService from './ExternalProgressService';

class AuthService {
	constructor() {
		this.isAuthenticated = false;
		this.currentUser = null;
		this.localStorageKey = 'ge_auth_user';

		// Initialize from local storage
		this.initFromLocalStorage();
	}

	/**
	 * Initialize authentication state from local storage
	 */
	initFromLocalStorage() {
		try {
			const userData = localStorage.getItem(this.localStorageKey);
			if (userData) {
				this.currentUser = JSON.parse(userData);
				this.isAuthenticated = true;

				// Set user ID in progress service
				externalProgressService.setUserId(this.currentUser.id);
			}
		} catch (error) {
			console.error('Error initializing auth from local storage:', error);
			this.logout();
		}
	}

	/**
	 * Generate a unique user ID
	 */
	generateUserId() {
		return (
			'user_' +
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15)
		);
	}

	/**
	 * Hash a password (in a real app, use a proper hashing library)
	 * This is a simple implementation for demo purposes only
	 */
	async hashPassword(password) {
		// In a real app, use bcrypt or similar
		// This is NOT secure and is only for demonstration
		const encoder = new TextEncoder();
		const data = encoder.encode(password);
		const hashBuffer = await crypto.subtle.digest('SHA-256', data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
	}

	/**
	 * Register a new user
	 */
	async register(email, password, name) {
		try {
			// Check if user already exists
			const existingUser = await kv.get(`user:email:${email}`);
			if (existingUser) {
				return { success: false, message: 'Email already registered' };
			}

			// Create new user
			const userId = this.generateUserId();
			const hashedPassword = await this.hashPassword(password);

			const user = {
				id: userId,
				email,
				name,
				hashedPassword,
				createdAt: Date.now(),
			};

			// Store user in KV
			await kv.set(`user:${userId}`, user);
			await kv.set(`user:email:${email}`, userId);

			// Remove password before storing in local storage
			const userForStorage = { ...user };
			delete userForStorage.hashedPassword;

			// Set current user
			this.currentUser = userForStorage;
			this.isAuthenticated = true;

			// Save to local storage
			localStorage.setItem(
				this.localStorageKey,
				JSON.stringify(userForStorage),
			);

			// Set user ID in progress service
			externalProgressService.setUserId(userId);

			return { success: true, user: userForStorage };
		} catch (error) {
			console.error('Error registering user:', error);
			return { success: false, message: 'Registration failed' };
		}
	}

	/**
	 * Login a user
	 */
	async login(email, password) {
		try {
			// Get user ID by email
			const userId = await kv.get(`user:email:${email}`);
			if (!userId) {
				return { success: false, message: 'Invalid email or password' };
			}

			// Get user data
			const user = await kv.get(`user:${userId}`);
			if (!user) {
				return { success: false, message: 'Invalid email or password' };
			}

			// Check password
			const hashedPassword = await this.hashPassword(password);
			if (hashedPassword !== user.hashedPassword) {
				return { success: false, message: 'Invalid email or password' };
			}

			// Remove password before storing in local storage
			const userForStorage = { ...user };
			delete userForStorage.hashedPassword;

			// Set current user
			this.currentUser = userForStorage;
			this.isAuthenticated = true;

			// Save to local storage
			localStorage.setItem(
				this.localStorageKey,
				JSON.stringify(userForStorage),
			);

			// Set user ID in progress service
			externalProgressService.setUserId(userId);

			// Sync progress
			await externalProgressService.syncProgress();

			return { success: true, user: userForStorage };
		} catch (error) {
			console.error('Error logging in:', error);
			return { success: false, message: 'Login failed' };
		}
	}

	/**
	 * Logout the current user
	 */
	logout() {
		// Clear current user
		this.currentUser = null;
		this.isAuthenticated = false;

		// Clear from local storage
		localStorage.removeItem(this.localStorageKey);

		// Clear user ID from progress service
		externalProgressService.clearUserId();

		return true;
	}

	/**
	 * Check if user is authenticated
	 */
	isUserAuthenticated() {
		return this.isAuthenticated;
	}

	/**
	 * Get current user
	 */
	getCurrentUser() {
		return this.currentUser;
	}
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;
