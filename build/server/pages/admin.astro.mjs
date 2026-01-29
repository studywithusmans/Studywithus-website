import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIrsL7Bc.mjs';
import { g as getCollection } from '../chunks/_astro_content_Crr9Pmqw.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let postsWithSeo = [];
  let error = null;
  const calculateSeoScore = (post) => {
    let score = 100;
    const issues = [];
    const { data, body } = post;
    if (!data.title) {
      score -= 25;
      issues.push("Missing title.");
    } else if (data.title.length < 40 || data.title.length > 70) {
      score -= 10;
      issues.push("Title length is suboptimal (aim for 40-70 chars).");
    }
    if (!data.description) {
      score -= 25;
      issues.push("Missing meta description.");
    } else if (data.description.length < 70 || data.description.length > 160) {
      score -= 10;
      issues.push("Description length is suboptimal (aim for 70-160 chars).");
    }
    const words = body ? body.trim().split(/\s+/).filter(Boolean).length : 0;
    if (words < 500) {
      score -= 15;
      issues.push(`Post is short (${words} words). Aim for 500+.`);
    }
    if (!data.heroImage) {
      score -= 15;
      issues.push("Missing hero image.");
    } else if (!data.imageAlt) {
      score -= 10;
      issues.push("Hero image is missing alt text.");
    }
    score = Math.max(0, score);
    let scoreColor = "text-green-500";
    if (score < 50) scoreColor = "text-red-500";
    else if (score < 80) scoreColor = "text-yellow-500";
    return { score, color: scoreColor, issues };
  };
  try {
    const posts = await getCollection("blog");
    postsWithSeo = posts.map((post) => {
      const seo = calculateSeoScore(post);
      return { ...post, seo };
    }).sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
  } catch (e) {
    console.error(e);
    error = "Failed to load blog posts. Please check the content files for errors.";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Admin Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"> <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
Admin Dashboard
</h1> <a href="/admin/create-post" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
+ Add New Post
</a> </div> ${error && renderTemplate`<div class="rounded-md bg-red-50 p-4 mb-8"> <div class="flex"> <div class="ml-3"> <h3 class="text-sm font-medium text-red-800">${error}</h3> </div> </div> </div>`} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${postsWithSeo.map((post) => renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"> <div class="p-6"> <p class="text-sm text-gray-500 dark:text-gray-400">${new Date(post.data.pubDate).toLocaleDateString()}</p> <h2 class="mt-2 text-xl font-semibold text-gray-900 dark:text-white truncate">${post.data.title}</h2> <p class="mt-1 text-sm text-gray-600 dark:text-gray-300 truncate">${post.data.description}</p> <div class="mt-4"> <span${addAttribute(`text-sm font-bold ${post.seo.color}`, "class")}>SEO Score: ${post.seo.score}</span> ${post.seo.issues.length > 0 && renderTemplate`<ul class="mt-2 text-xs text-gray-500 dark:text-gray-400 list-disc list-inside"> ${post.seo.issues.slice(0, 2).map((issue) => renderTemplate`<li>${issue}</li>`)} </ul>`} </div> </div> <div class="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-end gap-4"> <a${addAttribute(`/admin/edit-post/${post.slug}`, "href")} class="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">Edit</a> <a${addAttribute(`/admin/delete-post/${post.slug}`, "href")} class="font-medium text-red-600 dark:text-red-400 hover:text-red-500">Delete</a> </div> </div>`)} </div> </div> </main> ` })}`;
}, "/home/user/studywithus-website/src/pages/admin/index.astro", void 0);

const $$file = "/home/user/studywithus-website/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
