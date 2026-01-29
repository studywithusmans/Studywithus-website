import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BIrsL7Bc.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Disclaimer", "data-astro-cid-5t5ny3h6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-5t5ny3h6> <h1 data-astro-cid-5t5ny3h6>Disclaimer</h1> <p data-astro-cid-5t5ny3h6>Our disclaimer is being drafted and will be published here soon.</p> </div> ` })} `;
}, "/home/user/studywithus-website/src/pages/disclaimer.astro", void 0);

const $$file = "/home/user/studywithus-website/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
