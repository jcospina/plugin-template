import { standalonePlugin } from './plugin';

describe('supply-chain', () => {
  it('should export plugin', () => {
    expect(standalonePlugin).toBeDefined();
  });
});
