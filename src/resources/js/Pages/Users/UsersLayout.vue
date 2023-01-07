<script>
import PrivateLayout from '@/Layouts/PrivateLayout.vue'

export default {
  layout: PrivateLayout,
}
</script>

<template>
        <Head title="Usuarios"/>
        <MountedTeleport to="#title">
            Usuarios
        </MountedTeleport>
      
        <q-tabs>
            <q-tab name="mails" icon="mail"></q-tab>
            <q-tab name="alarms" icon="alarm"></q-tab>
          </q-tabs>

        <slot/>
</template>
