import { CustomServicesPage } from './app.po';

describe('custom-services App', () => {
  let page: CustomServicesPage;

  beforeEach(() => {
    page = new CustomServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
