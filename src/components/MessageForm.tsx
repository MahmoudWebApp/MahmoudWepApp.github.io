
import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from '../abi.json'
import { contractAddress } from '../contractAddress';

const MessageForm: React.FC = () => {
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer)
            try {
                await contract.setMessage(message);
                setMessage('')
                console.log('Message saved successfully!');
            } catch (error) {
                console.error('Error saving message:', error);
            }
        }
    };

    return (
        <div className='form-message'>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Save Message</button>
        </div>
    );
};

export default MessageForm;

declare global {
    interface Window {
        ethereum?: any;
    }
}