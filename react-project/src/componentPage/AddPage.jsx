import React, { useState } from 'react';

export function AddPage({ projectId }) {
    const [formData, setFormData] = useState({
        description: '',
        status: '',
        person_assigned: '',
        due_date: '',
        estimated_duration: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3500/api/projects/:id/tasks/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to add task');
            }
            console.log('Task added successfully');
            // Optionally, you can reset the form after successful submission
            setFormData({
                description: '',
                status: '',
                person_assigned: '',
                due_date: '',
                estimated_duration: ''
            });
        } catch (error) {
            console.error('Error adding task:', error);
            // Handle error state or display error message to the user
        }
    };

    return (
        <div>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
                <label>
                    Status:
                    <input type="text" name="status" value={formData.status} onChange={handleChange} />
                </label>
                <label>
                    Person Assigned:
                    <input type="text" name="person_assigned" value={formData.person_assigned} onChange={handleChange} />
                </label>
                <label>
                    Due Date:
                    <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} />
                </label>
                <label>
                    Estimated Duration:
                    <input type="number" name="estimated_duration" value={formData.estimated_duration} onChange={handleChange} />
                </label>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

