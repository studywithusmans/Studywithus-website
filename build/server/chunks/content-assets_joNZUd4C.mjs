import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate } from './astro/server_CxTFfa0Z.mjs';
import 'clsx';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const __ASTRO_IMAGE_IMPORT_11KtND = createSvgComponent({"meta":{"src":"/_astro/blog_1.DQ3GtNlL.svg","width":1200,"height":600,"format":"svg"},"attributes":{"width":"1200","height":"600","viewBox":"0 0 1200 600"},"children":"<rect fill=\"#f0f0f0\" width=\"1200\" height=\"600\" /><text fill=\"#888\" font-family=\"sans-serif\" font-size=\"50\" dy=\"10.5\" font-weight=\"bold\" x=\"50%\" y=\"50%\" text-anchor=\"middle\">SSC CGL 2024 Study Plan</text>"});

const __ASTRO_IMAGE_IMPORT_29FC1E = createSvgComponent({"meta":{"src":"/_astro/blog_2.BHhOpOCb.svg","width":1200,"height":600,"format":"svg"},"attributes":{"width":"1200","height":"600","viewBox":"0 0 1200 600"},"children":"<rect fill=\"#f0f0f0\" width=\"1200\" height=\"600\" /><text fill=\"#888\" font-family=\"sans-serif\" font-size=\"50\" dy=\"10.5\" font-weight=\"bold\" x=\"50%\" y=\"50%\" text-anchor=\"middle\">How to Beat Exam Stress</text>"});

const __ASTRO_IMAGE_IMPORT_Z1MAnzg = createSvgComponent({"meta":{"src":"/_astro/blog_3.HvIHP2pN.svg","width":1200,"height":600,"format":"svg"},"attributes":{"width":"1200","height":"600","viewBox":"0 0 1200 600"},"children":"<rect fill=\"#f0f0f0\" width=\"1200\" height=\"600\" /><text fill=\"#888\" font-family=\"sans-serif\" font-size=\"50\" dy=\"10.5\" font-weight=\"bold\" x=\"50%\" y=\"50%\" text-anchor=\"middle\">How to Make Effective Notes</text>"});

const __ASTRO_IMAGE_IMPORT_ZeeAdd = new Proxy({"src":"/_astro/blog-placeholder-4.gLBdjEDe.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/studywithus-website/src/assets/blog-placeholder-4.jpg";
							}
							
							return target[name];
						}
					});

const contentAssets = new Map([["../../assets/blog_1.svg?astroContentImageFlag=&importer=src%2Fcontent%2Fblog%2Fpost-1.md", __ASTRO_IMAGE_IMPORT_11KtND], ["../../assets/blog_2.svg?astroContentImageFlag=&importer=src%2Fcontent%2Fblog%2Fpost-2.md", __ASTRO_IMAGE_IMPORT_29FC1E], ["../../assets/blog_3.svg?astroContentImageFlag=&importer=src%2Fcontent%2Fblog%2Fpost-3.md", __ASTRO_IMAGE_IMPORT_Z1MAnzg], ["../../assets/blog-placeholder-4.jpg?astroContentImageFlag=&importer=src%2Fcontent%2Fblog%2Fpost-4.md", __ASTRO_IMAGE_IMPORT_ZeeAdd]]);

export { contentAssets as default };
