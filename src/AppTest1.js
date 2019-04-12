const puppeteer = require("puppeteer");

// const isDebugging = () => {
//   const debugging_mode = {
//     headless: false,
//     slowMo: 250,
//     devtools: true
//   };
//   return process.env.NODE_ENV === "debug" ? debugging_mode : {};
// };

// describe("on page load", () => {
//   test("loads correctly", async () => {
//     let browser = await puppeteer.launch({ headless: false });
//     let page = await browser.newPage();

//     page.emulate({
//       viewport: {
//         width: 500,
//         height: 2400
//       },
//       userAgent: ""
//     });
//     await page.goto("http://localhost:3000/");
//     await page.waitFor(2000);
//     await page.waitForSelector(".container");

//     let textBoxId = "input";
//     await page.type(textBoxId, "Nastya :)", { delay: 100 });

//     ///Проверка
//     await page.waitForSelector(".title-page");
//     const currentResult = await page.$eval(
//       ".title-page",
//       elem => elem.textContent
//     );
//     await expect(currentResult).toEqual("Welcome, user_name");

//     ///Клик
//     await page.click('[data-e2e="open-album-1"]');
//     await page.waitFor(3000);

//     ///Проверка
//     await page.waitForSelector(".title-page");
//     const currentResult1 = await page.$eval(
//       ".title-page",
//       elem => elem.textContent
//     );
//     await expect(currentResult1).toEqual("First album");

//     // ///Клик
//     // await page.click("i");
//     // await page.waitFor(3000);

//     // ///Проверка
//     // await page.waitForSelector(".title-page");
//     // const currentResult2 = await page.$eval(
//     //   ".title-page",
//     //   elem => elem.textContent
//     // );
//     // await expect(currentResult2).toEqual("Welcome, user_name");

//     ///Клик на img
//     await page.click('[data-e2e="photo-1"]');
//     await page.waitFor(3000);

//     ///Получение названия img
//     // const result = await page.evaluate(
//     //   () => document.querySelector('[class="title-page"]').innerText
//     // );

//     ///Клик
//     // await page.click('[class="fa fa-angle-left fa-lg"]');
//     // await page.waitFor(3000);

//     // ///Клик на img2
//     // await page.click('[class="photo-item__title"]');
//     // await page.waitFor(3000);

//     // ///Получение названия img2 2763
//     // const result2 = await page.evaluate(() => {
//     //   let nameImg2 = document.querySelector('[class="fa fa-angle-left fa-lg"]')
//     //     .innerText;

//     //   return {
//     //     nameImg2
//     //   };
//     // });

//     // browser.close();
//     // console.log(result);
//   }, 30000);
// });
const caseFirstTest = [
  {
    desc: "firstTest"
  }
];
const checkFirstTest = testCase => {
  it(testCase.desc, async () => {
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
  });
};

caseFirstTest.forEach(testCase => checkFirstTest(testCase));
