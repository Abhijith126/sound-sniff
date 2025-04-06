describe('Release Info Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/albums/*', {
      fixture: 'releaseInfo.json',
    }).as('getReleaseInfo');
  });

  it('should display the release details', () => {
    cy.visit('/release/1xQGeKOIMZrPBUlDJuqZGQ');
    cy.wait('@getReleaseInfo');

    cy.testHook('release-card').should('exist');
    cy.testHook('tracks').should('exist');

    cy.testHook('release-name').should('have.text', 'The Crux');
    cy.testHook('release-date').should('have.text', '4 April 2025');
    cy.testHook('toatal-duration').should('have.text', '45 min 18 sec');
    cy.testHook('artist-link')
      .first()
      .should('have.text', 'Djo')
      .should(
        'have.attr',
        'href',
        'https://open.spotify.com/artist/5p9HO3XC5P3BLxJs5Mtrhm'
      );

    cy.testHook('tracks-row').should('have.length', 12);
    cy.testHook('tracks-row')
      .first()
      .within(() => {
        cy.testHook('track-name')
          .should('have.text', 'Lonesome Is A State of Mind')
          .should(
            'have.attr',
            'href',
            'https://open.spotify.com/track/5DcV7k8MIdYJAAIR0O3Iks'
          );
        cy.testHook('track-artists')
          .first()
          .within(() => {
            cy.testHook('artist-link')
              .should('have.text', 'Djo')
              .should(
                'have.attr',
                'href',
                'https://open.spotify.com/artist/5p9HO3XC5P3BLxJs5Mtrhm'
              );
          });
        cy.testHook('track-album').should('have.text', 'The Crux');
        cy.testHook('track-duration').should('have.text', '4:19');
      });
  });

  it('should display a loading spinner while fetching data', () => {
    cy.intercept('GET', '**/albums/*', (req) => {
      req.reply({
        fixture: 'releaseInfo.json',
        delay: 1000,
      });
    }).as('getReleaseInfo');

    cy.visit('/release/1xQGeKOIMZrPBUlDJuqZGQ');
    cy.testHook('spinner').should('be.visible');
    cy.wait('@getReleaseInfo');
  });

  it('should display an error message if the API fails', () => {
    cy.intercept('GET', '**/albums/*', {
      statusCode: 500,
      body: { error: 'Failed to fetch release info' },
    }).as('getReleaseInfo');

    cy.visit('/release/1xQGeKOIMZrPBUlDJuqZGQ');
    cy.wait('@getReleaseInfo');
    cy.testHook('not-found').should('be.visible');
  });

  it('should display "Not Found" if the release data is null', () => {
    cy.intercept('GET', '**/albums/*', {
      statusCode: 200,
      body: null,
    }).as('getReleaseInfo');

    cy.visit('/release/1xQGeKOIMZrPBUlDJuqZGQ');
    cy.wait('@getReleaseInfo');
    cy.testHook('not-found').should('be.visible');
  });

  it('should navigate back to the home page when clicking "Home" in breadcrumbs', () => {
    cy.visit('/release/1xQGeKOIMZrPBUlDJuqZGQ');
    cy.wait('@getReleaseInfo');

    cy.get('a').contains('Home').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('should have Listen on Spotify button enabled"', () => {
    cy.visit('/release/1xQGeKOIMZrPBUlDJuqZGQ');
    cy.wait('@getReleaseInfo');
    cy.testHook('spotifyButton').should('be.enabled');
  });
});
