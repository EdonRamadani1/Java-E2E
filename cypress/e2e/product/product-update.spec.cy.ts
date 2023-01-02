describe('product update test', () => {
  it('visits the root', () => {
    cy.visit('/');
  });
  it('clicks the menu button product option', () => {
    cy.get('mat-icon').click();
    cy.contains('a', 'products').click();
  });
  it('selects Test, product', () => {
    cy.contains('Pickaxe').click();
  });
  it('updates msrp', () => {
    cy.get('input[formcontrolname=msrp]').clear();
    cy.get('input[formcontrolname=msrp]').type('100.50');
  });
  it('clicks the save button', () => {
    cy.get('button').contains('Save').click();
  });
  it('confirms update', () => {
    cy.contains('updated!');
  });
});
