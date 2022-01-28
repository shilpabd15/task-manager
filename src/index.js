const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express()
const port = process.env.PORT || 3000 ;

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);


app.listen(port, ()=>{
    console.log("Server is up on port " + port)
})

