fetch('/')
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
