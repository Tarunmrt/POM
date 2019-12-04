exports.config = {
    
    directConnect:true,

    capabilities:{
        'browserName':'chrome',
        // chromeOptions: {
        //     args: ['--window-size=1600,1400'] 
        // }

        framework : 'jasmine2'

    },
  //  seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test_spec/BankManagerLoginTest_spec.js','../test_spec/AddCustomerInfoTest_spec.js']
}