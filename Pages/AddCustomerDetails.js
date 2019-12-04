let SelectWrapper = require('../util/select-wrapper.js')

let mySelect = new SelectWrapper(by.id('userSelect'))

let myCurrency = new SelectWrapper(by.id('currency'))

let AddCustomerDetails = function(){

    this.gotoAddCustomer = function() {
        element(by.buttonText('Add Customer')).click()

        return this
    }

    this.gotoOpenAccount = function() {
        element(by.buttonText('Open Account')).click()
        return this
    }

    this.gotoSearchCustomer = function() {
        element(by.buttonText('Customers')).click()
        return this
    }

    this.addCustomerInfo = function( fName, lName, postCode) {
        element(by.model('fName')).sendKeys(fName)
        element(by.model('lName')).sendKeys(lName)
        element(by.model('postCd')).sendKeys(postCode)
        element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > button")).click()
        browser.sleep(1000)
        let alert = browser.switchTo().alert()
        alert.getText().then(function (text) {
            console.log(text);
        })

        alert.accept()
        browser.sleep(2000)
    }
    this.openAccount = function(customer, currency) {
        mySelect.selectByText(customer)
        myCurrency.selectByText(currency)
        element(by.buttonText('Process')).click()
        browser.sleep(1000)
        let alert = browser.switchTo().alert()
        alert.getText().then(function (text) {
            console.log(text);
        })

        alert.accept()
        browser.sleep(2000)
    }
    this.validateCustomerRecords = function() {
        element(by.model('searchCustomer')).sendKeys('Tarun')
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