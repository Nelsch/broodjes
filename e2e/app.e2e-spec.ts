import { BroodjesPage } from './app.po';

describe('broodjes App', function() {
  let page: BroodjesPage;

  beforeEach(() => {
    page = new BroodjesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
