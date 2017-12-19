/**
 * Created by Dmitry on 28/11/2015.
 */


var helpers  = require('../lib/util/helpers.js');
var homePage  = require('../page-object/HomePage');


describe('Home page tests', function() {

    it("Should contain defined elements",function(){

        homePage.go();

        var filePathAbsolute  =  path.join(__dirname, "data/uploadExample.txt");
        console.log(filePathAbsolute);
        var fileInput  = element(by.css("#fileUploadInput"));
        fileInput.sendKeys(filePathAbsolute);
        browser.sleep(6000);
    });

});
