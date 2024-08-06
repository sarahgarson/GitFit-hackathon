const express = require('express');
const path = require('path'); 
require('dotenv').config();



const exercises_router = require('./routes/exercisesRouter.js');
const components_router = require('./routes/componentsRouter.js');



const app = express();



// Log requests
app.use((req, res, next) => {
    console.log(`Received request for ${req.url}`);
    next();
});



// Added it for serve static files from the 'public' directory
app.use(express.static('public'));


// Serve static files from other directories
app.use('/exercises', express.static(path.join(__dirname, 'public-exercises')));
app.use('/components', express.static(path.join(__dirname, 'public-mealComponents')));




// Favicon handler
app.get('/favicon.ico', (req, res) => res.status(204));



// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());






// Routes 2 (checking to make sure it works)
//IT WORKED WITH THESE ROUTES PATHS 
app.use('/api/exercises', exercises_router);
app.use('/api/components', components_router);


//-----------------------------------------------

//THE MAIN PAGE

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//----------------------------------------------


// Default route
// app.get('/', (req, res) => {
//     res.send('Server is running');
// });



// Catch-all for undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});



// Listener function
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});