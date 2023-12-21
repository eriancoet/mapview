import React, { useState } from 'react';
import './styles/Survey.css';
import './styles/Home.css';

function SurveyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        ageGroup: '',
        feedback: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Here you can handle the form submission, like sending data to a server
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Survey Form</h1>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Age Group:</label>
                <select name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
                    <option value="">Select Age Group</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46+">46+</option>
                </select>
            </div>
            <div>
                <label htmlFor="feedback">Feedback:</label>
                <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit">Submit Survey</button>
        </form>
    );
}

export default SurveyForm;
