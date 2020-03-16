describe("Smoke", () => {
  describe("Home", () => {
    beforeEach(() => {
      cy.visit("https://asturiashacking.org");
    });

    it("has a contact email", () => {
      cy.get("body").should("contain", "asturiashacking[at]gmail.com");
    });

    it("has the right links to social media", () => {
      cy.get('a[href*="https://meetup.com/asturiashacking"]').should("exist");
      cy.get('a[href*="https://twitter.com/asturiashacking"]').should("exist");
      cy.get('a[href*="https://github.com/asturiashacking"]').should("exist");
    });
  });
});
