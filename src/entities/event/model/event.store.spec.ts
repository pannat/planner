import { EventStore } from './event.store';

describe('EventStore', () => {
  const componentStore = new EventStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
