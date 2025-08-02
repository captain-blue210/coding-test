import { hasCycle } from './LinkedListCycle';
import { createLinkedListWithCycle } from './util/createLinkedListWithCycle';

describe('hasCycle', () => {
  it('should return true when cycle exists', () => {
    const given = createLinkedListWithCycle([3, 2, 0, -4], 1);
    expect(hasCycle(given)).toBeTruthy();
  });

  it('should return true when cycle exists', () => {
    const given = createLinkedListWithCycle([1, 2], 0);
    expect(hasCycle(given)).toBeTruthy();
  });

  it('should return false when cycle not exists', () => {
    const given = createLinkedListWithCycle([1], -1);
    expect(hasCycle(given)).toBeFalsy();
  });
});
