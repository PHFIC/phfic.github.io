describe('app home page', function() {
  // browser variable is preloaded with launch_url HTML DOM from nightwatch config
  before(browser => browser.navigateTo(browser.launch_url));

  it('has html', function(browser) {
    browser
      .waitForElementPresent('html') // wait 5000ms for <html> tag
      .assert.elementPresent('html')
  });

  it('renders our name', function(browser) {
    browser
      .waitForElementVisible('body')
      .assert.visible('body')
      .assert.containsText('body', 'Public Health FHIR® Implementation Collaborative')
  });

  after(browser => browser.end());
});
