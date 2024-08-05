function setupExerciseForm() {
    fetch('/api/exercises')
        .then(response => response.json())
        .then(data => {
            // Manipulate the DOM to display the data
            const exercisesContainer = document.getElementById('exercises-list');
            if (exercisesContainer) {
                data.forEach(exercise => {
                    const exerciseElement = document.createElement('div');
                    exerciseElement.textContent = `${exercise.name}: ${exercise.description}, ${exercise.calories_lost}, ${exercise.duration}`;
                    exercisesContainer.appendChild(exerciseElement);
                });
            }
        })
        .catch(error => console.error('Error fetching exercises:', error));

    document.getElementById('add-exercise').addEventListener('click', async (e) => {
        e.preventDefault();
        const name = document.getElementById('exercise-name').value;
        const description = document.getElementById('exercise-description').value;
        const calories_lost = document.getElementById('exercise-calories_lost').value;
        const duration = document.getElementById('exercise-duration').value;

        try {
            const response = await fetch('/api/exercises', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, description, calories_lost, duration })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Failed to add exercise');
            }
        } catch (error) {
            console.error('Error adding exercise:', error);
        }
    });
}

document.addEventListener('DOMContentLoaded', setupExerciseForm);


