import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"ab9945eb-9031-4def-ae86-ca5da01df00e","homePageId":"4196c61a-608d-4515-bf70-6232e0e9f9bb","authPluginId":"e93a2dfd-9b19-473e-b445-c666fed4e14a","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"es","default":true,"isDefaultPath":false}],"background":{},"workflows":[],"pages":[{"id":"696b7e0d-3762-4099-85e9-796db2588ef8","linkId":"696b7e0d-3762-4099-85e9-796db2588ef8","name":"Users","folder":null,"paths":{"en":"users","default":"users"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"be8c4924-c9c9-4a27-a44e-7ef552b5fae1","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"ee35d02e-6f96-4c40-a699-0098cc7186b9","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"455759f7-bc36-431c-9349-c25d35b77b85","sectionTitle":"Content","linkId":"6271a9ca-81dc-4105-8a94-44087979973f"},{"uid":"5e278ce0-bfbd-4d11-b4a1-bfc3839ccf8e","sectionTitle":"Modal","linkId":"b473a8bc-ea8b-47bf-9895-8fb6f79c5164"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"62df40fb-9a05-4e34-b681-e5731727e3ac","linkId":"62df40fb-9a05-4e34-b681-e5731727e3ac","name":"Analítica","folder":null,"paths":{"en":"home","default":"home"},"langs":["es"],"cmsDataSetPath":null,"sections":[{"uid":"ee35d02e-6f96-4c40-a699-0098cc7186b9","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"be8c4924-c9c9-4a27-a44e-7ef552b5fae1","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"c8be3801-8436-41f7-a9bb-984cb5c1be44","sectionTitle":"Content","linkId":"f68cb9f6-bdea-4e51-a290-ebd9adb35696"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4049841b-34e8-4315-8246-e3e8ef5d0535","linkId":"4049841b-34e8-4315-8246-e3e8ef5d0535","name":"Clientes","folder":null,"paths":{"es":"deals-copy-copy-copy","default":"deals-copy-copy-copy"},"langs":["es"],"cmsDataSetPath":null,"sections":[{"uid":"be8c4924-c9c9-4a27-a44e-7ef552b5fae1","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"ee35d02e-6f96-4c40-a699-0098cc7186b9","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"fecdc050-2525-4978-a7c4-82431c00d903","sectionTitle":"Content","linkId":"9513d30c-504b-4045-ad61-39f0bd4404d2"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"33940877-911a-4e92-bd7e-08a0c3a72f50","linkId":"33940877-911a-4e92-bd7e-08a0c3a72f50","name":"Proveedores","folder":null,"paths":{"es":"deals-copy-copy-copy-copy","default":"deals-copy-copy-copy-copy"},"langs":["es"],"cmsDataSetPath":null,"sections":[{"uid":"be8c4924-c9c9-4a27-a44e-7ef552b5fae1","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"ee35d02e-6f96-4c40-a699-0098cc7186b9","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"8f5b71f6-561f-484e-ac87-91cd6439d1c2","sectionTitle":"Content","linkId":"4134f6bd-9eae-424e-b7a7-20e2ae35699c"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a0d420f6-729c-4b73-bbc7-bb7720994926","linkId":"a0d420f6-729c-4b73-bbc7-bb7720994926","name":"Configuración","folder":null,"paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"ee35d02e-6f96-4c40-a699-0098cc7186b9","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"be8c4924-c9c9-4a27-a44e-7ef552b5fae1","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"5106f27a-cca2-47b8-8084-d87e23ba3ffc","sectionTitle":"Content","linkId":"da50435c-594c-4c49-9959-baa9f60af409"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4196c61a-608d-4515-bf70-6232e0e9f9bb","linkId":"4196c61a-608d-4515-bf70-6232e0e9f9bb","name":"Log in","folder":null,"paths":{"en":"log_in","default":"log_in"},"langs":["es"],"cmsDataSetPath":null,"sections":[{"uid":"a9e19eb9-b3b4-4e60-a5fd-d08f4c3191e6","sectionTitle":"Sign in","linkId":"6e6c6034-7a03-4d90-b22a-07965a537932"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"84b30f53-2906-4446-a6a3-96a8eeb11df9","linkId":"84b30f53-2906-4446-a6a3-96a8eeb11df9","name":"Ubicaciones","folder":null,"paths":{"en":"deals","default":"deals"},"langs":["es"],"cmsDataSetPath":null,"sections":[{"uid":"be8c4924-c9c9-4a27-a44e-7ef552b5fae1","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"ee35d02e-6f96-4c40-a699-0098cc7186b9","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"d4d7064e-6100-43e3-81b0-59ddd43f4f5a","sectionTitle":"Content","linkId":"d9a2a5c6-0091-404c-8860-cc25b6f6cd78"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3be6ff4f-e030-44a8-bcb6-ade63b005bd0","linkId":"3be6ff4f-e030-44a8-bcb6-ade63b005bd0","name":"Inventario","folder":null,"paths":{"es":"inventario","default":"inventario"},"langs":["es"],"cmsDataSetPath":null,"sections":[{"uid":"be8c4924-c9c9-4a27-a44e-7ef552b5fae1","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"ee35d02e-6f96-4c40-a699-0098cc7186b9","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"f88ea9f3-6af2-497d-821b-6a74affb87fa","sectionTitle":"Content","linkId":"1a217eb6-67fa-4ba5-9ed3-5392f18aad01"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"16509eb6-52e0-4448-bc05-81bf60a444ee","linkId":"16509eb6-52e0-4448-bc05-81bf60a444ee","name":"Pedidos","folder":null,"paths":{"es":"pedidos","default":"pedidos"},"langs":["es"],"cmsDataSetPath":null,"sections":[{"uid":"be8c4924-c9c9-4a27-a44e-7ef552b5fae1","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"3f432caf-a94c-4c55-a603-1be057900f00","sectionTitle":"Bottom Nav","linkId":"03a430e8-d035-440b-b3a5-91267479cb46"},{"uid":"ee35d02e-6f96-4c40-a699-0098cc7186b9","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"7b9a72c1-d653-4148-afc5-7dd0ba4999f2","sectionTitle":"Content","linkId":"8474c088-7adb-4168-8109-84ee3e9bb7e2"},{"uid":"018b9f52-0aba-49e6-9d4d-a9c17a69a849","sectionTitle":"Bottom Nav","linkId":"cef9489b-e149-464c-89dc-011c825030fc"},{"uid":"40bc9d65-00bb-48a8-aa14-2b03927f50e7","sectionTitle":"Top Nav","linkId":"4deefa52-e493-41b7-8478-a4afeaab8817"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1c5f5c0f-5609-4031-9e57-5bb4811be7b3","name":"Youtube","namespace":"youtube"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"e93a2dfd-9b19-473e-b445-c666fed4e14a","name":"Auth0","namespace":"auth0"},{"id":"ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9","name":"CSV","namespace":"csv"},{"id":"60610cfd-fa28-4fc1-9e72-088b5c667e81","name":"Calendly","namespace":"calendly"},{"id":"cabb43dd-6161-4140-8ebf-03b6fb045a0b","name":"Google","namespace":"google"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 4;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
