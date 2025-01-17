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

//POSt a new todos
app.post('/todos', (req,res)=>{
    const { title, completed} = req.body;
    pool.query('INSERT INTO todos (title, completed) VALUES ($1,$2)', [title, completed], (error) => {
        if(error){
            console.error('Error creating todo',error);
            res.status(500).json({error:'Internal server error'});
        }else{
            res.status(201).json({message: "Todo created successfully"});
        }
    });

});

app.listen(4000, ()=>{
    console.log('Server is running.');
});