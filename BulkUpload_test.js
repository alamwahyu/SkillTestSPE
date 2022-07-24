Feature('BulkUpload');

let bulk = new DataTable(['clientid', 'billingtype', 'pathUploadfile', 'filterOriginalfile']);
bulk.add(['8-123', 
          'Fixed Payment', 
          'input/bulk/bulkfile1.csv', //tersedia 4 file di folder input\bulk
          'bulkfile1.csv']);

Data(bulk).Scenario('BulkUploadCreate', ({ I, current}) => {
    I.Login();
    I.click('VA Management')
    I.click('Bulk Upload')
    I.fillField('Client', current.clientid)
    I.pressKey('Enter')
    I.click('Next')
    I.wait(1);
    I.selectOption('Billing Type', current.billingtype)
    I.pressKey('Enter')
    I.attachFile('File', current.pathUploadfile);
    I.wait(2);
    I.click('Submit')
    I.wait(1);
    I.see('On Going Bulk Upload');
    I.click('On Going Bulk Upload');
    I.fillField("TempBulkUploadSearch[original_filename]",current.filterOriginalfile);
    I.pressKey("Enter");
    I.wait(50); //depends banyaknya file
    I.refreshPage();
    //I.OnGoingBulkUpload();
    I.click("Historical Upload");
    I.wait(1);
    I.fillField("LogBulkUploadSearch[original_filename]",current.filterOriginalfile);
    I.pressKey("Enter");
    I.see("All Succeeded");
    I.saveScreenshot("BulkUploadSuccess.png");
});