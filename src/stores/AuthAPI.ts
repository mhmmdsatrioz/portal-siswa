import API from 'api/API';
import create from 'zustand';

import { IPayloadLogin, IAuth } from 'types/Auth';
import { persist } from 'zustand/middleware';

const BASE_URL = 'http://localhost:5000/api';

// zustand implementation
type Store = {
  auth: any;
  fetchLogin: (data: IPayloadLogin) => any;
};

export const useAuthStore = create(
  persist<Store>(
    (set, get) => ({
      auth: {} as any,
      fetchLogin: async (data: IPayloadLogin) => {
        const response = await API.HTTP.post(`${BASE_URL}/login`, data);
        set({ auth: response.data });
        return response.data;
      },
    }),
    {
      name: 'auth-storage', // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);

// export const useAuthStore = create<Store>(set => ({
//   auth: {} as IPayloadLogin,
//   fetchLogin: async (data: IPayloadLogin) => {
//     const response = await API.HTTP.post(`${BASE_URL}/login`, data);
//     return response.data;
//     // set({ }
//   },
// }));
