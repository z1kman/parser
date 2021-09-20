const Express = require('express');
const Path = require('path');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//const port = process.env.PORT || 80;
const port = process.env.PORT || 4567; // 4567

const frontendPath = Path.join(__dirname, 'frontend/build');
const app = Express();

app.use(Express.static(frontendPath));


const parseSiteRouter = Express.Router()
const parseSite = require('./backend/parseSite/parseSite');
parseSite(parseSiteRouter)
app.post('/parseSite',jsonParser, parseSiteRouter);



// app.get('*', (req, res) => {
//   res.sendFile(Path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });

app.listen(port, '0.0.0.0', () => {
  console.log(`Service has been started on port ${port}`);
});
