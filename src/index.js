const express = require('express');
const { connectDB } = require('./db');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

connectDB().then(() => {
    if (process.env.NODE_ENV !== 'test') {
    	app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
    	});
    }
});

module.exports = app;
