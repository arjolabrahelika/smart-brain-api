
import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
import handleRegister from './controllers/register.mjs'
import handleSignin from './controllers/singin.mjs'
import handleProfileGet from './controllers/profile.mjs'
import handleImage from './controllers/image.mjs';
import handleApiCall from './controllers/imageurl.mjs';



const db = knex({
   client: 'pg',
   connection: {
     host : '127.0.0.1',
     user : 'postgres',
     password : 'ola',
     database : 'smart_brain'
   }
 });


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.post('/signin',(req,res) =>handleSignin(req, res, db, bcrypt));
app.post('/register',(req,res) => handleRegister(req, res, db, bcrypt));
app.get('/profile/:id' , (req,res) =>handleProfileGet(req,res, db));
app.put('/image', (req,res) =>handleImage(req,res,db)); 
app.post('/imageurl', (req,res) =>handleApiCall(req,res)); 

app.listen(3001, ()=>{
   console.log('app is running on port 3001'); 
})