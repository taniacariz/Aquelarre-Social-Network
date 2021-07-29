import { nav } from '../src/componentes/nav.js';

describe('nav', () => {
  it('should render without crashing', () => {
    const navOne = nav();
    expect(navOne instanceof HTMLElement).toBe(true);
  });
});
