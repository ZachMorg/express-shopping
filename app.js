const express = require('express')
const app = express();
const routes = require('./routes')

app.use(express.json());
app.use('/items', routes);

app.listen(3000, () => {
    console.log('Sever running on port 3000')
});



module.exports = app