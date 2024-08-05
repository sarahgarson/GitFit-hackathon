fetch("/api/exercises/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Manipulate the DOM to display the data
    const exercisesContainer = document.getElementById("exercises-list");
    if (exercisesContainer) {
      data.forEach((exercise) => {
        const exerciseElement = document.createElement("div");
        exerciseElement.textContent = `Name: ${exercise.name},
            Description: ${exercise.description} ,
            Calories Lost: ${exercise.calories_lost} ,
            Duration: ${exercise.duration.hours}`;

        exercisesContainer.appendChild(exerciseElement);
      });
    }
  })
  .catch((error) => {
    console.error("Error fetching exercises:", error);
  });

document
  .getElementById("add-exercise")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    const name = document.getElementById("exercise-name").value;
    const description = document.getElementById("exercise-description").value;
    const calories_lost = document.getElementById("exercise-calories_lost").value;
    const duration = document.getElementById("exercise-duration").value;

    try {
      const response = await fetch("/api/exercises/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, calories_lost, duration }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Exercise added:", data);

      // Manipulate the DOM to display the new exercise
      const exercisesContainer = document.getElementById("exercises-list");
      if (exercisesContainer) {
        const exerciseElement = document.createElement("div");
        exerciseElement.textContent = `Name: ${name},
            Description: ${description} ,
            Calories Lost: ${calories_lost} ,
            Duration: ${duration}`;

        exercisesContainer.appendChild(exerciseElement);

        // Reset the input bars
        document.getElementById("exercise-name").value = "";
        document.getElementById("exercise-description").value = "";
        document.getElementById("exercise-calories_lost").value = "";
        document.getElementById("exercise-duration").value = "";

        }
    } catch (error) {
      console.error("Failed to add exercise:", error);
    } 
  });


