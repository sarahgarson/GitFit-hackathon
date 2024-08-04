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




