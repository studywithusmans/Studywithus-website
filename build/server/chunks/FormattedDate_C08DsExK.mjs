import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://studywithus.co.in");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  let dateObject;
  if (date) {
    dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) {
      dateObject = void 0;
    }
  }
  return renderTemplate`${dateObject && renderTemplate`${maybeRenderHead()}<time${addAttribute(dateObject.toISOString(), "datetime")}>${dateObject.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}</time>`}`;
}, "/home/user/studywithus-website/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
