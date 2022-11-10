describe('navigation bar', function() {
  before(browser => browser.navigateTo(browser.launch_url))

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
      .assert.textContains('a.navbar-brand', 'PHFIC')
      .click('a.navbar-brand')
      .assert.titleContains('Home')
  });

  /* TODO: consider refactor to test for all links and functionality */
  it('has Home link', function(browser) {
    browser
      .assert.visible("nav a[href='/']")
  });

  /* TODO: consider running for all dropdowns instead of just first */
  it('has functional dropdown', function(browser) {
    const dropdownButtonSelector = 'div.dropdown a.dropdown-toggle';
    const dropdownMenuSelector = '.dropdown-menu';
    browser
      .pause(1100)
      .waitForElementPresent( "css selector", dropdownButtonSelector, 5000) // 'dropdown has no toggle button' )
      //.waitForElementVisible( dropdownButtonSelector, 30000 )
      .assert.not.elementPresent( dropdownMenuSelector, 'dropdown is hiding menu' )
      //.assert.elementsCount('nav .dropdown a.dropdown-toggle', 6)
      //.move({origin: element(dropdownButtonSelector), x: 100, y: 100})
      .pause(1100)
      //.assert.hasClass( dropdownButtonSelector, 'fw-bold', 'dropdown label did not change on hover' )
      .click(dropdownButtonSelector)
      .pause(1000)
      .assert.visible( dropdownMenuSelector, 'dropdown menu shown after click' )
      //.move({origin: element('footer')})
      .pause(1000)
      .click('body')
      .pause(1000)
      .assert.not.visible( dropdownMenuSelector, 'dropdown menu hiden after clicking away')
  });

  after(browser => browser.end());
});
