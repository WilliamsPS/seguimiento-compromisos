<template>
    <Teleport :to="to" v-if="isMounted"><slot></slot></Teleport>
</template>

<script>
export default {
    name: "MountedTeleport",
    props: ['to'],
    data() {
        return {isMounted: false}
    },
    mounted() {
        this.isMounted = true;
    }
}
</script>