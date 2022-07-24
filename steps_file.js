// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    Login(){

      this.amOnPage('/');
      this.wait(1);
      this.click("#loginButton");
      this.fillField("#loginform-username", "alamw");
      this.fillField("#loginform-password", "Spe-2022");
      this.click("#login");
      this.waitForNavigation();
      this.see("Dashboard (Credit Only)");
    },

    // OnGoingBulkUpload(){
    //   this.click('On Going Bulk Upload');
    //   this.fillField("TempBulkUploadSearch[original_filename]","filebulk240722a");
    //   this.pressKey("Enter");
    //   this.wait(30); //depends banyaknya file
    //   this.refreshPage();
    // },

    // DataTable(){
    //   let user_login = new DataTable(['username', 'password']);
    //   user_login.add(['alamw', 'Spe-2022'])
    //   user_login.xadd(['testing', 'testing']);
    // }

  });

}
