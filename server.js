require('dotenv').config();

require('express-async-errors');

const express=require('express');

const morgam=require('morgan');

const app=express();

const port=process.env.PORT||3000;


const errorHandlerMiddleware=require('./middleware/error-handler');

const notFoundMiddleware=require('./middleware/not-found');

const mainRouter=require('./routes/main');

//middleware

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgam('tiny'));


//routes
/*

/login --> post('/login')        controller loginUser
/dashboard --> get('/dashboard') controller getDashboard

*/
// app.get('/',(req,res)=>{
//     res.status(200).send('welcome ');
// })

// app.get('/',(req,res)=>{
//     res.send('fuck');
//   })
app.use('/api/v1/',mainRouter)

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware)


app.listen(port,()=>{
    console.log(`sever started listening at port ${port}`)
})


