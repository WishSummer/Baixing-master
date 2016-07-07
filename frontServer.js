var nunjucks = require('nunjucks');
var chalk = require('chalk');
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var compress = require('compression');
var app = express();

const njenv = nunjucks.configure('./ui/views', {
  autoescape: true,
  express: app,
  watch: true,
});

njenv.addFilter('json', str => JSON.stringify(str));

app.set('views', './ui/views');
app.set('view engine', 'nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(compress());
app.use(express.static('./.uibuild'));

app.use('/api/*', (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  console.log(req.body);
  console.log('');
  next();
});

app.get('/', (req, res) => {
  res.render('user/signin');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/api/user', (req, res) => {
  res.json([
    {_id: '1', username: 'user 1'},
    {_id: '2', username: 'user 2'},
    {_id: '3', username: 'user 3'},
  ]);
});

app.get('/api/user/:id', (req, res) => {
  res.json({
    _id: req.params.id,
    username: 'user ' + req.params.id,
    privilege: {
      MANAGE_USER: true,
      MANAGE_STAFF: true,
    },
  });
});

app.put('/api/user/:id', (req, res) => {
  res.json({});
});

app.delete('/api/user/:id', (req, res) => {
  res.json({});
});

app.post('/api/user', (req, res) => {
  res.json({});
});

app.get('/api/staff', (req, res) => {
  res.json([
    {_id: '1', name: 'staff 1', mobile: '11111111111', contact_person: '66300001', department_primary: '研发', department_secondary: '酱油', title: '首席酱油', level: 999, address: 'SWFC No1', manager: '哇', enter_date: new Date(2010,3,1,13,15,31).getTime() },
    {_id: '2', name: 'staff 2', mobile: '22222222222', contact_person: '66300002', department_primary: '测试', department_secondary: '安卓', title: '苦逼安卓测试攻城狮', level: 0, address: 'SWFC No2', manager: '哈', enter_date: new Date(2015,6,6,13,15,31).getTime() },
    {_id: '3', name: 'staff 3', mobile: '33333333333', contact_person: '66300003', department_primary: '市场', department_secondary: '推广', title: '鼓励狮', level: -1, address: 'SWFC No3', manager: '呀', enter_date: new Date(2016,10,3,13,15,31).getTime() },
  ]);
});

app.get('/api/staff/:id', (req, res) => {
  res.json({_id: '1', name: 'staff 1', mobile: '11111111111', contact_person: '66300001', department_primary: '研发', department_secondary: '酱油', title: '首席酱油', level: 999, address: 'SWFC No1', manager: '哇', enter_date: new Date(2010,3,1,13,15,31).getTime() });
});

app.put('/api/staff/:id', (req, res) => {
  res.json({});
});

app.delete('/api/staff/:id', (req, res) => {
  res.json({});
});

app.post('/api/staff', (req, res) => {
  res.json({});
});

app.post('/api/logout', (req, res) => {
  res.json({});
});

app.post('/api/login', (req, res) => {
  res.json({});
});

app.listen(3000, () => {
  console.log(chalk.green('Front server is listening on port 3000!'));
});
