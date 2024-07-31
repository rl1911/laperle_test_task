class CheckOutPage {
    getDateLabel() {
        return cy.xpath("//p[@class='show-date']/span[2]");
    }
    getTimeLabel() {
        return cy.xpath("//p[@class='show-date']/span[3]/span");
    }
    getRowLabel() {
        return cy.xpath("//div[@class='item-seating-details']/p[1]");
    }
    getSeatLabel() {
        return cy.xpath("//div[@class='item-seating-details']/p[2]");
    }
    getTicketDeliveryLabel() {
        return cy.get(".ticket-delivery__title");
    }
    getTicketDeliveryEmailLabel() {
        return cy.get(".ticket-delivery__email");
    }
    getSummaryBlockElement() {
        return cy.xpath("//div[@data-summary-block-container]");
    }

}
export default CheckOutPage