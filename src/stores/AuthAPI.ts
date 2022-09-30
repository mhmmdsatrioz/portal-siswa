import API from 'api/API';
import create from 'zustand';

const BASE_URL = 'uri';

export const useAuthStore = create(set => ({
  auth: {} as any, // initial State
  // action async
  fetchLogin: async (data: object) => {
    const response = await API.HTTP.post(BASE_URL);
    set({ auth: response.data });
  },
}));
