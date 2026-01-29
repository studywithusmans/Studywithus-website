import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BehDoqCK.mjs';
import { manifest } from './manifest_DQdsdmTZ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/add-post.astro.mjs');
const _page3 = () => import('./pages/admin/create-post.astro.mjs');
const _page4 = () => import('./pages/admin/delete-post/_slug_.astro.mjs');
const _page5 = () => import('./pages/admin/edit-post/_slug_.astro.mjs');
const _page6 = () => import('./pages/admin/login.astro.mjs');
const _page7 = () => import('./pages/admin.astro.mjs');
const _page8 = () => import('./pages/api/advanced-create-post.astro.mjs');
const _page9 = () => import('./pages/api/create-post.astro.mjs');
const _page10 = () => import('./pages/api/delete-post.astro.mjs');
const _page11 = () => import('./pages/api/update-post.astro.mjs');
const _page12 = () => import('./pages/blog/_slug_.astro.mjs');
const _page13 = () => import('./pages/blog.astro.mjs');
const _page14 = () => import('./pages/contact.astro.mjs');
const _page15 = () => import('./pages/disclaimer.astro.mjs');
const _page16 = () => import('./pages/our-mission.astro.mjs');
const _page17 = () => import('./pages/privacy.astro.mjs');
const _page18 = () => import('./pages/rss.xml.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/add-post.astro", _page2],
    ["src/pages/admin/create-post.astro", _page3],
    ["src/pages/admin/delete-post/[slug].astro", _page4],
    ["src/pages/admin/edit-post/[slug].astro", _page5],
    ["src/pages/admin/login.astro", _page6],
    ["src/pages/admin/index.astro", _page7],
    ["src/pages/api/advanced-create-post.js", _page8],
    ["src/pages/api/create-post.js", _page9],
    ["src/pages/api/delete-post.js", _page10],
    ["src/pages/api/update-post.js", _page11],
    ["src/pages/blog/[slug].astro", _page12],
    ["src/pages/blog/index.astro", _page13],
    ["src/pages/contact.astro", _page14],
    ["src/pages/disclaimer.astro", _page15],
    ["src/pages/our-mission.astro", _page16],
    ["src/pages/privacy.astro", _page17],
    ["src/pages/rss.xml.js", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/user/studywithus-website/build/client/",
    "server": "file:///home/user/studywithus-website/build/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
