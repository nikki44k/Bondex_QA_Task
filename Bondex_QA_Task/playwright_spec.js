describe('Google Play button link verification', () => {
  it('Should point to the correct Google Play Store URL', () => {
    // Visit the Bondex homepage
    cy.visit('https://bondex.app');

    // Scroll to the bottom to make sure footer is visible
    cy.scrollTo('bottom');

    // Locate the Google Play button in the footer
    cy.get('footer')
      .find('img[alt="Google Play"]')
      .should('be.visible')
      .parent('a') // get the parent <a> tag
      .should('have.attr', 'href')
      .then((href) => {
        // Log the actual href for debug purposes
        cy.log('Google Play button href:', href);

        // Validate that the link goes to Google Play Store
        expect(href).to.include('play.google.com');
      });
  });
});
