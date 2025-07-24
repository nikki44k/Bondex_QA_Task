describe('Google Play Button Link Verification', () => {
  it('should link the Google Play button to the correct Google Play Store page', () => {
    // Visit Bondex homepage
    cy.visit('https://bondex.app');

    // Scroll to the footer
    cy.scrollTo('bottom');

    // Locate the Google Play button inside the footer
    cy.get('footer')
      .find('a img[alt="Google Play"]') // Adjust this selector based on site structure
      .should('be.visible')
      .parent('a') // Get the parent anchor tag
      .then(($a) => {
        const href = $a.attr('href');
        cy.log('Google Play button href: ', href);

        // Assertion: should include Google Play Store domain
        expect(href).to.contain('play.google.com');
      });
  });
});
