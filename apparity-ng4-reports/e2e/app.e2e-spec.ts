import { ApparityNg4ReportsPage } from './app.po';

describe('apparity-ng4-reports App', function() {
  let page: ApparityNg4ReportsPage;

  beforeEach(() => {
    page = new ApparityNg4ReportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
