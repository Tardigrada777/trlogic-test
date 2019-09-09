const express = require('express');
const jsonServer = require('json-server');

const server = express();

// Подключаем json-server, следящий за
// базой в файле db.json к endpoint /api
server.use('/api', jsonServer.router('db.json'));

// Задаем порт для приложения.
// Либо порт из настроек окружения, либо 3000
const port = process.env.PORT || 3000;
server.set('port', port);

// Устанавливаем папку для поиска и чтения
// статических файлов
server.use(express.static('dist'));

// Обработчик коренного роута.
// Возвращаем страницу index.html
// с подключенными скомпилироваными
// скриптами и стилями
server.get('/', (req, res) => {
  res.render('index.html');
});

// Мелкий фикс, редиректит любые
// обновления страницы, чтобы не было ошибки
// cannot GET
server.get('/*', (req, res) => {
  res.redirect('/');
});

// Запускаем сервер на прослушка порта
// Сам сервер запустим в скрипте start
// Этот скрипт heroku выполняет автоматически
// сразу после деплоя
server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
