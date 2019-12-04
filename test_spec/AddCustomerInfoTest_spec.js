let addCustomer = require('../Pages/AddCustomerDetails.js')

describe('Customer information Test', function() {
    
    it('Adding Customer Information', function() {
        addCustomer.gotoAddCustomer()
        addCustomer.addCustomerInfo('Tarun','Kumar', '589565')

    });

    it('Open Account', function() {
        addCustomer.gotoOpenAccount()
        addCustomer.openAccount('Tarun Kumar', 'Rupee')

    });
        
});
    