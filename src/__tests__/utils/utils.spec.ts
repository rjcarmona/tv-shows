import { firstShow, secondShow } from '@/utils/mocks/data';
import { sortList } from '@/utils/utils';
import { describe, it, expect, vi } from 'vitest';

describe('Utils', () => {
  it('sortList should return the sorted data', async () => {
    const result = sortList([firstShow, secondShow]);
    expect(result[0].rating.average).toEqual(8.8);
  });
});