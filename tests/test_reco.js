module.exports = {
  'Reco_Page': function(browser) {

      var fa = browser.page.test_reco();
      fa
        .login(browser)
        .checkLogin(browser)
        .checkFirstTimeUser(browser)
        .goToRecoPage(browser)
        .checkSortFunction(browser)
        .checkPagination(browser)
        .checkSearchFunction(browser)
        .end();
  }
};


      // .url('http://localhost:8001/')
      // .useXpath()
      // .setValue('//*[@id="username"]','stageseller1')
      // .setValue('//*[@id="userpass"]','asdf1234')


      // .click('//*[@id="edit-submit"]')
      // .pause(10000)
      // .click('//*[@id="Inventory"]/a')  //Inventory health dropdown
      // .click('//*[@id="sub-app-container"]/div[2]/div[5]/button') //Click on bottom button (sometiems not required  )
      // .pause(1000)
      // .click('//*[@id="react-joyride:0"]/div/div/div[1]/div[2]/button[1]')  //Skip button of joy-ride
      // .click('//*[@id="blinx-wrapper-0"]/div/div/a')  //Close the red alert on top right
      // .click('//*[@id="react-select-6--value"]/div[1]') //Select Fulfilment Type dropdown
      // .click('//*[@id="react-select-6--list"]/div[1]'); //Choose Flipkart Fulfilment from dropdown 
      // // browser.click('//*[@id="blinx-wrapper-0"]/div/div/a'); //Close the red alert on top right
      
      // browser.click('//*[@id="react-select-7--value"]/div[1]') //Click on Select Warehouse button 
      // .click('//*[@id="react-select-10--list"]/div[2]') //Click on Bangalore-Whitefield warehouse
      // // .pause(100000)
      // browser.pause(2000);
      // // browser.click('//*[@id="blinx-wrapper-0"]/div/div/a'); //Close the red alert on top right
      // browser.pause(1000);




      // //Search functionality
      // browser.setValue('//*[@id="sub-app-container"]/div[1]/div[2]/div/div[1]/div/input','SHOFYMVKTV'); //Search for this FSN ID
      // browser.click('//*[@id="sub-app-container"]/div[1]/div[2]/div/div[1]/div/ul/li[1]');  //Select FSN ID
      // browser.pause(2000);
      
      // browser.getText('//*[@id="sub-app-container"]/div[3]/div[1]/div[8]/div[1]', function(result) {
      //   if (result.value.split('/')[0].split(' ')[1] == '0') {
      //     // browser.pause(10000);
      //     console.log("No Results") 
      //     browser.assert.containsText('//*[@id="sub-app-container"]/div[3]/div[3]/div/div/table/tbody/tr/td', 'No data to display');
      //   }
      //   else {
      //     browser.elements('xpath', '//*[@id="sub-app-container"]/div[3]/div[3]/div/div/table/tbody/tr', function (result) { //Assert only 1 result
      //     console.log('Result contains %d items', result.value.length)  
      //     browser.assert.equal(result.value.length,1);
      //     })
      //   }
      // });




  //     browser.end();
  // }
// };








// curl 'http://10.85.251.137:8000/recommendations/filter?service_profile=FBF&page_no=2&page_size=5' \
//  -H 'accept: */*'  \
//  -H 'accept-encoding: gzip, deflate'  \
//  -H 'cache-control: no-cache' \
//  -H 'connection: keep-alive' \
//  -H 'content-length: 269' \
//  -H 'content-type: application/json' \
//  -H 'host: 10.85.251.137:8000' \
//  -H 'postman-token: 68a0f759-9ac3-2589-7d55-89a8a6459f0b' \
//  -H 'x-location-id: bil' \
//  -H 'x-seller-id: 19e4d415fc1f40da' \
//  -d '{ "filter_params": {}, "sort_param": { "key": "recommended_quantity", "value": "desc" } }'