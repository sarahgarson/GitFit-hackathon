fetch('/api/exercises')
    .then(response => response.json())
    .then(data => {
        // Manipulate the DOM to display the data
        const exercisesContainer = document.getElementById('exercises-list');
        if (exercisesContainer) {
            data.forEach(exercise => {
                const exerciseElement = document.createElement('div');
                exerciseElement.textContent = `${exercise.name}: ${exercise.description}`;
                exercisesContainer.appendChild(exerciseElement);
            });
        }
    })
    .catch(error => console.error('Error fetching exercises:', error));

document.getElementById('add-exercise').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const caloriesLost = document.getElementById('calories-lost').value;
    const duration = document.getElementById('duration').value;

    try {
        const response = await fetch('/api/exercises', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, caloriesLost, duration })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Exercise added:', data);
    } catch (error) {
        console.error('Failed to add exercise:', error);
    }
});



