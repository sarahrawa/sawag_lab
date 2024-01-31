///<reference types="cypress"/>
describe("Swag_lab",()=>{

    it("Login test",()=>{
cy.visit("https://www.saucedemo.com")
cy.get('[data-test="username"]').type("standard_user")
cy.get('[data-test="password"]').type("secret_sauce")
cy.get('[data-test="login-button"]').click()

    })
    it('Add item to cart', () => {
        //we should login to website
        cy.visit("https://www.saucedemo.com")
cy.get('[data-test="username"]').type("standard_user")
cy.get('[data-test="password"]').type("secret_sauce")
cy.get('[data-test="login-button"]').click()
let Expected=6
for(let i=0;i<Expected;i++){
    let my_array=cy.get("div#inventory_container").find(".btn").eq(i).click()
}
        
    });
    it('this test to add the first 3item to card', () => {
        //we should login to website
        cy.visit("https://www.saucedemo.com")
cy.get('[data-test="username"]').type("standard_user")
cy.get('[data-test="password"]').type("secret_sauce")
cy.get('[data-test="login-button"]').click()
let Expected=6
for(let i=0;i<Expected;i++){
    if(i!=3){
    let my_array=cy.get("div#inventory_container").find(".btn").eq(i).click()
    }
    else{
        break;
    }

}
        
    });
})