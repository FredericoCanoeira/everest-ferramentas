/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

  // Import Routes
const usersRoutes = require("./routes/users");
const selfAssessmentRoutes = require("./routes/selfAssessment");

// Routes
app.get("/", (req, res) => res.send("Backend is running..."));
app.use("/api/users", usersRoutes);
app.use("/api/self-assessment", selfAssessmentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/

/*--------require('dotenv').config(); // Para carregar variáveis de ambiente
const mongoose = require('mongoose');
const express = require('express');

const app = express();



mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexão com MongoDB bem-sucedida'))
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err.message);
        process.exit(1); // Finaliza o processo em caso de falha
    });

// Configuração básica do servidor
app.get('/', (req, res) => res.send('Servidor funcionando'));

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));----*/


const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware for parsing JSON in request bodies
app.use(express.json());

// MongoDB connection URI from environment variables
const mongoURI = process.env.DB_URI || 'mongodb+srv://EverestApp:Everest1@cluster0.nr4o5.mongodb.net/EverestAppDB?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process if connection fails
    });

// Basic server configuration
app.get('/', (req, res) => res.send('Server is running'));

// Importing user routes
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes); // Prefix routes with `/api/users`

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
