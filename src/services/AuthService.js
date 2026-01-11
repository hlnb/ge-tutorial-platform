import { ref } from 'vue';
import { auth, db } from './firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const currentUser = ref(null);
const isAuthenticated = ref(false);

// Listen to Firebase Auth state
if (auth) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Optionally fetch extra user data from Firestore
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        currentUser.value = {
          id: user.uid,
          email: user.email,
          name: user.displayName || (userDoc.exists() ? userDoc.data().name : ''),
        };
      } catch (error) {
        console.error('Error fetching user data:', error);
        currentUser.value = {
          id: user.uid,
          email: user.email,
          name: user.displayName || '',
        };
      }
      isAuthenticated.value = true;
    } else {
      currentUser.value = null;
      isAuthenticated.value = false;
    }
  });
} else {
  console.warn('Firebase Auth not initialized');
}

class AuthService {
  async register(email, password, name) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Set display name in Firebase Auth
      await updateProfile(user, { displayName: name });
      // Save user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), { name, email });
      return { success: true, user: { id: user.uid, email, name } };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return { success: true, user: { id: user.uid, email: user.email, name: user.displayName } };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async logout() {
    await signOut(auth);
    // onAuthStateChanged will update refs
    return true;
  }

  isUserAuthenticated() {
    return isAuthenticated.value && currentUser.value && currentUser.value.id && currentUser.value.email;
  }

  getCurrentUser() {
    return currentUser.value;
  }
}

const authService = new AuthService();
export default authService;
export { currentUser, isAuthenticated };