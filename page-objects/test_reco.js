var config = require('/Users/manish.karna/automation/config/conf.js');
let boolWelcomePageShown;


function helperPagination(browser, xpath, x, callback) {
    var rows;
    browser.elements('xpath', xpath, function(result) {
        rows = result.value.length;
        const output = (rows <= x) ? true : false;
        callback(output);
    })
}


function closeRedAlert(browser, xpathRedAlert) {    //Closes the red alert on top right if visible
    browser.isVisible(xpath, results => {      
        if (results.value) {
            browser.click(xpath); }
            else {}
    })
}
    
    
var Commands = {
    
    login: function (browser) {
        
        browser
            .useXpath()
            .url('http://localhost:8001')
            .setValue('//*[@id="username"]', config.username)
            .setValue('//*[@id="userpass"]', config.password)
            .click('//*[@id="edit-submit"]')
            .waitForElementVisible('//*[@id="app-container"]/div/div[1]/div[2]/ul/li[5]/div/div/a/i', config.timeout, 'User logged in symbol appeared')
        
        return this;
    },
    
    checkLogin: function (browser) {
        
        let self = this;
        browser.execute(function (data) {
            self.storage = window.localStorage.getItem('__appData');
            boolWelcomePageShown = window.localStorage.getItem('UIVWelcomePageShown19e4d415fc1f40da');
            return JSON.parse(self.storage).sellerConfig.sellerId;
        }, [], function (data) {
            self.assert.equal(data.value, config.sellerId, 'Valid sellerId is confirmed');
            // browser.pause(100000);
        });
        // browser.pause(1000);
        return this;
    },
    
    checkFirstTimeUser: function(browser) {
        
        browser.click('//*[@id="Inventory"]/a');
        
        if (boolWelcomePageShown) {
            browser.expect.element('//*[@id="sub-app-container"]/div[2]/div[5]/button').not.to.be.visible;
            console.log("Shown");
        }
        if (!boolWelcomePageShown) {
            browser.expect.element('//*[@id="sub-app-container"]/div[2]/div[5]/button').to.be.visible;
            console.log("NotShown");
        }
        
        return this;
    },
    
    goToRecoPage: function(browser) {
        
        var xpathRedAlert = '//*[@id="blinx-wrapper-0"]/div/div/a';
        
        browser
            .click('//*[@id="sub-app-container"]/div[2]/div[5]/button') //Click on bottom button (sometiems not required  )
            .pause(1000)
            .click('//*[@id="react-joyride:0"]/div/div/div[1]/div[2]/button[1]')  //Skip button of joy-ride
            .click('//*[@id="blinx-wrapper-0"]/div/div/a')  //Close the red alert on top right
            .click('//*[@id="react-select-6--value"]/div[1]') //Select Fulfilment Type dropdown
            .click('//*[@id="react-select-6--list"]/div[1]'); //Choose Flipkart Fulfilment from dropdown 
        
        // closeRedAlert(browser, xpathRedAlert)
            
        browser
            .click('//*[@id="react-select-7--value"]/div[1]') //Click on Select Warehouse button 
            .click('//*[@id="react-select-7--list"]/div[2]/span'); //Click on Bangalore-Whitefield warehouse

        return this;
    },

    checkSortFunction: function(browser){

        var prev=-1;
        var sorted = true;
        browser
            .click('//*[@id="sub-app-container"]/div[3]/div[3]/div[1]/div/table/thead/tr/th[2]/div')    //Click for decreasing sort
            // .waitForElementVisible('//body', config.timeout)
            .pause(10000)
            .elements('xpath', '//*[@id="sub-app-container"]/div[3]/div[3]/div[1]/div/table/tbody/tr', function(result) {
                for (var i=0; i<result.value.length; i++) {
                    browser.elementIdText(result.value[i].ELEMENT, function(textResult) {
                        var temp = textResult.value.split('\n');
                        var curr=temp.length>5?temp[3]:temp[2];
                        if(curr<prev) sorted=false;
                        prev=curr;
                    })
                }
            })
            .assert.equal(sorted,true,'Checking decreasing sort function')
        
        return this;
    },

    checkPagination: function(browser){

        let xpath = '//*[@id="sub-app-container"]/div[3]/div[3]/div[1]/div/table/tbody/tr';
        helperPagination(browser,xpath,10, function(result) {  // Default 10 rows
            browser.assert.equal(result, true, 'Pagination for 10 rows');
        });

        browser
            .click('//*[@id="sub-app-container"]/div[3]/div[4]/div/div[1]/div[2]/select')   //For 20 rows
            .click('//*[@id="sub-app-container"]/div[3]/div[4]/div/div[1]/div[2]/select/option[2]');

        helperPagination(browser,xpath,20, function(result) {
            browser.assert.equal(result, true, 'Pagination for 20 rows');
        });
        
        browser
            .click('//*[@id="sub-app-container"]/div[3]/div[4]/div/div[1]/div[2]/select')   //For 40 rows
            .click('//*[@id="sub-app-container"]/div[3]/div[4]/div/div[1]/div[2]/select/option[3]');

        helperPagination(browser,xpath,40, function(result) {
            browser.assert.equal(result, true, 'Pagination for 40 rows');
        });

        return this;
    },

    checkSearchFunction: function(browser){

        browser.setValue('//*[@id="sub-app-container"]/div[1]/div[2]/div/div[1]/div/input','SHOFFFNVXDYMVKTV'); //Search for this FSN ID
        browser.click('//*[@id="sub-app-container"]/div[1]/div[2]/div/div[1]/div/ul/li[1]');  //Select FSN ID
        
        browser
            .getText('//*[@id="sub-app-container"]/div[3]/div[1]/div[8]/div[1]', function(result) {
            if (result.value.split('/')[0].split(' ')[1] == '0') {
                // console.log("No Results") 
                browser.assert.containsText('//*[@id="sub-app-container"]/div[3]/div[3]/div/div/table/tbody/tr/td', 'No data to display', 'Checking search function');
            }
            else {
                browser.elements('xpath', '//*[@id="sub-app-container"]/div[3]/div[3]/div/div/table/tbody/tr', function (result) { //Assert only 1 result
                // console.log('Result contains %d items', result.value.length)  
                browser.assert.equal(result.value.length,1, 'Checking search function');
                })
            }
        });

        return this;
    }

}


module.exports = {
    commands: [Commands],
    elements: {
        userName: { selector: '//*[@id="username"]', locateStrategy: 'xpath'  },
        password: { selector: '//*[@id="userpass"]', locateStrategy: 'xpath'  },
        submitButton: { selector: '//*[@id="edit-submit"]', locateStrategy: 'xpath'  }
      }
};