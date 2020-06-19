const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFriday(today) {
  return "Nope"
}

Given('today is Sunday', function () {
    
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
Given("that we have 10 pickups for this Friday", function(){
    console.log("It is friday");

})
When('We get the {int}', function (int) {
  // When('We get the {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    console.log("THe X: ",int)
    this.x=int;
    
  });
  When('the {int} pickup points for delivery', function (int) {
    // When('the {float} pickup points for delivery', function (float) {
      // Write code here that turns the phrase above into concrete actions
      console.log("The Y: ",int);
      this.y=int;
      
    });
    Then('We will give the pickup point and get the route', function () {
      // Write code here that turns the phrase above into concrete 
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      const Http = new XMLHttpRequest();
      
      const url='http://127.0.0.1:5000/test';
      Http.open("POST", url);
      Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      Http.send(JSON.stringify({ "x": this.x , "y":this.y}));
      Http.onreadystatechange = (e) => {
          console.log(Http.responseText)
      }
      
      console.log("Coordinates",this.x, " , ",this.y);
    });




