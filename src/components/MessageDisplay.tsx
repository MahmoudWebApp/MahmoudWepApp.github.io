import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../abi.json'
import { contractAddress } from '../contractAddress';

const MessageDisplay: React.FC = () => {
    const [savedMessage, setSavedMessage] = useState('');
    useEffect(() => {
        const fetchMessage = async () => {
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const contract = new ethers.Contract(contractAddress, abi, provider);
                try {
                     const message = await contract.getMessage() ;
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
