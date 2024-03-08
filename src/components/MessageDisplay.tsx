
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const MessageDisplay: React.FC = () => {
    const [savedMessage, setSavedMessage] = useState('');
    const contractAddress = 'YOUR_CONTRACT_ADDRESS'; 

    useEffect(() => {
        const fetchMessage = async () => {
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const contract = new ethers.Contract(contractAddress, ['function getMessage()'], provider);

                try {
                    const message = await contract.getMessage();
                    setSavedMessage(message);
                } catch (error) {
                    console.error('Error fetching message:', error);
                }
            }
        };

        fetchMessage();
    }, []);

    return <div>Saved Message: {savedMessage}</div>;
};

export default MessageDisplay;
