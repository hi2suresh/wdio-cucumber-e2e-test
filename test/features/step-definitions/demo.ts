import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function() {
    console.log(`>>Opening Browser...`);
    await browser.url('https://www.google.com')
    await browser.pause(10000)
});

When(/^Search with (.*)$/, async function(searchTerm) {
    console.log(`>>SearchTerm: ${searchTerm}`);
    const element = await $(`[name='q']`);
    await element.setValue(searchTerm);
    await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function() {
    const element = await $(`<h3>`);
    element.click();
});

Then(/^URL should match (.*)$/, async function(expectedUrl) {
    console.log(`>>ExpectedURL: ${expectedUrl}`);
    const url = await browser.getUrl()
    chai.expect(url).to.eq(expectedUrl)
});
