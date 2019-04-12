const puppeteer = require("puppeteer");

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true
  };
  return process.env.NODE_ENV === "debug" ? debugging_mode : {};
};

describe("on page load", () => {
  test("loads correctly", async () => {
    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ""
    });
    await page.goto("http://localhost:3000/");
    await page.waitFor(2000);
    await page.waitForSelector(".container");

    // let textBoxId =
    //   "#root > main > div.HeaderApp-root-1 > header > div > div.HeaderApp-search-5 > div.MuiInputBase-root-58.HeaderApp-inputRoot-7 > input";
    await page.type("input", "Nastya :)", { delay: 50 });

    ///Проверка
    await page.waitForSelector(".title-page");
    const currentResult = await page.$eval(
      ".title-page",
      elem => elem.textContent
    );
    await expect(currentResult).toEqual("Welcome, user_name");

    ///Клик
    await page.click('[data-e2e="open-album-1"]');
    await page.waitFor(3000);

    ///Проверка
    await page.waitForSelector(".title-page");
    const currentResult1 = await page.$eval(
      ".title-page",
      elem => elem.textContent
    );
    await expect(currentResult1).toEqual("First album");

    ///Клик на img
    await page.click('[class="fa fa-check"]');
    await page.waitFor(3000);

    ///Получение названия img
    const titlePage = await page.evaluate(
      () => document.querySelector('[class="title-page"]').innerText
    );

    const titleImg = await page.evaluate(
      () => document.querySelector('[data-e2e="source"').innerText
    );
    console.log(`[${titlePage}] = [${titleImg}]`);
    await expect(titlePage).toEqual(titleImg);

    browser.close();
  }, 16000);
});
