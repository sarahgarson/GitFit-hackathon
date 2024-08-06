fetch("/api/components/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

        data.sort((a, b) => a.id - b.id);


    // Manipulate the DOM to display the data
    const componentsContainer = document.getElementById("components-list");
    if (componentsContainer) {
      data.forEach((component) => {
        const componentElement = document.createElement("div");
        componentElement.textContent = 
            `Component ID: ${component.id},
            Name: ${component.name},
            Calories: ${component.calories} ,
            Protein: ${component.protein} ,
            Fat: ${component.fat},
            Sodium: ${component.sodium},
            Created By: ${component.created_by},
            Created At: ${component.created_at}
            Updated At: ${component.updated_at}`;

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
    const id = document.getElementById("component-id").value;
    const name = document.getElementById("component-name").value;
    const calories = document.getElementById("component-calories").value;
    const protein = document.getElementById("component-protein").value;
    const fat = document.getElementById("component-fat").value;
    const sodium = document.getElementById("component-sodium").value;
    const created_by = document.getElementById("component-created_by").value;
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();

    try {
      const response = await fetch("/api/components/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, calories, protein, sodium, created_by, created_at }),
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
            `Component ID: ${id},
            Name: ${name},
            Calories: ${calories} ,
            Protein: ${protein} ,
            fat: ${fat},
            Sodium: ${sodium},
            Created By: ${created_by},
            Created At: ${created_at},
            Updated At: ${updated_at}`;

        componentsContainer.appendChild(componentElement);

        // Reset the input bars
        document.getElementById("component-id").value = "";
        document.getElementById("component-name").value = "";
        document.getElementById("component-calories").value = "";
        document.getElementById("component-protein").value = "";
        document.getElementById("component-sodium").value = "";
        document.getElementById("component-created_by").value = "";
        document.getElementById("component-created_at").value = "";
        document.getElementById("component-updated_at").value = "";

        loadComponents();
        }
    } catch (error) {
      console.error("Failed to add component:", error);
    } 
  });
  /*updating component */
  document.getElementById("update-component").addEventListener("click", async (event) => {
    event.preventDefault();
    const id = document.getElementById("component-id").value;
    const name = document.getElementById("component-name").value;
    const calories = document.getElementById("component-calories").value;
    const protein = document.getElementById("component-protein").value;
    const fat = document.getElementById("component-fat").value;
    const sodium = document.getElementById("component-sodium").value;
    const created_by = document.getElementById("component-created_by").value;
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();
  
    try {
      const response = await fetch("/api/components/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, calories, protein, fat, sodium, created_by, created_at, updated_at }),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log("Component updated:", data);
  
      // Manipulate the DOM to display the updated component list
      const componentsContainer = document.getElementById("components-list");
      if (componentsContainer) {
        // Clear the existing component list
        componentsContainer.innerHTML = "";
  
        // Fetch the updated component list
        const updatedComponentsResponse = await fetch("/api/components/all");
        const updatedComponentsData = await updatedComponentsResponse.json();
  
        // Display the updated component list
        updatedComponentsData.forEach((component) => {
          const componentElement = document.createElement("div");
          componentElement.textContent = 
            `Component ID: ${component.id},
            Name: ${component.name},
            Calories: ${component.calories} ,
            Protein: ${component.protein} ,
            Fat: ${component.fat},
            Sodium: ${component.sodium},
            Created By: ${component.created_by},
            Created At: ${component.created_at},
            Updated At: ${component.updated_at}`;
  
          componentsContainer.appendChild(componentElement);
        });
  
        // Reset the input bars
        document.getElementById("component-id").value = "";
        document.getElementById("component-name").value = "";
        document.getElementById("component-calories").value = "";
        document.getElementById("component-protein").value = "";
        document.getElementById("component-fat").value = "";
        document.getElementById("component-sodium").value = "";
        document.getElementById("component-created_by").value = "";
        document.getElementById("component-created_at").value = "";
        document.getElementById("component-updated_at").value = "";

        loadComponents();
      }
    } catch (error) {
      console.error("Failed to update component:", error);
    }
  });
  
  /* Deleting component */
  
  document.getElementById("delete-component").addEventListener("click", async (event) => {
    event.preventDefault();
    const id = document.getElementById("component-id").value;
  
    try {
      const response = await fetch("/api/components/delete", {
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
      console.log("Component deleted:", data);
  
      // Manipulate the DOM to display the updated component list
      const componentsContainer = document.getElementById("components-list");
      if (componentsContainer) {
        // Clear the existing exercise list
        componentsContainer.innerHTML = "";
  
        // Fetch the updated exercise list
        const updatedComponentsResponse = await fetch("/api/components/all");
        const updatedComponentsData = await updatedComponentsResponse.json();
  
        // Display the updated exercise list
        updatedComponentsData.forEach((component) => {
          const componentElement = document.createElement("div");
          componentElement.textContent = 
            `Component ID: ${component.id},
            Name: ${component.name},
            Calories: ${component.calories} ,
            Protein: ${component.protein} ,
            Fat: ${component.fat},
            Sodium: ${component.sodium},
            Created By: ${component.created_by},
            Created At: ${component.created_at},
            Updated At: ${component.updated_at}`;
  
          componentsContainer.appendChild(componentElement);
        });
  
        // Reset the input bars
        document.getElementById("component-id").value = "";
        document.getElementById("component-name").value = "";
        document.getElementById("component-calories").value = "";
        document.getElementById("component-protein").value = "";
        document.getElementById("component-fat").value = "";
        document.getElementById("component-sodium").value = "";
        document.getElementById("component-created_by").value = "";
        document.getElementById("component-created_at").value = "";
        document.getElementById("component-updated_at").value = "";

        loadComponents();
      }
    } catch (error) {
      console.error("Failed to delete component:", error);
    }
  });

function loadComponents() {
fetch("/api/components/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Manipulate the DOM to display the data
    const componentsContainer = document.getElementById("components-list");
    if (componentsContainer) {
      // Clear the existing component list
      componentsContainer.innerHTML = "";

      // Display the updated component list
      data.forEach((component) => {
        const componentElement = document.createElement("div");
        componentElement.textContent = 
          `Component ID: ${component.id},
          Name: ${component.name},
          Calories: ${component.calories} ,
          Protein: ${component.protein} ,
          Fat: ${component.fat},
          Sodium: ${component.sodium},
          Created By: ${component.created_by},
          Created At: ${component.created_at},
          Updated At: ${component.updated_at}`;

        componentsContainer.appendChild(componentElement);
      });
    }
  })
  .catch((error) => {
    console.error("Error fetching components:", error);
  });
}

