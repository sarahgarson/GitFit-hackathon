// public/workouts.js

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/workouts');
        const workouts = await response.json();
        
        // Find the element where you want to display the workouts
        const workoutsContainer = document.getElementById('workouts-container');
        
        workouts.forEach(workout => {
            const workoutItem = document.createElement('div');
            workoutItem.innerText = workout.name; // Adjust based on your table structure
            workoutsContainer.appendChild(workoutItem);
        });
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }
});