-- Create table for components
CREATE TABLE components (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    calories INT,
    protein INT,
    fat INT,
    sodium INT,
    created_by TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table for meals
CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a junction table for many-to-many relationship between meals and components
CREATE TABLE meal_components (
    meal_id INT REFERENCES meals(id) ON DELETE CASCADE,
    component_id INT REFERENCES components(id) ON DELETE CASCADE,
    quantity INT, -- Quantity of the component in the meal
    PRIMARY KEY (meal_id, component_id)
);

SELECT
    m.id AS meal_id,
    COALESCE(SUM(c.calories * mc.quantity), 0) AS calories_total,
    COALESCE(SUM(c.protein * mc.quantity), 0) AS protein_total,
    COALESCE(SUM(c.fat * mc.quantity), 0) AS fat_total,
    COALESCE(SUM(c.sodium * mc.quantity), 0) AS sodium_total
FROM
    meals m
JOIN
    meal_components mc ON m.id = mc.meal_id
JOIN
    components c ON mc.component_id = c.id
GROUP BY
    m.id;


    --HAD TO INSERTS EXAMPLES TO MAKE SURE IT WAS APPEARING IN THE WEBPAGE

    	INSERT INTO components (name, calories, protein, fat, sodium, created_by)
VALUES
    ('Chicken Breast', 165, 31, 3.6, 74, 1),
    ('Broccoli', 55, 3.7, 0.6, 33, 1),
    ('Brown Rice', 111, 2.6, 0.9, 10, 1);
	
	
	
	INSERT INTO meals (date_added)
VALUES
    ('2024-08-01 12:00:00'),
    ('2024-08-02 18:00:00');
	
	
	INSERT INTO meal_components (meal_id, component_id, quantity)
VALUES
    (1, 1, 200),  -- 200 grams of Chicken Breast in meal 1
    (1, 2, 100),  -- 100 grams of Broccoli in meal 1
    (2, 3, 150);  -- 150 grams of Brown Rice in meal 2

--1. Create the exercises Table:
-- This table includes the duration column from the start.

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    calories_lost INT,
    duration INTERVAL NOT NULL DEFAULT '01:00:00'
);



--2. Create the workouts Table:
--This table now includes datetime and exercise_names columns.

CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    datetime TIMESTAMP NOT NULL, -- Stores the date and time of the workout
    time TIME NOT NULL,
    total_calories_lost INT DEFAULT 0,
    exercise_names TEXT -- Stores a comma-separated list of exercise names
);



--3. Create the workout_exercises Junction Table:
--This table links workouts and exercises.

CREATE TABLE workout_exercises (
    workout_id INT REFERENCES workouts(id) ON DELETE CASCADE,
    exercise_id INT REFERENCES exercises(id) ON DELETE CASCADE,
    PRIMARY KEY (workout_id, exercise_id)
);



--4. Create the Trigger Function to Update total_calories_lost and exercise_names:
--This function updates both the total calories lost and the list of exercise names whenever an exercise is added or removed from a workout.

CREATE OR REPLACE FUNCTION update_workout_details()
RETURNS TRIGGER AS $$
BEGIN
    -- Update total_calories_lost
    UPDATE workouts
    SET total_calories_lost = (
        SELECT COALESCE(SUM(e.calories_lost), 0)
        FROM workout_exercises we
        JOIN exercises e ON we.exercise_id = e.id
        WHERE we.workout_id = NEW.workout_id
    ),
    -- Update exercise_names
    exercise_names = (
        SELECT STRING_AGG(e.name, ', ')
        FROM workout_exercises we
        JOIN exercises e ON we.exercise_id = e.id
        WHERE we.workout_id = NEW.workout_id
    )
    WHERE id = NEW.workout_id;

    RETURN NULL; -- Returning NULL is a common practice in AFTER triggers
END;
$$ LANGUAGE plpgsql;



--a) Ensure Trigger is Created Correctly
--Double-check that the trigger is correctly set up to use this function:

DROP TRIGGER IF EXISTS trg_update_workout_details ON workout_exercises;



--5. Create the Trigger:
--This trigger calls the above function after any insert or delete on workout_exercises.

CREATE TRIGGER trg_update_workout_details
AFTER INSERT OR DELETE ON workout_exercises
FOR EACH ROW EXECUTE FUNCTION update_workout_details();



--6. Insert Exercises into the exercises Table:
--Insert exercises with their associated duration.

INSERT INTO exercises (name, description, calories_lost, duration) VALUES
('Running', 'Running at a moderate pace', 300, '01:00:00'),
('Cycling', 'Cycling at a moderate pace', 250, '01:00:00'),
('Swimming', 'Swimming at a moderate pace', 400, '01:00:00');



--7. Insert a Workout into the workouts Table:
--Insert a workout with the specified datetime.

INSERT INTO workouts (datetime, time) VALUES ('2024-08-12 10:00:00', '01:00:00');



--8. Link Exercises to the Workout in the workout_exercises Table:
--Associate the exercises with the workout.

INSERT INTO workout_exercises (workout_id, exercise_id) VALUES
(1, 1), -- Linking 'Running' to workout 1
(1, 2), -- Linking 'Cycling' to workout 1
(1, 3); -- Linking 'Swimming' to workout 1



--9. Verify the Result:
--Check if the total_calories_lost and exercise_names were updated correctly.

SELECT * FROM workouts WHERE id = 1;
