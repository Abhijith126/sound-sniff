/* eslint-disable @typescript-eslint/no-explicit-any */

declare namespace Cypress {
  interface Chainable<> {
    /**
     * Get some element by our test hook
     * @example
     * cy.testHook('hookName')
     */
    testHook(hookName: string): Chainable<any>;
  }
}
