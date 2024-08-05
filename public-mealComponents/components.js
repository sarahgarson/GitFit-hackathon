fetch("/api/components/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Manipulate the DOM to display the data
    const componentsContainer = document.getElementById("components-list");
    if (componentsContainer) {
      data.forEach((component) => {
        const componentElement = document.createElement("div");
        componentElement.textContent = `Name: ${component.name},
            Calories: ${component.calories} ,
            Protein: ${component.protein} ,
            Fat: ${component.fat},
            Sodium: ${component.sodium},
            Created By: ${component.created_by},
            Created At: ${component.created_at}`;

        componentsContainer.appendChild(componentElement);
      });
    }
  })
  .catch((error) => {
    console.error("Error fetching components:", error);
  });

document
  .getElementById("add-component")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    const name = document.getElementById("component-name").value;
    const calories = document.getElementById("component-calories").value;
    const protein = document.getElementById("component-protein").value;
    const fat = document.getElementById("component-fat").value;
    const sodium = document.getElementById("component-sodium").value;
    const created_by = document.getElementById("component-created_by").value;
    const created_at = document.getElementById("component-created_at").value;

    try {
      const response = await fetch("/api/components/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, calories, protein, sodium, created_by, created_at }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Exercise added:", data);

      // Manipulate the DOM to display the new exercise
      const componentsContainer = document.getElementById("components-list");
      if (componentsContainer) {
        const componentElement = document.createElement("div");
        componentElement.textContent = 
            `Name: ${name},
            Calories: ${calories} ,
            Protein: ${protein} ,
            Sodium: ${sodium},
            Created By: ${created_by},
            Created At: ${created_at}`;

        componentsContainer.appendChild(componentElement);

        // Reset the input bars
        document.getElementById("component-name").value = "";
        document.getElementById("component-calories").value = "";
        document.getElementById("component-protein").value = "";
        document.getElementById("component-sodium").value = "";
        document.getElementById("component-created_by").value = "";
        document.getElementById("component-created_at").value = "";
        }
    } catch (error) {
      console.error("Failed to add component:", error);
    } 
  });



