import EmptyState from '@/components/EmptyState.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

describe('EmptyState', () => {
  it('should find v-skeleton-loader', () => {
    const wrapper = shallowMount(EmptyState);
    expect(wrapper.find('v-empty-state').exists()).toBe(true);
  });
});
