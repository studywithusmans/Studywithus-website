import { d as createAstro, c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BIrsL7Bc.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_Crr9Pmqw.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://studywithus.co.in");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = await getCollection("blog");
  const post = posts.find((p) => p.data.slug === slug);
  if (!post) {
    return new Response(null, { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Confirm Deletion: ${post.data.title}`, "data-astro-cid-myt3m7xr": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-50 dark:bg-gray-900" data-astro-cid-myt3m7xr> <section class="py-8 px-4 mx-auto max-w-2xl lg:py-16" data-astro-cid-myt3m7xr> <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white text-center" data-astro-cid-myt3m7xr>Confirm Deletion</h2> <p class="mb-6 text-center text-gray-500 dark:text-gray-400" data-astro-cid-myt3m7xr>Are you sure you want to delete the post "${post.data.title}"? This action cannot be undone.</p> <form id="delete-post-form"${addAttribute(post.data.slug, "data-slug")} data-astro-cid-myt3m7xr> <div id="form-message" class="mt-4 text-center font-medium" data-astro-cid-myt3m7xr></div> <div class="flex items-center justify-center space-x-4 mt-6" data-astro-cid-myt3m7xr> <button type="submit" id="submit-btn" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900" data-astro-cid-myt3m7xr>Yes, Delete</button> <a href="/admin" class="text-gray-600 inline-flex items-center hover:text-white border border-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-900" data-astro-cid-myt3m7xr>Cancel</a> </div> </form> </section> </main> ` })}  ${renderScript($$result, "/home/user/studywithus-website/src/pages/admin/delete-post/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/studywithus-website/src/pages/admin/delete-post/[slug].astro", void 0);

const $$file = "/home/user/studywithus-website/src/pages/admin/delete-post/[slug].astro";
const $$url = "/admin/delete-post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
