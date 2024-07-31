class MainPage {
    getLanguageSelector() {
        return cy.get(".header-switchers__item.header-switchers__item--lang");
    }
    getCurrencySelector() {
        return cy.get(".header-switchers__item.header-switchers__item--currency");
    }
    getHeaderLogo() {
        return cy.xpath("//div[@class='header-logo']/a/img");
    }
    getMonthTabByMonthNumber(monthNumber) {
        return cy.xpath('//li[@data-tabbed-layout="2024-' + monthNumber.toString() +'"]');
    }
    getDayElementByDayNumber(dayNumber) {
        return cy.xpath('//table[not(contains(@style,"display: none"))]//div[@class="event-calendar-day-number "]/div/div[text()="' + dayNumber.toString() + '"]');
    }
    getEventTimeElementByStartTimeInText(startTime) {
        return cy.xpath('//div[contains(@class,"show-selection-info-item show-selection-time") and starts-with(text(),"' + startTime +'")]');
    }
    getSelectEventButtonsArray() {
        return cy.xpath('//button[@data-ticket-office-offer-section-toggle]');
    }
    getSelectSeatsButtonsArray() {
        return cy.xpath('//div[@class="offers-section-content"]//div[@class="offer-action"]/div/button');
    }
    getHallMapContainerElement() {
        return cy.xpath('//div[@data-hall-map-svg-container]');
    }
    getEventDateTimeElement() {
        return cy.xpath('//div[@class="container-btn-back"]/span');
    }
    getAvailableStageAreasElementsArray() {
        return cy.xpath('//*[local-name()="g" and @class="zone available highlighted"]');
    }
    getAvailableSeatsElementsArray() {
        return cy.xpath('//*[local-name()="path" and @class="s p available"]');
    }
    getTicketsButtonsArrayInBestAvailableTicketsFrame() {
        return cy.xpath('//div[text()="Best available tickets"]/../ul/li');
    }
    getSubmitButtonInBestAvailableTicketsFrame() {
        return cy.xpath('//div[text()="Best available tickets"]/../div/button[text()="Submit"]');
    }
    getSeatElementByAttributes(r,p,sp,rp) {
        return cy.xpath('//*[local-name()="path" and @r="' + r +'" and @p="' + p +'" and @sp="' + sp +'" and @rp="' + rp +'"]');
    }
    getOrderNextButton() {
        return cy.xpath('//button[@data-smart-footer-btn and text()="Next"]');
    }

    openMainPage() {       
        cy.visit(Cypress.env('appEndpoint'));
    }

}
export default MainPage