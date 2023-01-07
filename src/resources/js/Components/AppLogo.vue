<script setup>
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Link :href="route('dashboard')">
        <q-img
            class="q-ma-sm"
            :ratio="16/9"
            src="/logo.png"
            width="120px"
        />
    </Link>
</template>
