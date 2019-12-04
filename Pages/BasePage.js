let BasePage = function(){

    this.NavigateToUrl = function(url){
        browser.get(url)
    }

    this.getPageTitle = function(){
        return browser.getTitle()
    }
}

module.exports = new BasePage;