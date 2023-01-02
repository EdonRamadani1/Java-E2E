describe('product add test', () => {
  it('visits the root', () => {
    cy.visit('/');
  });
  it('clicks the menu button product option', () => {
    cy.get('mat-icon').click();
    cy.contains('a', 'products').click();
  });
  it('clicks add icon', () => {
    cy.contains('control_point').click();
  });
  it('fills in fields', () => {
    cy.get('input[formcontrolname="id"]').type('P0Test'); // open the list
    cy.get('mat-select[formcontrolname="vendorid"]').click(); // open the list
    cy.get('mat-option').should('have.length.gt', 0); // wait for options
    cy.contains('Edon').click();
    cy.get('input[formcontrolname=name]').type('Pickaxe');
    cy.get('input[formcontrolname=msrp]').type('379.23');
    cy.get('input[formcontrolname=costprice]').type('198.32');
    cy.get('.mat-expansion-indicator').eq(0).click();
    cy.get('.mat-expansion-indicator').eq(1).click();
    cy.get('input[formcontrolname=rop]').type('198');
    cy.get('input[formcontrolname=eoq]').type('198');
    cy.get('input[formcontrolname=qoh]').type('198');
    cy.get('input[formcontrolname=qoo]').type('198');
    //cy.get('input[formcontrolname=qrcode]').type('test1');
    //cy.get('input[formcontrolname=qrcodetxt]').type('test1');
  });
  it('clicks the save button', () => {
    cy.get('button').contains('Save').click();
  });
  it('confirms add', () => {
    cy.contains('updated');
  });
});
