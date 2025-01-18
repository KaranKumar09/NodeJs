const express = require('express');
const {Pool} = require('pg');

const app=express();
const port=4000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todos',
    password: 'root',
    port: 5432,
});
//Middleware
app.use(express.json());

//Put update todos
app.put('/todos/:id', (req, res) =>{
    const { id} =req.params;
    const {title, completed} = req.body;
    pool.query('UPDATE todos SET title = $1, completed = $2 WHERE id=$3', [title, completed, id], (error) => {
        if(error){
            console.error('Error updating todo',error);
            res.status(500).json({error:'Internal server error'});
        }else{
            res.json({message: "Todos updated successfully"});
        }
    });
})

app.listen(4000, ()=>{
    console.log('Server is running.');
});