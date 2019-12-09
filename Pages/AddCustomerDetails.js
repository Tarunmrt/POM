let SelectWrapper = require('../util/select-wrapper.js')

let mySelect = new SelectWrapper(by.id('userSelect'))

let myCurrency = new SelectWrapper(by.id('currency'))

let OR = require('../json/OR.json')

let AddCustomerDetails = function(){

    this.gotoAddCustomer = function() {
        element(by.buttonText(OR.locators.addCustomerDetailsPage.addCustomerButton)).click()

        return this
    }

    this.gotoOpenAccount = function() {
        element(by.buttonText(OR.locators.addCustomerDetailsPage.openAccount)).click()
        return this
    }

    this.gotoSearchCustomer = function() {
        element(by.buttonText('Customers')).click()
        return this
    }

    this.addCustomerInfo = function( fName, lName, postCode) {
        element(by.model(OR.locators.addCustomerDetailsPage.fName)).sendKeys(fName)
        element(by.model(OR.locators.addCustomerDetailsPage.lName)).sendKeys(lName)
        element(by.model(OR.locators.addCustomerDetailsPage.pCode)).sendKeys(postCode)
        element(by.css(OR.locators.addCustomerDetailsPage.addCustomer)).click()
        browser.sleep(1000)
        let alert = browser.switchTo().alert()
        alert.getText().then(function (text) {
            console.log(text);
        })

        alert.accept()
        browser.sleep(2000)

        return this
    }
    this.openAccount = function(customer, currency) {
        mySelect.selectByText(OR.locators.addCustomerDetailsPage.customerName)
        myCurrency.selectByText( OR.locators.addCustomerDetailsPage.myCurrency)
        element(by.buttonText(OR.locators.addCustomerDetailsPage.process)).click()
        browser.sleep(1000)
        // let alert = browser.switchTo().alert()
        // alert.getText().then(function (text) {
        //     console.log(text);
        // })

        // alert.accept()
        // browser.sleep(2000)
    }
    this.validateCustomerRecords = function() {
        element(by.model(OR.locators.addCustomerDetailsPage.search)).sendKeys(OR.locators.addCustomerDetailsPage.fName)
        browser.sleep(2000)
        let firstName = element(by.repeater('cust in Customers').row(0).column('cust.fName'))
        let name = firstName.getText()
        name.then(function (text) {
            console.log('Account Holder Name: ' + text);
        })
        expect(name).toEqual('Tarun')
        element(by.buttonText('Delete')).click()
        browser.sleep(2000)
    }
}

module.exports = new AddCustomerDetails;