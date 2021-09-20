

const puppeteer = require('puppeteer');

// async function fetchProductList() {

// const browser = await puppeteer.launch();
// const page = await browser.newPage();
// await page.goto('https://www.google.ru/');

// const list = await page.evaluateHandle(() => {
//   return Array.from(document.getElementsByTagName('div')).map(div => div.class);
// });
// console.log(await list.jsonValue());
// }


module.exports = (app) => {
  app.use('*', function (req, res) {
    const url = req.body.link;
    const options = {
      headless: true
    };

    (async function () {

      const browser = await puppeteer.launch(options);
      const page = await browser.newPage();
      let prevUrl = '';
      let urls = [];
      await page.goto(url);
      await page.waitForSelector("div.launch-screen-button__play-icon");
      const response = await page.click('div.launch-screen-button__play-icon')
      await page.waitForSelector("video[src]");
      const srcs = await page.$$eval('video', (divs) => divs.map(elem => elem.getAttribute("src")));
      const arrUrl = url.split('/');
      arrUrl.forEach((elem, index) => {
        if (index + 1 < arrUrl.length)
          prevUrl += elem + '/';
      })
      srcs.forEach(elem => {
        urls.push(prevUrl + elem);
      })
      await browser.close();
      res.send(urls);
    })();
  });

}

