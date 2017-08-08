import { CcsUiPage } from './app.po';

describe('ccs-ui App', () => {
  let page: CcsUiPage;

  beforeEach(() => {
    page = new CcsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
