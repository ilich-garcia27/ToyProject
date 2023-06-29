import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../features/pageobjects/login.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.pause(2000);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});