import React, { useState } from "react";
import axios from 'axios';
import "./Donate.css";

function Donate() {
    const [amount, setAmount] = useState("");
    const [donorName, setDonorName] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleDonationChange = (e) => {
        setAmount(e.target.value);
    };

    const handleNameChange = (e) => {
        setDonorName(e.target.value);
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        
        // Example API call to submit the donation
        axios.post('http://localhost:8080/api/donations', {
            donorName: donorName,
            amount: amount,
        })
        .then(response => {
            console.log('Donation Successful', response.data);
            setIsSuccess(true); // Update state on successful donation
        })
        .catch(error => {
            console.error('There was an error submitting the donation!', error);
            setIsSuccess(false); // Update state on error
        });
    };

    return (
        <div className="donate">
            <h1>Donate to Save Mother Nature</h1>
            <p>Your contribution helps us protect the environment and promote sustainable practices.</p>
            {isSuccess && <p>Thank you for your generous donation!</p>}
            <form onSubmit={handleDonationSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="donorName"
                    value={donorName}
                    onChange={handleNameChange}
                    required
                />
                <label>Enter Donation Amount:</label>
                <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleDonationChange}
                    min="1"
                    required
                />
                <button type="submit">Donate Now</button>
            </form>
        </div>
    );
}

export default Donate;
