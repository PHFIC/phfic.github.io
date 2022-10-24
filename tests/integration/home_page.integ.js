describe('app home page', function() {
  // browser variable is preloaded with launch_url HTML DOM from nightwatch config

  it('has html', function(browser) {
    browser
      .waitForElementPresent('html') // wait 5000ms for <html> tag
      .assert.elementPresent('html')
  });

  it('renders body', function(browser) {
    browser
      .waitForElementVisible('body')
      .assert.visible('body')
  });

  after(browser => browser.end());
});
