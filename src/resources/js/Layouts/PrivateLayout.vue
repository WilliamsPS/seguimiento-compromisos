<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import Banner from '@/Components/Banner.vue';
import AppLogo from '@/Components/AppLogo.vue';

// defineProps({
//     foo: {type: String, default: 'sdffds', required: false}
// });

const leftDrawerOpen = ref(true);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const logout = () => {
  Inertia.post(route('logout'));
};
</script>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: false,
      default: []
    }
  }
}
</script>

<template>
  <div>
    <Banner />
    <q-layout view="lhh lpR lff">

      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title id="title">
            <!--q-avatar>
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                        </q-avatar-->
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above :width="200" :breakpoint="400">
        <q-img style="height: 100px">
          <div class="bg-transparent flex justify-center">
            <AppLogo />
          </div>
        </q-img>
        <q-scroll-area style="height: calc(100% - 100px);border-right: 1px solid #ddd">
          <q-list padding>
            <q-item @click="$inertia.visit(route('dashboard.users'), { method: 'get' });" clickable exact>
              <q-item-section avatar>
                <q-icon name="inbox"></q-icon>
              </q-item-section>
              <q-item-section>
                CMD
              </q-item-section>
            </q-item>
            <q-item @click="$inertia.visit(route('dashboard'), { method: 'get' });" clickable exact>
              <q-item-section avatar>
                <q-icon name="inbox"></q-icon>
              </q-item-section>
              <q-item-section>
                CMD
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"></q-icon>
              </q-item-section>
              <q-item-section>
                Perfil
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"></q-icon>
              </q-item-section>
              <q-item-section>
                Usuarios
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"></q-icon>
              </q-item-section>
              <q-item-section>
                Roles
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"></q-icon>
              </q-item-section>
              <q-item-section>
                Permisos
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page>
          <q-tabs v-show="tabs.lenght>0">
            <q-tab name="mails" icon="mail"></q-tab>
            <q-tab name="alarms" icon="alarm"></q-tab>
          </q-tabs>

          <slot />
        </q-page>
      </q-page-container>

      <q-footer bordered class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <div>Title</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

    </q-layout>
  </div>
</template>
