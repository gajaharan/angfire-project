import { AngfireProjectPage } from './app.po';

describe('angfire-project App', function() {
  let page: AngfireProjectPage;

  beforeEach(() => {
    page = new AngfireProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
