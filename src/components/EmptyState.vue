<script setup lang="ts">
  defineProps<{
    title: string,
    text: string
    icon: string
  }>();
</script>
<template>
  <v-empty-state
    :icon="icon"
    :text="text"
    :title="title"
  ></v-empty-state>
</template>