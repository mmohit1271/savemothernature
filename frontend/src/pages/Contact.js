import React, { useState } from "react";
import "./Donate.css";

function Donate() {
    const [amount, setAmount] = useState("");

    const handleDonationChange = (e) => {
        setAmount(e.target.value);
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        // Handle donation submission (send data to backend)
        console.log(`Donation Amount: $${amount}`);
    };

    return (
        <div className="donate">
            <h1>Donate to Save Mother Nature</h1>
            <p>Your contribution helps us protect the environment and promote sustainable practices.</p>
            <form onSubmit={handleDonationSubmit}>
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
