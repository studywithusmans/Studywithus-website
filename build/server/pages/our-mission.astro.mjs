import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIrsL7Bc.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$OurMission = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-f6sovytv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mission-container" data-astro-cid-f6sovytv> <h1 data-astro-cid-f6sovytv>Our Mission</h1> <p data-astro-cid-f6sovytv>Our website is a smart learning platform designed to help students prepare better with clarity and confidence. We provide high-quality study content, exam-oriented blogs, current affairs, mock tests, previous year questions, and digital tools to track daily syllabus progress.</p> <p data-astro-cid-f6sovytv>Our goal is to make learning simple, structured, and accessible for every student. All content is regularly updated, easy to understand, and focused on real exam needs. With a clean design and user-friendly experience, students can study, revise, and improve without any technical hassle.</p> <p data-astro-cid-f6sovytv>If you're looking for a reliable and modern study companion, our platform is built for you.</p> </div> ` })} `;
}, "/home/user/studywithus-website/src/pages/our-mission.astro", void 0);

const $$file = "/home/user/studywithus-website/src/pages/our-mission.astro";
const $$url = "/our-mission";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurMission,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
