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
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.get('/', (req, res) => res.send('API Running'));
// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/forums', require('./routes/api/forums'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/comments', require('./routes/api/comments'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.listen(port, console.log(`Server running on port ${port}`));
