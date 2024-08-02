const express = require('express');
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