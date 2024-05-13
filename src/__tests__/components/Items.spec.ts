import Items from '@/components/Items.vue';
import { describe, it, expect } from 'vitest';
import { firstShow } from '../../utils/mocks/data';
import { mount } from '@vue/test-utils';

describe('Items', () => {
  it('renders the correct header', () => {
    const wrapper = mount(Items, { props: { items: [firstShow], header: 'Action' } });
    expect(wrapper.text()).toContain('Action');
  });
});
