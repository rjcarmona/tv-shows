<script setup lang="ts">
  import Loader from '@/components/Loader.vue';
  import { ArrowLeftIcon } from '@heroicons/vue/20/solid';
  import { StarIcon } from "@heroicons/vue/24/solid";
  import { useTvShowStore } from '@/stores/TvShowStore';
  const tvShowStore = useTvShowStore();
</script>

<template>
  <aside class="flex justify-center mt-10 ml-12">
    <router-link id="back-link" to="/">
      <div class="d-flex align-center">
        <ArrowLeftIcon class="icon-20" />
        <span>Back</span>
      </div>
    </router-link>
  </aside>
  <Loader
    v-if="tvShowStore.isLoading"
    class="mx-auto"
    max-width="50rem"
    height="31.25rem"
    :color="'secondary'"
    :type="'card'"
  />
  <v-card
    v-if="!tvShowStore.isLoading && tvShowStore.getTvShow"
    class="mx-auto"
    max-width="1000"
  >
    <div class="px-8 py-8">
      <div class="d-flex justify-space-between align-center pb-8">
        <div>
        <h1>{{ tvShowStore.getTvShow?.name }}</h1>
        <div>
          <span class="pr-2">{{ tvShowStore.getTvShow?.premiered }}</span>
          <span class="pr-2">{{ tvShowStore.getTvShow?.runtime }}min</span>
          <span>{{ tvShowStore.getTvShow?.language }}</span>
        </div>
      </div>
      <div>
          <span class="mr-2 bold-text">Day</span>/
          <span class="mr-2 bold-text">Time</span>
          <div class="d-flex align-center">
            <span class="mr-2">{{ tvShowStore.getTvShow?.schedule?.days[0] }}</span>/
            <span class="ml-2">{{ tvShowStore.getTvShow?.schedule?.time }} GMT-4</span>
          </div>
        </div>
        <div>
          <div class="bold-text">Rating</div>
          <div class="d-flex align-center">
            <StarIcon class="icon-20 star-icon" />
            <span class="ml-2">{{ tvShowStore.getTvShow?.rating?.average }} / 10</span>
          </div>
        </div>
      </div>
      <v-img
        class="border-radius"
        height="22.5rem"
        width="15.5rem"
        cover
        :src="tvShowStore.getTvShow?.image?.medium"
      ></v-img>
      

      <div>
        <v-chip class="my-4 mr-2" v-for="genre in tvShowStore.getTvShow?.genres">
          {{ genre }}
        </v-chip>
        <p v-html="tvShowStore.getTvShow?.summary"></p>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
  .icon-20 {
    width: 1.25rem;
    height: 1.25rem;
  }

  .star-icon {
    color: #F5C518;
  }

  .bold-text {
    font-weight: bold;
  }

  .border-radius {
   border-radius: 1rem; 
  }
</style>
