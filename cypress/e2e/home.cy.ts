describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/browse/new-releases*', {
      fixture: 'newReleases.json',
    }).as('getNewReleases');
  });

  it('should display the "New Releases" title', () => {
    cy.visit('/');
    cy.contains('New Releases').should('be.visible');
  });

  it('should display the new releases details', () => {
    cy.visit('/');
    cy.testHook('release-card').should('have.length', 30);
    cy.testHook('release-card')
      .first()
      .within(() => {
        cy.testHook('release-name').should('contain', 'The Crux');
        cy.testHook('artist-link')
          .first()
          .should('have.text', 'Djo')
          .should(
            'have.attr',
            'href',
            'https://open.spotify.com/artist/5p9HO3XC5P3BLxJs5Mtrhm'
          );
      });
  });

  it('should display skeleton loaders while loading', () => {
    cy.visit('/');
    cy.testHook('skeleton-loader').should('exist');
  });

  it('should display error message if API fails', () => {
    cy.intercept('GET', '**/browse/new-releases*', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('getNewReleases');

    cy.visit('/');
    cy.wait('@getNewReleases');
    cy.contains('Internal Server Error').should('be.visible');
  });

  it('should display "No records found" if no releases are available', () => {
    cy.intercept('GET', '**/browse/new-releases*', {
      statusCode: 200,
      body: { albums: { items: [] } },
    }).as('getNewReleases');

    cy.visit('/');
    cy.wait('@getNewReleases');
    cy.contains('No records found').should('be.visible');
  });

  it('should load more releases when scrolling to the bottom', () => {
    cy.visit('/');
    cy.wait('@getNewReleases');

    cy.wait(100); // Wait for the initial load to complete
    cy.testHook('observer').scrollIntoView();
    cy.wait('@getNewReleases');
    cy.testHook('observer').should('not.exist');
  });

  it('should navigate to release details when clicking on a release', () => {
    cy.visit('/');
    cy.wait('@getNewReleases');

    cy.contains('The Crux').click();
    cy.url().should('include', '/release/1xQGeKOIMZrPBUlDJuqZGQ');
  });
});
