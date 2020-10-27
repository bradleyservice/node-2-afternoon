let messages = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages);
    },

    create: (req, res) => {
        const {text, time} = req.body;
        const newMessage = {
            id,
            text,
            time
        };
        messages.push(newMessage);
        id++;
        res.status(200).send(messages);
    },

    update: (req, res) => {
        const {text} = req.body;
        const index = messages.findIndex(elem => elem.id === +req.params.id);
        let message = messages[index]
        messages[index] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const index = messages.findIndex(elem => elem.id === +req.params.id);
        messages.splice(index, 1);
        res.status(200).send(messages);
    }
}