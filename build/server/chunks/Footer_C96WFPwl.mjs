import { d as createAstro, c as createComponent, e as addAttribute, a as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, r as renderComponent } from './astro/server_CxTFfa0Z.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { a as SITE_TITLE } from './consts_DdTLzyRP.mjs';

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/studywithus-website/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://studywithus.co.in");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = FallbackImage } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Font Awesome for social icons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro2.url), "content")}>`;
}, "/home/user/studywithus-website/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://studywithus.co.in");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/user/studywithus-website/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const logoUrl = "https://i.postimg.cc/63QwKcn4/logo-(1).png";
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <div class="brand" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <img${addAttribute(logoUrl, "src")} alt="StudyWithUs Logo" class="logo" data-astro-cid-3ef6ksr2> <span class="site-title" data-astro-cid-3ef6ksr2>${SITE_TITLE}</span> </a> </div> <div class="internal-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/admin", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Admin` })} </div> </nav> </header> `;
}, "/home/user/studywithus-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <div class="footer-about" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>StudyWithUs</h3> <p data-astro-cid-sz7xmlte>A smart learning platform designed to help students prepare with clarity and confidence. Your modern study companion.</p> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Quick Links</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/about" data-astro-cid-sz7xmlte>About Us</a></li> <li data-astro-cid-sz7xmlte><a href="/contact" data-astro-cid-sz7xmlte>Contact Us</a></li> </ul> </div> <div class="footer-legal" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Legal</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/privacy" data-astro-cid-sz7xmlte>Privacy Policy</a></li> <li data-astro-cid-sz7xmlte><a href="/disclaimer" data-astro-cid-sz7xmlte>Disclaimer</a></li> <li data-astro-cid-sz7xmlte><a href="/sitemap-0.xml" data-astro-cid-sz7xmlte>Sitemap</a></li> </ul> </div> <div class="footer-social" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Stay Connected on</h4> <div class="social-icons" data-astro-cid-sz7xmlte> <a href="https://youtube.com/@study_with_uss?si=XvpJxaC8AEwgcu7p" target="_blank" rel="noopener noreferrer" aria-label="Youtube" data-astro-cid-sz7xmlte><i class="fab fa-youtube" data-astro-cid-sz7xmlte></i></a> <a href="https://www.instagram.com/studywith_us__?igsh=MTVyMjZmZmlrZ285OA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-astro-cid-sz7xmlte><i class="fab fa-instagram" data-astro-cid-sz7xmlte></i></a> <a href="https://www.facebook.com/share/187QaxVpmc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-astro-cid-sz7xmlte><i class="fab fa-facebook-f" data-astro-cid-sz7xmlte></i></a> <a href="https://whatsapp.com/channel/0029Vb7elytGufJ5ZilKjy3m" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp" data-astro-cid-sz7xmlte><i class="fab fa-whatsapp" data-astro-cid-sz7xmlte></i></a> <a href="https://t.me/Studywith_Uss" target="_blank" rel="noopener noreferrer" aria-label="Telegram" data-astro-cid-sz7xmlte><i class="fab fa-telegram" data-astro-cid-sz7xmlte></i></a> <a href="https://x.com/studywith_us" target="_blank" rel="noopener noreferrer" aria-label="Twitter" data-astro-cid-sz7xmlte><i class="fab fa-twitter" data-astro-cid-sz7xmlte></i></a> <a href="https://pin.it/6AGHNP3Af" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" data-astro-cid-sz7xmlte><i class="fab fa-pinterest" data-astro-cid-sz7xmlte></i></a> <a href="https://aratt.ai/@studywithuss" target="_blank" rel="noopener noreferrer" aria-label="Arattai" data-astro-cid-sz7xmlte><i class="fas fa-comments" data-astro-cid-sz7xmlte></i></a> </div> </div> </div> <div class="footer-copyright" data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} StudyWithUs. All rights reserved.
</div> </footer> `;
}, "/home/user/studywithus-website/src/components/Footer.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
