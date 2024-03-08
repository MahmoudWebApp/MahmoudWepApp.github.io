
import React from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

const App: React.FC = () => {
    return (
        <div>
            <h1>Message DApp</h1>
            <MessageForm />
            <MessageDisplay />
        </div>
    );
};

export default App;
