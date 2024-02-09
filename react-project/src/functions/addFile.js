const addFile = async (itemData) => {
    try {
      const response = await fetch('http://localhost:3500/api/projects/:id/tasks/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });
      const result = await response.json();
      console.log(result); // Process the response as needed
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  