fetch('/api/mealComponents/all')
    .then(response => response.json())
    .then(data => {
        const componentsContainer = document.getElementById('components-list');
        if (componentsContainer) {
            data.forEach(component => {
                const componentElement = document.createElement('div');
                componentElement.textContent = `${component.name}: ${component.description}`;
                componentsContainer.appendChild(componentElement);
            });
        }
    })
    .catch(error => console.error('Error fetching meal components:', error));

  
    document
  .getElementById("add-quantity")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    const quantity = document.getElementById("quantity").value;

    try {
    
      const response = await fetch("/api/meal_components/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Meal component added:", data);

      // Displaying the newly added component in the list
      const componentsList = document.getElementById("components-list");
      const componentElement = document.createElement("div");
      componentElement.textContent = `Quantity: ${data.quantity}`;
      componentsList.appendChild(componentElement);

    } catch (error) {
      console.error("Failed to add meal component:", error);
    }
  });
