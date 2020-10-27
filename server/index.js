const express = require('express');
const app = express();
const port = 3001;
const mc = require('./controllers/messages_controller')

app.use(express.json());

app.get('/api/messages', mc.read);

app.post('/api/messages', mc.create);

app.put('/api/messages/:id', mc.update);

app.delete('/api/messages/:id', mc.delete);

app.listen(port, () => {
    console.log(`server running on ${port}`)
});

