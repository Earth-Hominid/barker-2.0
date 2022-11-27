const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// const connectDB = require('./config/db');
const connectDatabase = require('./config/database');
const port = process.env.PORT || 5000;

const app = express();
// Connect to MongoDB
connectDatabase();

// Initialize middleware
app.use(express.json({ extended: false }));

app.use(cors());
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === 'development',
//   })
// );

app.get('/', (req, res) => res.send('API Running'));
// Define routes
app.use('/api/forums', require('./routes/api/forums'));
app.use('/api/members', require('./routes/api/members'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profiles', require('./routes/api/forums'));
app.use('/api/comments', require('./routes/api/comments'));

app.listen(port, console.log(`Server running on port ${port}`));
