import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get menu() {
        return $('~open menu');
    }

    public get loginOption() {
        return $('~menu item log in');
    }

    public get inputUsername() {
        return $('~Username input field');
    }

    public get inputPassword() {
        return $('~Password input field');
    }

    public get btnSubmit() {
        return $('~Login button');
    }

    public async login(username: string, password: string) {
        await (await this.menu).click();
        await (await this.loginOption).click();
        await (await this.inputUsername).clearValue();
        await (await this.inputUsername).addValue(username);
        await (await this.inputPassword).clearValue();
        await (await this.inputPassword).addValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('login');
    }
}

export default new LoginPage();
