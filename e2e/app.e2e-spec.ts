import { FezzikPage } from './app.po';

describe('fezzik App', function() {
  let page: FezzikPage;

  beforeEach(() => {
    page = new FezzikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
