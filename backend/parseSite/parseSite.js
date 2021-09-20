

const puppeteer = require('puppeteer');
const getError = require('../errors/getError');

module.exports = (app) => {
  app.use('*', function (req, res) {
    const url = req.body.link;
    const options = {
      headless: true
    };

    (async function () {
      let prevUrl = '';
      let urls = [];
      try {
        const browser = await puppeteer.launch(options);
        const page = await browser.newPage();
        await page.goto(url);
      } catch  {
        res.json({error : true, message: getError(1)});
        res.status(500).end();
      }
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

