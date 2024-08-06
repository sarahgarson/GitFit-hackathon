fetch("/api/exercises/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Manipulate the DOM to display the data
    const exercisesContainer = document.getElementById("exercises-list");
    if (exercisesContainer) {
      data.forEach((exercise) => {
        const exerciseElement = document.createElement("div");
        exerciseElement.textContent = 
           `Exercise ID: ${exercise.id},
            Name: ${exercise.name},
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
    const id = document.getElementById("exercise-id").value;
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
        body: JSON.stringify({id, name, description, calories_lost, duration }),
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
        exerciseElement.textContent = 
           `Exercise ID: ${id},
            Name: ${name},
            Description: ${description} ,
            Calories Lost: ${calories_lost} ,
            Duration: ${duration}`;

        exercisesContainer.appendChild(exerciseElement);

        // Reset the input bars
        document.getElementById("exercise-id").value = "";
        document.getElementById("exercise-name").value = "";
        document.getElementById("exercise-description").value = "";
        document.getElementById("exercise-calories_lost").value = "";
        document.getElementById("exercise-duration").value = "";

        }
    } catch (error) {
      console.error("Failed to add exercise:", error);
    } 
  });


/* write code necessary to update the exercise */

document.getElementById("update-exercise").addEventListener("click", async (event) => {
  event.preventDefault();
  const id = document.getElementById("exercise-id").value;
  const name = document.getElementById("exercise-name").value;
  const description = document.getElementById("exercise-description").value;
  const calories_lost = document.getElementById("exercise-calories_lost").value;
  const duration = document.getElementById("exercise-duration").value;

  try {
    const response = await fetch("/api/exercises/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, description, calories_lost, duration }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Exercise updated:", data);

    // Manipulate the DOM to display the updated exercise
    const exercisesContainer = document.getElementById("exercises-list");
    if (exercisesContainer) {
      // Clear the existing exercise list
      exercisesContainer.innerHTML = "";

      // Fetch the updated exercise list
      const updatedExercisesResponse = await fetch("/api/exercises/all");
      const updatedExercisesData = await updatedExercisesResponse.json();

      // Display the updated exercise list
      updatedExercisesData.forEach((exercise) => {
        const exerciseElement = document.createElement("div");
        exerciseElement.textContent = 
          `Exercise ID: ${exercise.id},
          Name: ${exercise.name},
          Description: ${exercise.description} ,
          Calories Lost: ${exercise.calories_lost} ,
          Duration: ${exercise.duration.hours}`;

        exercisesContainer.appendChild(exerciseElement);
      });

      // Reset the input bars
      document.getElementById("exercise-id").value = "";
      document.getElementById("exercise-name").value = "";
      document.getElementById("exercise-description").value = "";
      document.getElementById("exercise-calories_lost").value = "";
      document.getElementById("exercise-duration").value = "";
    }
  } catch (error) {
    console.error("Failed to update exercise:", error);
  }
});

/* write code necessary to delete the exercise */

document.getElementById("delete-exercise").addEventListener("click", async (event) => {
  event.preventDefault();
  const id = document.getElementById("exercise-id").value;

  try {
    const response = await fetch("/api/exercises/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Exercise deleted:", data);

    // Manipulate the DOM to display the updated exercise list
    const exercisesContainer = document.getElementById("exercises-list");
    if (exercisesContainer) {
      // Clear the existing exercise list
      exercisesContainer.innerHTML = "";

      // Fetch the updated exercise list
      const updatedExercisesResponse = await fetch("/api/exercises/all");
      const updatedExercisesData = await updatedExercisesResponse.json();

      // Display the updated exercise list
      updatedExercisesData.forEach((exercise) => {
        const exerciseElement = document.createElement("div");
        exerciseElement.textContent = 
          `Exercise ID: ${exercise.id},
          Name: ${exercise.name},
          Description: ${exercise.description} ,
          Calories Lost: ${exercise.calories_lost} ,
          Duration: ${exercise.duration.hours}`;

        exercisesContainer.appendChild(exerciseElement);
      });

      // Reset the input bars
      document.getElementById("exercise-id").value = "";
      document.getElementById("exercise-name").value = "";
      document.getElementById("exercise-description").value = "";
      document.getElementById("exercise-calories_lost").value = "";
      document.getElementById("exercise-duration").value = "";
    }
  } catch (error) {
    console.error("Failed to delete exercise:", error);
  }
});