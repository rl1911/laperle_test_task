import MainPage from '../pageObjects/mainPage'
import OrderDetailsPage from '../pageObjects/orderDetailsPage'
import CheckOutPage from '../pageObjects/checkOutPage'

describe('test task spec', () => {
  const mainPage = new MainPage()
  const orderDetailsPage = new OrderDetailsPage()
  const checkOutPage = new CheckOutPage()
  const email = "roman.gorbunov5@gmail.com"
  const fullName = "Roman Gorbunov"
  const phoneCode = "381"
  const phoneNumber = "111223344"
  const country = "Serbia"

  it('test task passes', () => {    
    mainPage.openMainPage();
    mainPage.getLanguageSelector().should('exist');
    mainPage.getCurrencySelector().should('exist');
    mainPage.getHeaderLogo().should('be.visible').and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
    mainPage.getOrderNextButton().should('not.exist');
    mainPage.getMonthTabByMonthNumber(10).click();
    mainPage.getDayElementByDayNumber(10).click();
    mainPage.getEventTimeElementByStartTimeInText("18:30").click();
    mainPage.getSelectEventButtonsArray().first().click();
    mainPage.getSelectSeatsButtonsArray().first().click();
    mainPage.getHallMapContainerElement().should('be.visible');
    mainPage.getEventDateTimeElement().should('have.text', '18:30			Thu 10 Oct 2024');
    mainPage.getAvailableStageAreasElementsArray().first().click();

    mainPage.getAvailableSeatsElementsArray().first().then(($firstAvailableSeat) => {
      let rAttrOfSelectedSeat = $firstAvailableSeat.attr('r');
      let pAttrOfSelectedSeat = $firstAvailableSeat.attr('p');
      let spAttrOfSelectedSeat = $firstAvailableSeat.attr('sp');
      let rpAttrOfSelectedSeat = $firstAvailableSeat.attr('rp');

      mainPage.getSeatElementByAttributes(rAttrOfSelectedSeat, pAttrOfSelectedSeat, spAttrOfSelectedSeat, rpAttrOfSelectedSeat).click({ force: true })
      mainPage.getTicketsButtonsArrayInBestAvailableTicketsFrame().first().click();
      mainPage.getSubmitButtonInBestAvailableTicketsFrame().click();
      mainPage.getSeatElementByAttributes(rAttrOfSelectedSeat, pAttrOfSelectedSeat, spAttrOfSelectedSeat, rpAttrOfSelectedSeat).should('have.class', 'selected').should('have.css', 'fill', 'rgb(55, 167, 248)');
      mainPage.getOrderNextButton().click();
      orderDetailsPage.getEmailInput().type(email);
      orderDetailsPage.getFullNameInput().type(fullName);
      orderDetailsPage.getMobileNumberCodeDropdown().click();
      orderDetailsPage.getSearchInput().type(phoneCode);
      orderDetailsPage.getMobileNumberCodeResultLabel().click();
      orderDetailsPage.getMobileNumberInput().type(phoneNumber);
      orderDetailsPage.getCountryDropdown().click();
      orderDetailsPage.getSearchInput().type(country);
      orderDetailsPage.getCountryResultLabel().click();
      mainPage.getOrderNextButton().click();
      checkOutPage.getDateLabel().contains('Thu 10 Oct');
      checkOutPage.getTimeLabel().contains("18:30");
      checkOutPage.getRowLabel().contains(rAttrOfSelectedSeat);
      checkOutPage.getSeatLabel().contains(pAttrOfSelectedSeat);
      checkOutPage.getTicketDeliveryLabel().should('have.text', "Ticket delivery method");
      checkOutPage.getTicketDeliveryEmailLabel().should('have.text', email);
      checkOutPage.getSummaryBlockElement().should('be.visible');
    });
  })
})