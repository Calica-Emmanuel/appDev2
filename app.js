const express = require('express');
const routes = require('./routes/router');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', './views');
app.use('/', routes); 
app.use(express.static('public'));


  // Start the server
  const PORT = 3000; // Define your port number
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
