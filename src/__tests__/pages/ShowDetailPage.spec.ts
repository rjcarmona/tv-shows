import Loader from '@/components/Loader.vue';
import router from '@/router';
import ShowDetailsPage from '@/pages/ShowDetailsPage.vue';
import { createTestingPinia } from '@pinia/testing';
import { describe, it, expect, vi } from 'vitest';
import { firstShow } from '@/utils/mocks/data';
import { mount } from '@vue/test-utils';


describe('ShowDetailsPage Page', () => {
  it('the loader is visible when is loading is true', async () => {
    const wrapper = mount(ShowDetailsPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              tvShowStore: {
                isLoading: true
              }
            }
          })
        ]
      }
    });
    expect(wrapper.findComponent(Loader).exists()).toBe(true);
  });

  it('the loader is not visible when is loading is true', async () => {
    const wrapper = mount(ShowDetailsPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              tvShowStore: {
                isLoading: false
              }
            }
          })
        ]
      }
    });
    expect(wrapper.findComponent(Loader).exists()).toBe(false);
  });

  it('should render the data', async () => {
    const wrapper = mount(ShowDetailsPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              tvShowStore: {
                isLoading: false,
                tvShow: firstShow
              }
            }
          })
        ]
      }
    });
    expect(wrapper.findComponent(Loader).exists()).toBe(false);
    expect(wrapper.text()).toContain('Under the Dome');
  });

  it('should go back when clicking the link', async () => {
    const wrapper = mount(ShowDetailsPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              tvShowStore: {
                isLoading: false,
                tvShow: firstShow
              }
            }
          }),
          router
        ]
      }
    });
    const push = vi.spyOn(router, 'push');

    await wrapper.find('a[id=back-link]').trigger('click');

    expect(push).toHaveBeenCalledOnce();
    expect(push).toHaveBeenCalledWith('/');
    expect(push).toHaveBeenCalledTimes(1);
  })
});