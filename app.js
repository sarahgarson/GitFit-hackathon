const express = require('express');
require('dotenv').config();
const cors = require('cors');



const components_router = require('./routes/componentsRouter.js');
const exercises_router = require('./routes/exercisesRouter.js');
const meal_components_router = require('./routes/mealComponentsRouter.js');
const meals_router = require('./routes/mealsRouter.js');
const workout_exercises_router = require('./routes/workoutExercisesRouter.js');
const workouts_router = require('./routes/workoutsRouter.js');

const app = express();

app.use(cors());

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//listener
const PORT = process.env.PORT || 3010
;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



app.use('/components', components_router);
app.use('/exercises', exercises_router);
app.use('/meal_components', meal_components_router);
app.use('/meals', meals_router);
app.use('/workout_exercises', workout_exercises_router);
app.use('/workouts', workouts_router);

