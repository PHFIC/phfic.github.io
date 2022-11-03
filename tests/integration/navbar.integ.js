describe('navigation bar', function() {
  // browser variable is preloaded with launch_url HTML DOM from nightwatch config

  it('renders', function(browser) {
    browser
      .assert.visible('nav')
      .assert.hasClass('nav', 'navbar')
      .assert.visible('a.navbar-brand > img')
  });

  it('has clickable logo', function(browser) {
    browser
      .assert.visible('nav')
      .assert.visible('a.navbar-brand > img')
      .assert.containsText('a.navbar-brand', 'PHFIC')
      .click('a.navbar-brand')
      .assert.titleContains('Home')
  });

  /* TODO: test 'Home' link, dropdowns, toggle button for small screen */

  after(browser => browser.end());
});
