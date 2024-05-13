import { createRouter, createWebHistory } from 'vue-router'
import type { Route } from '@/types/Types';
import { useTvShowStore } from '@/stores/TvShowStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/ListPage.vue'),
      props: () => {
        const showStore = useTvShowStore();
        showStore.dispatchLoading(true);
        const shows = showStore.fetchTvShows();

        return shows;
      }
    },
    {
      path: "/show/:id",
      name: "ShowDetailsPage",
      component: () => import("@/pages/ShowDetailsPage.vue"),
      props: (route: Route) => {
        const showStore = useTvShowStore();
        showStore.dispatchLoading(true);
        const show = showStore.getShowById(route.params.id);
  
        return show;
      },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", redirect: "/" },
  ]
})

export default router;
