<script setup lang="ts">
  defineProps<{
    type: string,
    color: string
  }>();
</script>
<template>
  <v-skeleton-loader
    :elevation="5"
    :color="color"
    :type="type"
  >
  </v-skeleton-loader>
</template>