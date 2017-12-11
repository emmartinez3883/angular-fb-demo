import { FBDemoPage } from './app.po';

describe('fb-demo App', function() {
  let page: FBDemoPage;

  beforeEach(() => {
    page = new FBDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
