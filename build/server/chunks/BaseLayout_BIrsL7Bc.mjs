import { d as createAstro, c as createComponent, r as renderComponent, f as renderHead, g as renderSlot, a as renderTemplate } from './astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_C96WFPwl.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_DdTLzyRP.mjs';
/* empty css                         */

const $$Astro = createAstro("https://studywithus.co.in");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = SITE_TITLE, description = SITE_DESCRIPTION } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-37fxchfa": true })}<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer">${renderHead()}</head> <body data-astro-cid-37fxchfa> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })} <main data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "/home/user/studywithus-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
