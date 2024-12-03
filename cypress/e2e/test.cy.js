describe('Shopping Cart Functionality', () => {
    // This runs before each test to visit the page and clear the localStorage
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/ISF/Index.HTML');  // Replace with the actual URL of your page
      localStorage.clear(); // Clear localStorage before each test

    });

    it('should add an item to the cart', () => {
      // Click the "Add to Cart" button for the first item (Samsung Galaxy S10)
      cy.get('.item_box').first().find('.add_item').click();

      // Verify that the item appears in the cart
      cy.get('#cart_items').should('contain', 'iPhone 15');
      // Ensure the total price is updated and not zero
      cy.get('#total_price').should('not.contain', '$0');
    });

    it('should remove an item from the cart', () => {
      // Add the first item to the cart
      cy.get('.item_box').first().find('.add_item').click();

      // Click the "Remove" button next to the added item
      cy.get('.remove_item').click();

      // Verify that the cart is empty after removing the item
      cy.get('#cart_items').should('contain', 'Cart empty');
      cy.get('#total_price').should('contain', 'Total: $0');
    });

    it('should clear the cart', () => {
      // Add two items to the cart
      cy.get('.item_box').first().find('.add_item').click();
      cy.get('.item_box').eq(1).find('.add_item').click();

      // Click the "Clear Cart" button
      cy.get('#clear_cart').click();

      // Verify that the cart is empty after clearing it
      cy.get('#cart_items').should('contain', 'Cart empty');
      cy.get('#total_price').should('contain', 'Total: $0');

    });

  });
