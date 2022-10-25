const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); 

//rutas 
//get all pokemons

app.get("/todos", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM pokemon");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get only one pokemon
  
  app.get("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM pokemon WHERE numero_pokedex = $1", [
        id
      ]);
  
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

//req.body
app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
  