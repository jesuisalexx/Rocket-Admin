import { useSessionStore } from '@/stores/session';

export const requestOnResolve = (config: any) => {
  const sessionStore = useSessionStore();

  if (!config.url.endsWith('/')) {
    config.url += '/';
  }
  if (sessionStore.token) {
    config.headers.common.Authorization = sessionStore.token;
  }
  return config;
};

export const requestOnReject = (error: Error) => Promise.reject(error);

export const responseOnReject = (error: Error) => {
  const sessionStore = useSessionStore();

  if (error.toString().indexOf('Request failed with status code 403') > 0) {
    sessionStore.setToken(null);
  }
};
