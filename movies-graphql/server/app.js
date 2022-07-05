const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors())

CONNECTION_URL = 'mongodb+srv://arnab-das:Theboss100@cluster0.phouc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL);
mongoose.connection.once('open', () => console.log("Connected to database"));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5500, () => {
    console.log("Server running on port 5500");
});