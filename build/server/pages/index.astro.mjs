import { c as createComponent, m as maybeRenderHead, b as renderScript, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIrsL7Bc.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_Crr9Pmqw.mjs';
export { renderers } from '../renderers.mjs';

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const images = [
    "https://i.postimg.cc/GmQm1HVS/1768896141277.png",
    "https://i.postimg.cc/X76jGf0C/1768896411980.png",
    "https://i.postimg.cc/v8fMs46m/Picsart-26-01-20-16-51-35-584.png"
  ];
  return renderTemplate`${maybeRenderHead()}<div id="carousel-container" data-astro-cid-wfe7xcno> ${images.map((src, index) => renderTemplate`<img${addAttribute(src, "src")}${addAttribute(`Carousel Image ${index + 1}`, "alt")}${addAttribute(["carousel-image", { active: index === 0 }], "class:list")} data-astro-cid-wfe7xcno>`)} </div>  ${renderScript($$result, "/home/user/studywithus-website/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/studywithus-website/src/components/Carousel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  ).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hero-viewport" data-astro-cid-j7pv25f6> <div class="welcome-section" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Welcome to StudyWithUs</h1> <p data-astro-cid-j7pv25f6>Daily syllabus track karo, smart planning ke saath — bina stress, better results</p> </div> <div class="hero-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Carousel", $$Carousel, { "data-astro-cid-j7pv25f6": true })} </div> <div class="button-container" data-astro-cid-j7pv25f6> <a href="/our-mission" class="btn" data-astro-cid-j7pv25f6>Start Tracking Free</a> <a href="/our-mission" class="btn btn-secondary" data-astro-cid-j7pv25f6>Explore Content</a> </div> </div> <div class="latest-posts" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Latest Posts</h2> <ul data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<li data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-j7pv25f6> <img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${post.data.title}</h3> <p data-astro-cid-j7pv25f6>${post.data.description}</p> </a> </li>`)} </ul> </div> ` })} `;
}, "/home/user/studywithus-website/src/pages/index.astro", void 0);

const $$file = "/home/user/studywithus-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
