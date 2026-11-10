import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) {}

    async click(locator: Locator) {

        await locator.click();
    }

    async fill(locator: Locator, value: string) {

        await locator.fill(value);
    }

    async hover(locator: Locator) {

        await locator.hover();
    }

    async dragAndDrop(
        source: Locator,
        target: Locator
    ) {

        await source.dragTo(target);
    }

    async screenshot(name: string) {

        await this.page.screenshot({
            path: `screenshots/${name}.png`
        });
    }

}