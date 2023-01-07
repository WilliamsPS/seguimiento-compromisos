import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

// CUSTOM
import VueGates from 'vue-gates';
import Permissions from './Plugins/Permissions';

import { Quasar } from 'quasar'
import quasarUserOptions from './Plugins/quasar-user-options'

import PrivateLayout from './Layouts/PrivateLayout.vue'
import MountedTeleport from './Components/MountedTeleport.vue'


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'SD';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
        page.then((module) => {
            module.default.layout = module.default.layout || PrivateLayout;
          });
        return page;
    },
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(VueGates)
            .use(Quasar, quasarUserOptions)
            .use(Permissions)
            .component('Head', Head)
            .component('MountedTeleport', MountedTeleport)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
