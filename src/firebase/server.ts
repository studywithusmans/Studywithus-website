import { initializeApp, getApps, App } from "firebase-admin/app";

// This simplified setup uses Application Default Credentials.
// In App Hosting, this will automatically use the backend's service account.
// No service account key is needed!

// Check if the app is already initialized to avoid re-initializing
const apps = getApps();

const initializeAdminApp = (): App => {
  // When no config is provided, initializeApp uses the environment's
  // default credentials. This is the recommended way for App Hosting.
  return initializeApp();
};

export const app: App = apps.length ? apps[0]! : initializeAdminApp();
