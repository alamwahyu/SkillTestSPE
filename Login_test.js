Feature('Login');

    let user_login = new DataTable(['username', 'password', 'status']);
    user_login.add(['alamw', 'Spe-2022', 'success']);
    user_login.add(['testing', 'testing', 'incorrect']);
    user_login.add(['Alam', 'blocked1', 'blocked']);


Data(user_login.filter(user_login => user_login.status == 'success')).Scenario('LoginSukses', ({ I, current }) => {
    I.amOnPage('/');
    I.wait(1);
    I.click("#loginButton");
    I.fillField("#loginform-username", current.username);
    I.fillField("#loginform-password", current.password);
    I.click("#login");
    I.waitForNavigation();
    I.see("Dashboard (Credit Only)");
});

Data(user_login.filter(user_login => user_login.status == 'incorrect')).Scenario('LoginIncorrect', ({I, current}) => {
    I.amOnPage("/");
    I.wait(1);
    I.click("#loginButton");
    I.fillField("#loginform-username", current.username);
    I.fillField("#loginform-password", current.password);
    I.click("#login");
    I.wait(2);
    I.see("Incorrect username or password.");
});

Data(user_login.filter(user_login => user_login.status == 'blocked')).Scenario('LoginBlocked', { retries: 5 }, ({I, current}) => {
    I.amOnPage("/");
    I.wait(1);
    I.click("#loginButton");
    I.fillField("#loginform-username", current.username);
    I.fillField("#loginform-password", current.password);
    I.click("#login");
    I.wait(2);
    I.see("Maximum login attempt exceeded. user has been locked for 15 minutes");
});

Scenario('LoginBlank', ({I}) => {
    I.amOnPage("/");
    I.wait(1);
    I.click("#loginButton");
    I.click("#login");
    I.wait(2);
    I.see("Username is blank.") && I.see("Password is blank.");
});