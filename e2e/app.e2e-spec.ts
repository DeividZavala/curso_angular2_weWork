import { AverquepedoPage } from './app.po';

describe('averquepedo App', function() {
  let page: AverquepedoPage;

  beforeEach(() => {
    page = new AverquepedoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
