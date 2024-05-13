<script setup lang="ts">
  import EmptyState from '@/components/EmptyState.vue';
  import Items from '@/components/Items.vue';
  import Loader from '@/components/Loader.vue';
  import { computed, ref } from 'vue';
  import { NotFoundTxt, sortList } from '@/utils/utils';
  import type { Show } from '@/types/Types';
  import { useTvShowStore } from '@/stores/TvShowStore';
  const tvShowStore = useTvShowStore();
  let input = ref('');

  const shows = computed(() => {
    let results = sortList(tvShowStore.getTvShows);
    const filter = input.value;
    if (filter.length) {
      results = sortList(tvShowStore.getTvShows.filter((show: Show) =>
        show.name.toLowerCase().includes(input.value.toLowerCase())
      ));
    }

    return results.reduce((acc: Show | any, curr: Show) => {
      curr.genres.forEach(genre => acc[genre] ? acc[genre]?.push(curr) : acc[genre] = [curr]);  
      
      return acc;
    }, {} as Show);
  });

</script>
<template>
  <Loader
    v-if="tvShowStore.isLoading"
    class="mx-auto"
    max-width="50rem"
    height="56.25rem"
    :color="'secondary'"
    :type="'list-item-avatar-three-line'"
  />
  <div v-else>
    <h1 class="my-4 mx-2">Tv Shows App</h1>
    <v-row>
      <v-col lg="3" md="12">
        <input type="text" v-model="input" placeholder="Search TV shows..." />
      </v-col>
      <v-col lg="7" md="12">
        <v-card
          class="mx-auto"
        >
          <EmptyState
            v-if="input && !Object.keys(shows).length"
            :title="`We couldn't find a match.`"
            :text="NotFoundTxt"
            :icon="`mdi-magnify`"
          />
          <Items
            v-else
            v-for="keyVal in Object.keys(shows).sort()"
            :items="shows[keyVal as keyof Show]"
            :header="keyVal"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
  input {
    display: block;
    height: 3.125rem;
    width: 21.875rem;
    padding: 0.625rem 2.813rem;
    background: white url(/src/assets/search-svgrepo-com.svg) no-repeat 0.938rem center;
    background-size: 0.938rem 0.938rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.313rem;
    box-shadow: #0000004d 0rem 0.15rem 0.313rem -0.063rem, 
      #0000004d 0rem 0.063rem 0.188rem -0.063rem;

    @media (max-width: 1500px) and (min-width: 1280px) {
      width: 17rem;
    }
  }

  .error {
    background-color: tomato;
  }
</style>