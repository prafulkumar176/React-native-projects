export const val = (globalThis.setTimeout = jest
  .fn()
  .mockImplementation(callback => callback && callback()));
