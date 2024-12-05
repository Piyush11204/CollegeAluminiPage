// Contribution.jsx
import React, { useState } from 'react';

const Contribution = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        contributionAmount: '',
        bankAccountName: '',
        bankAccountNumber: '',
        bankName: '',
        ifscCode: '',
        isBankingDetailsVisible: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const toggleBankingDetails = () => {
        setFormData((prevData) => ({
            ...prevData,
            isBankingDetailsVisible: !prevData.isBankingDetailsVisible,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, like sending the data to an API
        console.log(formData);
    };

    return (
        <div className="py-10 px-4 max-w-6xl mx-auto bg-[#f5f5f5]">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#3d52a0]">Contribution Page</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="number"
                        name="contributionAmount"
                        placeholder="Contribution Amount"
                        value={formData.contributionAmount}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mt-6">
                    <button
                        type="button"
                        onClick={toggleBankingDetails}
                        className="text-[#3d52a0] hover:underline"
                    >
                        {formData.isBankingDetailsVisible ? 'Hide Banking Details' : 'Add Banking Details'}
                    </button>
                </div>

                {formData.isBankingDetailsVisible && (
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold mb-4">Banking Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="bankAccountName"
                                placeholder="Account Holder Name"
                                value={formData.bankAccountName}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="bankAccountNumber"
                                placeholder="Account Number"
                                value={formData.bankAccountNumber}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="bankName"
                                placeholder="Bank Name"
                                value={formData.bankName}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="ifscCode"
                                placeholder="IFSC Code"
                                value={formData.ifscCode}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className="mt-6 w-full bg-[#3d52a0] text-white rounded py-2 transition-colors duration-300 hover:bg-[#7091e5]"
                >
                    Submit Contribution
                </button>
            </form>
        </div>
    );
};

export default Contribution;
