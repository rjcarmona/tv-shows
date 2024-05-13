<script setup lang="ts">
  import type { Show } from '@/types/Types';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  defineProps<{
    items: Show[],
    header: string
  }>();
</script>
<template>
  <div v-if="items?.length">
    <v-list lines="three"
      item-props
    >
      <v-list-subheader>{{ header }}</v-list-subheader>
        <v-list-item
          link
          v-for="show in items" :key="show.id"
          :title="show.name"
          :subtitle="`Rating: ${show.rating.average}`"
          :prepend-avatar="show.image.medium"
          @click="router.push({ path: `/show/${show.id}` })"
        >
      </v-list-item>
      <v-divider inset></v-divider>
    </v-list>
  </div>
</template>