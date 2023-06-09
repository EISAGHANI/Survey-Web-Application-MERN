const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authroutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


if(process.env.NODE_ENV === 'production'){
  //Express willl serve up production assets like our main.js or main.css file
  app.use(express.static('create-react-app/build'));
  
  //Express will serve up the index.html if it does not recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'create-react-app', 'build', 'index.html'));

  })
}


const PORT = process.env.PORT || 5500;
app.listen(PORT);
