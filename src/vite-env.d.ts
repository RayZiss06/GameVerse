/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_ENV: string;

  readonly VITE_API_BASE_URL: string;
  readonly VITE_WS_BASE_URL: string;

  readonly VITE_AUTH_URL: string;
  readonly VITE_AUTH_REALM: string;
  readonly VITE_AUTH_CLIENT_ID: string;

  readonly VITE_ENABLE_DEVTOOLS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
