const express = require('express');
const cors = require('cors');
const app  = express();

const db = require('./app/config/db');

const todosRouter = require("./app/routes/todos");

app.use(express.json());
app.use(cors());

app.use("/", todosRouter);

// app.get("/", (req, res) => {
//   db.query("SELECT * FROM tb_todos")
//   .then((result) => {
//     res.send(result.rows);
//   })
// })

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('app started at port ' + PORT);
})