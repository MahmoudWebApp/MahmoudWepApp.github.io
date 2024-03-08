declare global {
    interface Window {
        ethereum?: any;
    }
}
import React, { useState } from 'react';
import { ethers } from 'ethers';

const MessageForm: React.FC = () => {
    const [message, setMessage] = useState('');
    const contractAddress = 'YOUR_CONTRACT_ADDRESS'; 

    const sendMessage = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ['function setMessage(string)'], signer);

            try {
                await contract.setMessage(message);
                console.log('Message saved successfully!');
            } catch (error) {
                console.error('Error saving message:', error);
            }
        }
    };

    return (
        <div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Save Message</button>
        </div>
    );
};

export default MessageForm;
