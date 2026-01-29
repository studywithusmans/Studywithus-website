import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIrsL7Bc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Us | StudyWithUs", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About StudyWithUs</h1> <p class="tagline" data-astro-cid-kh7btl4r>Your trusted partner in smart and effective learning.</p> <div class="content" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Our Mission</h2> <p data-astro-cid-kh7btl4r>
At StudyWithUs, our mission is to empower students by making learning simple, structured, and accessible. We are a smart learning platform designed to help you prepare for your exams with clarity and confidence. We believe that with the right tools and guidance, every student can achieve their academic goals without stress.
</p> <h2 data-astro-cid-kh7btl4r>What We Offer</h2> <p data-astro-cid-kh7btl4r>
We provide a comprehensive suite of resources tailored to meet the real needs of students. Our platform includes:
</p> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>High-Quality Study Content:</strong> Curated and created by experts to ensure accuracy and relevance.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Exam-Oriented Blogs:</strong> Strategies, tips, and insights to help you crack your exams.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Current Affairs:</strong> Regularly updated news and analysis to keep you ahead.</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Digital Progress Tools:</strong> Innovative tools to track your syllabus and manage your study plan effectively.</li> </ul> <h2 data-astro-cid-kh7btl4r>Our Philosophy</h2> <p data-astro-cid-kh7btl4r>
Our goal is to create a clean, modern, and user-friendly experience where you can focus on what matters most: learning. We are committed to providing content that is not only regularly updated but also easy to understand. If you’re looking for a reliable and modern study companion, StudyWithUs is built for you.
</p> </div> </div> ` })} `;
}, "/home/user/studywithus-website/src/pages/about.astro", void 0);

const $$file = "/home/user/studywithus-website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
