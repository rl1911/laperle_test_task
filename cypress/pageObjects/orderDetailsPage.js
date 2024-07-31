class OrderDetailsPage {
    getEmailInput() {
        return cy.get("#email");
    }
    getFullNameInput() {
        return cy.get("#name_full");
    }
    getMobileNumberCodeDropdown() {
        return cy.get("#select2-phone-country_code-container");
    }
    getSearchInput() {
        return cy.get(".select2-search__field");
    }
    getMobileNumberCodeResultLabel(){
        return cy.get("#select2-phone-country_code-results");
    }
    getMobileNumberInput() {
        return cy.get("#phone");
    }
    getCountryDropdown() {
        return cy.get("#select2-id_country-container");
    }
    getCountryResultLabel(){
        return cy.get("#select2-id_country-results");
    }

}
export default OrderDetailsPage