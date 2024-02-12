import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AddedPage } from './AddedPage';

export function AddPage() {
    const location = useLocation();
    const { tasks } = location.state || {};

    const navigate = useNavigate();

    

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
    
    console.log(tasks)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:3500/api/projects/${projectid}/tasks/add`
            const response = await fetch(url, {
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
                <button onClick={() => navigate('/tasks_M', { state: { tasks: tasks } })}>Submit</button>
            </form>
        </div>
    );
}

