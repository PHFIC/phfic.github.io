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
    const dropdownButtonSelector = '.dropdown-toggle'; // first one
    const dropdownMenuSelector = '.dropdown-menu';
    browser
      .assert.visible( dropdownButtonSelector, 'dropdown has no toggle button' )
      .assert.not.elementPresent( dropdownMenuSelector, 'dropdown is not hiding menu' )
      //.assert.elementsCount('nav .dropdown a.dropdown-toggle', 6)
      //.move({origin: element(dropdownButtonSelector)})
      //.assert.hasClass( dropdownButtonSelector, 'fw-bold', 'dropdown label did not change on hover' )
      .click(dropdownButtonSelector)
      .assert.visible( dropdownMenuSelector, 'dropdown menu is not shown after click' )
      //.move({origin: element('footer')})
      .click('#top')
      .assert.not.visible( dropdownMenuSelector, 'dropdown menu did not hide after clicking away')
  });

  after(browser => browser.end());
});
