<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-vue3';
import Banner from '@/Components/Banner.vue';

defineProps({
    title: String,
});

</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />
        
        <q-layout view="hHh lpR fff">
            <q-page-container>
                <q-page class="flex justify-center items-center">
                    <slot />
                </q-page>
            </q-page-container>

            <q-footer elevated class="bg-grey-8 text-white">
                <q-toolbar>
                    <q-toolbar-title>
                    <div>Title</div>
                    </q-toolbar-title>
                </q-toolbar>
            </q-footer>

        </q-layout>
    </div>
</template>
