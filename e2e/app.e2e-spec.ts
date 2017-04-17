import { MonJardinPage } from './app.po';

describe('mon-jardin App', () => {
  let page: MonJardinPage;

  beforeEach(() => {
    page = new MonJardinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
