describe("Smoke", () => {
  describe("Dojos", () => {
    beforeEach(() => {
      cy.visit("https://asturiashacking.org/dojos");
    });

    it("has a contact email", () => {
      cy.get("body").should("contain", "asturiashacking[at]gmail.com");
    });

    it("has the right links to coc, terms & conditions", () => {
      cy.get(
        'a[href*="https://github.com/asturiashacking/core/blob/master/coc/CODE_OF_CONDUCT.md"]'
      ).should("exist");

      cy.get(
        'a[href*="https://github.com/asturiashacking/activities/blob/master/TERMS.md"]'
      ).should("exist");
    });
  });
});
