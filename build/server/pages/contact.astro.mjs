import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIrsL7Bc.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Us | StudyWithUs", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Get in Touch</h1> <p class="subtitle" data-astro-cid-uw5kdbxl>We'd love to hear from you. Whether you have a question, feedback, or a partnership inquiry, please don't hesitate to reach out.</p> <div class="contact-info" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Our Email</h2> <p data-astro-cid-uw5kdbxl>For all inquiries, please email us at:</p> <a href="mailto:contact@studywithus.com" class="email-link" data-astro-cid-uw5kdbxl>contact@studywithus.com</a> <p data-astro-cid-uw5kdbxl>We aim to respond to all emails within 48 business hours.</p> </div> <div class="contact-info" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Feedback & Suggestions</h2> <p data-astro-cid-uw5kdbxl>Your feedback is invaluable to us. If you have any suggestions on how we can improve our content or platform, we are all ears!</p> </div> </div> ` })} `;
}, "/home/user/studywithus-website/src/pages/contact.astro", void 0);

const $$file = "/home/user/studywithus-website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
