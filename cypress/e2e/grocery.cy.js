describe("Frappe Grocery Test", () => {

  it("Create Grocery Item", () => {

    cy.visit("http://127.0.0.1:8000/login")

    cy.get("#login_email").type("Administrator")
    cy.get("#login_password").type("jency@123")

    cy.get(".btn-login").click()

    // wait for dashboard
    cy.url().should("include", "/app")

    // directly open grocery doctype
    cy.visit("http://127.0.0.1:8000/app/grocery-item")

    cy.contains("Add Grocery Item").click()

    cy.get('input[data-fieldname="item_name"]').type("Apple")

    cy.contains('button', 'Save').click()

    cy.contains("Apple").should("exist")

  })

})
