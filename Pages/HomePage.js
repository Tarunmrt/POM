let HomePage = function(){

    this.loginAsCustomer = function(){
        element(by.buttonText('Customer Login')).click()
    }

    this.loginAsBankManager = function(){
        element(by.buttonText('Bank Manager Login')).click()

        return require('./AddCustomerDetails.js')
    }
}

module.exports = new HomePage;