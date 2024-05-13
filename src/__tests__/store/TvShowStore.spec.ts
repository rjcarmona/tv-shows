import { beforeEach, describe, it, expect} from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { useTvShowStore } from '../../stores/TvShowStore';

describe('TvShows Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should get isLoading value', () => {
    const tvShow = useTvShowStore();
    expect(tvShow.isLoading).toBe(true);
  })

  it('should get a list of shows', async () => {
    const tvShowStore = useTvShowStore();
    await tvShowStore.fetchTvShows();
    expect((tvShowStore.tvShows[0] as any).id).toEqual(1);
    expect((tvShowStore.tvShows[1] as any).name).toEqual('Person of Interest');
  })

  it('should get show by id', async () => {
    const tvShowStore = useTvShowStore();
    await tvShowStore.getShowById(2);
    expect(tvShowStore.tvShow.id).toEqual(2);
    expect(tvShowStore.tvShow.name).toEqual('Person of Interest');
    await tvShowStore.getShowById(1);
    expect(tvShowStore.tvShow.id).toEqual(1);
    expect(tvShowStore.tvShow.name).toEqual('Under the Dome');
  });
});