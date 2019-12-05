let base = require('../Pages/BasePage')
let homePage = require('../Pages/HomePage.js')
let OR = require('../json/OR.json')

describe('BankManager Login Test', function() {    
    
    it('Loging as Bank Manager', function() {
        base.NavigateToUrl(OR.testsiteurl)
        let customer = homePage.loginAsBankManager()
        customer.gotoAddCustomer().addCustomerInfo(OR.locators.addCustomerDetailsPage.testdata.fName, OR.locators.addCustomerDetailsPage.testdata.lName, OR.locators.addCustomerDetailsPage.testdata.pCode)
        let title = base.getPageTitle()
        //console.log(title);
        expect(title).toBe('Protractor practice website - Banking App')
        
        browser.sleep(2000)
    });
        
});
    