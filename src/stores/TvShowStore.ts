import axios from 'axios';
import { defineStore } from 'pinia';
import type { Show } from '@/types/Types';
const baseUrl = 'https://api.tvmaze.com';

export const useTvShowStore = defineStore('tvShowStore', {
  state: () => ({
    tvShows: [],
    isLoading: true,
    tvShow: null
  }),

  getters: {
    getTvShows(state): Show[] {
      return state.tvShows;
    },

    getTvShow(state): Show | null {
      return state.tvShow;
    }
  },

  actions: {
    async fetchTvShows() {
      try {
        const { data } = await axios.get(`${baseUrl}/shows`);
        this.tvShows = data;
        this.dispatchLoading(false);
      } catch (error) {
        alert(error);
        this.dispatchLoading(false);
      }
    },
    async getShowById(id: Number) {
      try {
        const { data } = await axios.get(`${baseUrl}/shows/${id}`);
        this.tvShow = data;
        this.dispatchLoading(false);
      } catch (error) {
        alert(error);
        this.dispatchLoading(false);
      }
    },
    dispatchLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    }
  }
});