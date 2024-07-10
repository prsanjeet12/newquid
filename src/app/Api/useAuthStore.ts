import create from 'zustand';
import { auth, provider } from '../config/firebaseConfig';
import { signInWithPopup, User } from 'firebase/auth';
import axios from 'axios';

interface AuthState {
  user: User | null;
  token: string | null;
  login: () => Promise<boolean>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const token = await user.getIdToken();
      
      const response = await axios.post('http://localhost:3050/api/auth/google-auth', {}, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.status === 200) {
        set({ user, token });
        return true;
      } else {
        console.error("Failed to authenticate :", response.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    return false;
  },
}));

export default useAuthStore;
