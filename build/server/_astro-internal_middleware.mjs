import { d as defineMiddleware, s as sequence } from './chunks/index_DVmzzTHV.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BM-RM4tS.mjs';
import 'piccolore';
import './chunks/astro/server_CxTFfa0Z.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { cookies, redirect, request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const isAdminRoute = pathname.startsWith("/admin") && pathname !== "/admin/login";
  const isApiRoute = pathname.startsWith("/api/");
  if (isAdminRoute || isApiRoute) {
    const session = cookies.get("session")?.value;
    if (session !== "a_very_secret_and_long_and_random_string_for_security") {
      if (isAdminRoute) {
        const loginUrl = new URL("/admin/login", url.origin);
        loginUrl.searchParams.set("redirect", pathname);
        return redirect(loginUrl.toString());
      } else {
        return new Response("Unauthorized", { status: 401 });
      }
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
