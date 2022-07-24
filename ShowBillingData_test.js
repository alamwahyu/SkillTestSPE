Feature('ShowBillingData');

let filter = new DataTable(['filter1', 'filter2', 'filter3', 'filter4', 'formatfile']);
filter.add(['Portal', 'Fixed Payment', 'Inactive', 'Settled (Lunas)', 'csv_semicolon']);


Data(filter).Scenario('DownloadBillingData', async ({ I, current }) => {

    I.Login();
    I.click("Report");
    I.wait(1);
    I.click("Billing Data");
    I.waitForNavigation();
    I.waitForText("All times and dates are presented in UTC+7.");
    I.selectOption("#transactionssearch-request_type", current.filter1);
    I.wait(1);
    I.click("//thead/tr[@id='w0-filters']/td[9]/div[1]/a[1]");
    I.fillField("//thead/tr[@id='w0-filters']/td[9]/div[1]/a[1]", current.filter2);
    I.pressKey("Enter");
    I.click("//thead/tr[@id='w0-filters']/td[13]/div[1]/a[1]");
    I.fillField("//thead/tr[@id='w0-filters']/td[13]/div[1]/a[1]", current.filter3);
    I.pressKey("Enter");
    I.click("//thead/tr[@id='w0-filters']/td[14]/div[1]/a[1]/span[2]/b[1]");
    I.fillField("//thead/tr[@id='w0-filters']/td[14]/div[1]/a[1]/span[2]/b[1]",current.filter4);
    I.pressKey("Enter");
    I.handleDownloads();
    I.selectOption("#transactionssearch-export_excel",current.formatfile);
    I.click("Download");
    I.wait("3"); //diset tergantung banyak nya file
    I.amInPath("output/downloads");
    let NamaFile = await I.grabFileNames();
    I.seeFileNameMatching(NamaFile);
    
});