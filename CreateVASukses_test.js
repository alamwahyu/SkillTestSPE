const faker = require('@faker-js/faker');

Feature('CreateVASukses');

let data = new DataTable(['clietID', 'formatBillingID', 'virtualAccount', 'name', 'email', 'telp', 'desc', 'billingtype', 'amount', 'exp']);
data.add(['8-123',
          'Automation.Alam_'+faker.datatype.number(99999), 
          '8123'+ faker.phone.phoneNumber('############'), 
          'Alam '+faker.name.lastName(), 
          faker.internet.email(),
          faker.phone.phoneNumber('081#########'),
          faker.lorem.word(10),
          'Fixed Payment',
          faker.datatype.number({ min: 100, max: 10000 }),
          "2022-12-30 23:50:50"
        ]);


Data(data).Scenario('CreateVA', async ({ I, current}) => {
    I.Login();
    I.click("VA Management");
    I.wait(1);
    I.click("Create VA");
    I.see("Fields with * are required.");
    I.fillField("Client", current.clietID);
    I.pressKey("Enter");
    I.fillField("Billing ID", current.formatBillingID);
    I.fillField("VA Number", current.virtualAccount);
    let VA = await I.grabValueFrom("#createvaform-virtual_account");
    I.fillField("Name", current.name);
    I.fillField("Email", current.email);
    I.fillField("Phone Number", current.telp);
    I.fillField("Description", current.desc);
    I.selectOption("Billing Type", current.billingtype);
    I.fillField("Billing Amount", current.amount);
    I.fillField("Expiry Datetime", current.exp);
    I.click("Create");
    I.wait(1);
    I.waitForText("Nomor VA telah dibuat dan sudah berhasil tersimpan didalam database");
    I.wait(1);
    I.click("Report");
    I.wait(1);
    I.click("Billing Data");
    I.waitForNavigation();
    //I.wait(3);
    I.waitForText("All times and dates are presented in UTC+7.");
    I.fillField("TransactionsSearch[virtual_account]", VA);
    I.pressKey("Enter");
    I.wait(1);
    I.see(VA);
    I.saveScreenshot("CreateVASukses.png");
});