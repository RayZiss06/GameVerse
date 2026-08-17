const requiredEnv = (value: string | undefined, name: string): string => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

export const env = {
  appName: requiredEnv(import.meta.env.VITE_APP_NAME, "VITE_APP_NAME"),
 
  appEnvironment: requiredEnv(import.meta.env.VITE_APP_ENV, "VITE_APP_ENV"),

  apiBaseUrl: requiredEnv(
    import.meta.env.VITE_API_BASE_URL,
    "VITE_API_BASE_URL",
  ),

  wsBaseUrl: requiredEnv(import.meta.env.VITE_WS_BASE_URL, "VITE_WS_BASE_URL"),

  authUrl: requiredEnv(import.meta.env.VITE_AUTH_URL, "VITE_AUTH_URL"),

  authRealm: requiredEnv(import.meta.env.VITE_AUTH_REALM, "VITE_AUTH_REALM"),

  authClientId: requiredEnv(
    import.meta.env.VITE_AUTH_CLIENT_ID,
    "VITE_AUTH_CLIENT_ID",
  ),

  enableDevtools: import.meta.env.VITE_ENABLE_DEVTOOLS === "true",
  
} as const;
