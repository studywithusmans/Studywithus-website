import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BIrsL7Bc.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../../chunks/consts_DdTLzyRP.mjs';
export { renderers } from '../../renderers.mjs';

const $$CreatePost = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "siteTitle": SITE_TITLE, "siteDescription": SITE_DESCRIPTION }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-900 text-white min-h-screen"> <div class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-6">Create New Post</h1> <div id="seo-score" class="mb-4 text-lg font-bold"></div> <form id="create-post-form"> <div class="mb-4"> <label for="title" class="block text-sm font-medium">Title</label> <input type="text" id="title" name="title" class="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter post title (50–70 characters recommended)" required minlength="10" maxlength="120"> <p class="mt-2 text-sm text-gray-400">
Write a concise, keyword-rich title. Avoid clickbait. <br>
Example: Top 10 SSC Preparation Tips for 2026 — Complete Guide
</p> </div> <div class="mb-4"> <label for="slug" class="block text-sm font-medium">Slug</label> <input type="text" id="slug" name="slug" class="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required maxlength="120"> <p class="mt-2 text-sm text-gray-400">
URL-friendly. Only letters, numbers, hyphens.
</p> </div> <div class="mb-4"> <label for="imageUrl" class="block text-sm font-medium">Featured Image</label> <input type="file" id="imageUrl" name="imageUrl" accept="image/jpeg, image/png, image/webp" class="mt-1" required> <div id="image-preview" class="mt-2"></div> <p class="mt-2 text-sm text-gray-400">
Max file size 2 MB, recommended 1200×628 px (16:9).
</p> </div> <div class="mb-4"> <label for="imageAlt" class="block text-sm font-medium">Image Alt Text</label> <input type="text" id="imageAlt" name="imageAlt" class="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Describe the image for accessibility" required maxlength="125"> </div> <div class="mb-4"> <label for="metaDescription" class="block text-sm font-medium">Meta Description</label> <textarea id="metaDescription" name="metaDescription" rows="3" class="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Write a concise summary that includes the focus keyword." required minlength="50" maxlength="160"></textarea> <p class="mt-2 text-sm text-gray-400"> <span id="meta-char-count">0</span>/160 characters.
</p> </div> <div class="mb-4"> <label for="content" class="block text-sm font-medium">Content</label> <textarea id="content" name="content" rows="10" class="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Write your post content here (min 400 words for long-form)." required></textarea> <p class="mt-2 text-sm text-gray-400">
Word count: <span id="word-count">0</span> </p> </div> <div class="mb-4"> <label for="category" class="block text-sm font-medium">Category</label> <select id="category" name="category" class="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required> <option value="">Select a category</option> <option value="Technology">Technology</option> <option value="Education">Education</option> <option value="Lifestyle">Lifestyle</option> </select> </div> <div class="mb-4"> <label for="tags" class="block text-sm font-medium">Tags</label> <input type="text" id="tags" name="tags" class="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., ssc, cgl, preparation"> <p class="mt-2 text-sm text-gray-400">
3–10 tags recommended — include topic + subtopics
</p> </div> <div class="flex items-center justify-end space-x-4"> <button type="button" id="cancel-btn" class="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700">Cancel</button> <button type="button" id="draft-btn" class="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">Save Draft</button> <button type="button" id="preview-btn" class="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700">Preview</button> <button type="button" id="analyze-btn" class="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-700">Analyze SEO</button> <button type="submit" id="publish-btn" class="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700">Publish</button> </div> </form> <div id="seo-suggestions" class="mt-8"></div> </div> </main> ` })} ${renderScript($$result, "/home/user/studywithus-website/src/pages/admin/create-post.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/studywithus-website/src/pages/admin/create-post.astro", void 0);

const $$file = "/home/user/studywithus-website/src/pages/admin/create-post.astro";
const $$url = "/admin/create-post";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CreatePost,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
