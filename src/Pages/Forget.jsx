import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Forget = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location.state?.email || '');

    const handleReset = () => {
        window.open('https://mail.google.com', '_blank');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="p-6 rounded-lg bg-white shadow-lg w-full max-w-md">
                <h2 className="text-center mb-6 text-2xl font-semibold text-gray-800">Forget Password</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!email) {
                            alert('Email is required');
                            return;
                        }
                        handleReset();
                    }}
                >
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="btn btn-primary w-full"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Forget;