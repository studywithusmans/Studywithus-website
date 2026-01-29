import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { cookies, redirect, request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Protect all routes under /admin, except the login page itself
  const isAdminRoute = pathname.startsWith('/admin') && pathname !== '/admin/login';
  // Protect the API routes for modifying content
  const isApiRoute = pathname.startsWith('/api/');

  if (isAdminRoute || isApiRoute) {
    const session = cookies.get('session')?.value;

    if (session !== import.meta.env.SESSION_SECRET) {
      // For admin UI routes, redirect to login with a redirect parameter
      if (isAdminRoute) {
          const loginUrl = new URL('/admin/login', url.origin);
          loginUrl.searchParams.set('redirect', pathname);
          return redirect(loginUrl.toString());
      } 
      // For API routes, return an unauthorized error
      else {
        return new Response('Unauthorized', { status: 401 });
      }
    }
  }

  return next();
});
