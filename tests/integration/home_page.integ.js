describe('app home page', function() {
  // browser variable is preloaded with launch_url HTML DOM from nightwatch config

  it('has html', function(browser) {
    browser
      /*.navigateTo('http://127.0.0.1:3000/')*/
      .waitForElementPresent('html') // wait 5000ms for <html> tag
      .assert.elementPresent('html')
  });

  it('renders our name', function(browser) {
    browser
      /*.navigateTo('http://127.0.0.1:3000/')*/
      .waitForElementVisible('body')
      .assert.visible('body')
      .assert.containsText('body', 'Public Health FHIR® Implementation Collaborative')
  });

  after(browser => browser.end());
});
