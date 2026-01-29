import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BIrsL7Bc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://studywithus.co.in");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.cookies.has("session")) {
    const sessionCookie = Astro2.cookies.get("session");
    if (sessionCookie && sessionCookie.value === "a_very_secret_and_long_and_random_string_for_security") {
      return Astro2.redirect("/admin");
    }
  }
  let error = "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const email = data.get("email");
      const password = data.get("password");
      if (email === "studywithus-dev@example.com" && password === "studywithus-dev-password") {
        Astro2.cookies.set("session", "a_very_secret_and_long_and_random_string_for_security", {
          path: "/",
          httpOnly: true,
          secure: true,
          // Only send cookie over HTTPS in production
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 7
          // 1 week
        });
        return Astro2.redirect("/admin");
      } else {
        error = "Invalid email or password. Please try again.";
      }
    } catch (e) {
      console.error("Login error:", e);
      error = "An unexpected error occurred. Please try again later.";
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Admin Login" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-screen"> <section class="py-8 px-4 w-full max-w-md"> <div class="bg-white rounded-2xl shadow-xl dark:bg-gray-800 p-8"> <div class="text-center mb-6"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Admin Portal</h2> <p class="text-gray-500 dark:text-gray-400 mt-2">Please login to continue</p> </div> ${error && renderTemplate`<div class="p-4 mb-5 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-700 dark:text-red-300 text-center font-medium" role="alert"> ${error} </div>`} <form method="POST" class="space-y-6"> <div> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label> <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="name@company.com" required> </div> <div> <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label> <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="••••••••" required> </div> <button type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 transition duration-150 ease-in-out shadow-md">Login</button> </form> </div> <p class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
Go back to <a href="/" class="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Home Page</a> </p> </section> </main> ` })}`;
}, "/home/user/studywithus-website/src/pages/admin/login.astro", void 0);
const $$file = "/home/user/studywithus-website/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
