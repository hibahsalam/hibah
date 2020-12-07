const mongoose = require('mongoose');

const express = require('express')
const app = express();

const userName = "hibah123";
const password  = "hibah123";
const connectionUrl = `mongodb+srv://hibah123:hibah123@cluster0.ajclq.mongodb.net/test?retryWrites=true&w=majority`;

const Schema = mongoose.Schema;
const movie_schema = new Schema({
  movie_name: { type: String, required: true, unique: true },  
  ratings: { type: Number, required: true, unique: false },
  created_on: { type: Date, required: true, unique: false },
});
// Create a model for the schema
const Movie = mongoose.model('Movie', movie_schema);
mongoose.connect(connectionUrl,{useNewUrlParser: true, useUnifiedTopology: true}).then((db) => {
    console.log(`connected `)
}).catch(error => {
    console.log(error);
})

const db = mongoose.connection;

const port  = 3000;
app.listen(port, () => {
    console.log('express is listning on port on 3000');
})

app.get('/news', (req, res) => {
    Movie.find({}, (err, movies) => {
        if(err) {
            console.log(err);
        } else {
            res.send(movies);
        }
    }).ca
});

app.post('/addMovie', (req, res) => {
        var new_movie = new Movie({
            movie_name: 'sdfsdf',
            ratings: 3,
            created_on: Date.now()
        });
        new_movie.save((err,document) => {
            if(err) {
                console.log(err);
            } else {
                res.send('complete')
            }
        })
    
})