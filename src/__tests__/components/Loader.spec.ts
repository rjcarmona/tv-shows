import Loader from '@/components/Loader.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

describe('Loader', () => {
  it('should find v-skeleton-loader', () => {
    const wrapper = shallowMount(Loader);
    expect(wrapper.find('v-skeleton-loader').exists()).toBe(true);
  });
});