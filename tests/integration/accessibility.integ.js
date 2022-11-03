/* accessibility.integ.js
 * Accessibility integration tests for WCAG 2.0, which is a stricter superset of 508
 *
 * See https://github.com/dequelabs/axe-core
 */

describe('accessibility testing', function() {
  before(browser => browser.navigateTo(browser.launch_url));

  it('accessibility rule subset', function(browser) {
    browser
      .axeInject()
      .axeRun('body',
        {
          // options: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
          runOnly: ['color-contrast', 'image-alt'],
        }
      );
  });

  after(browser => browser.end());
})
