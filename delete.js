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
app.delete('/todos/:id', (req,res)=>{
    const {id} = req.body;
    pool.query('DELETE FROM todos WHERE id = $1',[id], (error) => {
        if(error){
            console.error('Error creating todo',error);
            res.status(500).json({error:'Internal server error'});
        }else{
            res.json({message: "Todo deleted successfully"});
        }
    });

});

app.listen(4000, ()=>{
    console.log('Server is running.');
});