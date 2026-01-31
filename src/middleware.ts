
import { defineMiddleware } from "astro:middleware";
import { getAuth } from "firebase-admin/auth";
import { app } from "./firebase/server";

const auth = getAuth(app);

export const onRequest = defineMiddleware(async ({ cookies, redirect, url }, next) => {
  console.log(`[Middleware] Processing request for: ${url.pathname}`);

  if (url.pathname.startsWith("/admin")) {
    const sessionCookie = cookies.get("session");
    console.log("[Middleware] Admin route detected.");

    if (!sessionCookie) {
      console.log("[Middleware] No session cookie found.");
      if (url.pathname !== "/admin/login") {
        console.log("[Middleware] Not on login page, redirecting to /admin/login.");
        return redirect("/admin/login");
      }
      console.log("[Middleware] On login page, allowing access.");
      return next();
    }

    console.log(`[Middleware] Session cookie found: ${sessionCookie.value.substring(0, 30)}...`);

    try {
      console.log("[Middleware] Verifying session cookie...");
      await auth.verifySessionCookie(sessionCookie.value, true);
      console.log("[Middleware] Session cookie is valid.");

      if (url.pathname === "/admin/login") {
        console.log("[Middleware] User is authenticated and on login page, redirecting to /admin.");
        return redirect("/admin");
      }
      
      console.log("[Middleware] User is authenticated, allowing access to protected route.");
      return next();
    } catch (error) {
      console.error("[Middleware] Error verifying session cookie:", error.code, error.message);
      cookies.delete("session", { path: "/" });
      console.log("[Middleware] Deleted invalid session cookie.");

      if (url.pathname !== "/admin/login") {
        console.log("[Middleware] Redirecting to /admin/login due to invalid cookie.");
        return redirect("/admin/login");
      }
      
      console.log("[Middleware] On login page with invalid cookie, allowing to re-login.");
      return next();
    }
  }

  console.log("[Middleware] Not an admin route, proceeding.");
  return next();
});
