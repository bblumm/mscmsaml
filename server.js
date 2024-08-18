const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Данные пользователей (Пример)
const users = {}; 

// Обработка запросов на сохранение данных
app.post('/save-data', (req, res) => {
    const userId = req.body.userId; // Получите идентификатор пользователя
    const data = req.body.data; // Получите данные (переменная, таймер)

    users[userId] = data; // Сохраните данные в users
    res.send('Data saved!');
});

// Обработка запросов на получение данных
app.get('/get-data/:userId', (req, res) => {
    const userId = req.params.userId; // Получите идентификатор пользователя
    const userData = users[userId];
    res.json(userData);
});

// Запуск сервера
const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`); // Используйте обратные кавычки
});