import ListPage from '@/pages/ListPage.vue';
import Loader from '@/components/Loader.vue';
import { createTestingPinia } from '@pinia/testing';
import { describe, it, expect, vi } from 'vitest';
import { firstShow } from '@/utils/mocks/data';
import { mount } from '@vue/test-utils';


describe('ListPage Page', () => {
  it('the loader is visible when is loading is true', async () => {
    const wrapper = mount(ListPage, {
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
    const wrapper = mount(ListPage, {
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
    const wrapper = mount(ListPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              tvShowStore: {
                isLoading: false,
                tvShows: [firstShow]
              }
            }
          })
        ]
      }
    });
    expect(wrapper.findComponent(Loader).exists()).toBe(false);
    expect(wrapper.text()).toContain('Science-Fiction');
  });

  it('should renderr the input value and filter the array', async () => {
    const wrapper = mount(ListPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              tvShowStore: {
                isLoading: false,
                tvShows: [firstShow]
              }
            }
          })
        ]
      }
    });
    const input = wrapper.find('input');
    const instance = wrapper.vm;
    expect(input.text()).toContain('');
    await input.setValue('Under');
    const shows = (instance as any).shows;
    expect(input.element.value).toEqual('Under');
    expect(shows['Drama'].length).toBe(1);
  });

  it('should renderr the input value and filter the array as empty', async () => {
    const wrapper = mount(ListPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              tvShowStore: {
                isLoading: false,
                tvShows: [firstShow]
              }
            }
          })
        ]
      }
    });
    const input = wrapper.find('input');
    const instance = wrapper.vm;
    expect(input.text()).toContain('');
    await input.setValue('abcde');
    const shows = (instance as any).shows;
    expect(input.element.value).toEqual('abcde');
    expect(shows).toMatchObject({});
  });
});