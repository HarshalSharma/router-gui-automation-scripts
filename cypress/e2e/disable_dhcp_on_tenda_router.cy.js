function loginToPortal({ config }) {
  // Set the IP address, username, and password for the router
  const routerLoginUrl = config.routerLoginUrl;
  const routerUser = config.username;
  const routerPassword = config.password;

  // Navigate to the router's login page
  cy.visit(`${routerLoginUrl}`);

  cy.get('#username').type(routerUser);
  cy.get('#password').type(routerPassword);
  cy.get('#loginBtn').click();
}

function navigateToDHCPSettingPage() {
  //click on anchor button with exact text as LAN
  cy.contains('a', /^LAN$/).click()

  //click on anchor button with dhcp
  cy.get('a:contains("DHCP")').click();
}

describe('Disable DHCP on Tenda router', () => {
  beforeEach(() => {
    // Clear cookies before each test
    cy.clearCookies()
  })

  it('logs in to the router and disables DHCP', () => {
    // Get the router configuration values from Cypress config
    const routerConfig = Cypress.config('tenda_router_config');

    //do login
    loginToPortal({ config: routerConfig });

    // Navigate to the DHCP settings page
    navigateToDHCPSettingPage();

    // // Disable the DHCP server
    // cy.get('[name="enable"]').uncheck();
    // cy.get('[name="save"]').click();
  });
});