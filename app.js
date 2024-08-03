const express = require('express');
const path = require('path'); 
require('dotenv').config();



const exercises_router = require('./routes/exercisesRouter.js');
const workouts_router = require('./routes/workoutsRouter.js');
const meal_components_router = require('./routes/mealComponentsRouter.js');
const meals_router = require('./routes/mealsRouter.js');
const workout_exercises_router = require('./routes/workoutExercisesRouter.js');
const components_router = require('./routes/componentsRouter.js');



const app = express();



// Log requests
app.use((req, res, next) => {
    console.log(`Received request for ${req.url}`);
    next();
});



// Added it for serve static files from the 'public' directory
app.use(express.static('public'));


// Serve static files from multiple directories:
// app.use(express.static('public-exercises'));
// app.use(express.static('public-workouts'));
// app.use(express.static('public-workouts-exercises'));




//wrote it in case we need it when connecting html/css/js to Node.js

// Route for Exercises page
// app.get('/exercises', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public-exercises/exercises.html'));
// });

// // Route for Workouts page
// app.get('/workouts', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public-workouts/workouts.html'));
// });

// // Route for Workouts-Exercises page
// app.get('/workouts-exercises', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public-workouts-exercises/workouts-exercises.html'));
// });

// // Route for Meals page
// app.get('/meals', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public-meals/meals.html'));
// });

// // Route for Meal Ingredients page
// app.get('/components', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public-components/components.html'));
// });




// Favicon handler
app.get('/favicon.ico', (req, res) => res.status(204));



// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes
app.use('/exercises', exercises_router);
app.use('/workouts', workouts_router);
app.use('/meal_components', meal_components_router);
app.use('/meals', meals_router);
app.use('/workout_exercises', workout_exercises_router);
app.use('/components', components_router);



// Default route
app.get('/', (req, res) => {
    res.send('Server is running');
});



// Catch-all for undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});



// Listener
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});