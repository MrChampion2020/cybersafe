

import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [passwords, setPasswords] = useState([]);
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [customWords, setCustomWords] = useState('');

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    const generateRandomCharacter = (characters) => {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return characters[array[0] % characters.length];
    };

    const shuffleString = (str) => {
        return str
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('');
    };

    const generatePasswords = () => {
        let characters = '';
        if (includeUppercase) characters += uppercase;
        if (includeLowercase) characters += lowercase;
        if (includeNumbers) characters += numbers;
        if (includeSpecialChars) characters += specialCharacters;

        if (characters === '' && !customWords.trim()) {
            alert('Please select at least one character type or provide custom words!');
            return;
        }

        const generatedPasswords = [];
        for (let i = 0; i < 5; i++) {
            let base = customWords.trim() ? shuffleString(customWords) : '';
            while (base.length < length) {
                base += generateRandomCharacter(characters);
            }
            generatedPasswords.push(shuffleString(base.slice(0, length)));
        }
        setPasswords(generatedPasswords);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            maxWidth: '500px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
            gap: '10px',
        }}>
            <h2>Password Generator</h2>

            <div style={{ width: '100%' }}>
                <label>Password Length: {length}</label>
                <input type="range" min="8" max="20" value={length} onChange={(e) => setLength(Number(e.target.value))}
                    style={{ width: '100%', cursor: 'pointer' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <label>
                    <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
                    Include Uppercase
                </label>
                <label>
                    <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
                    Include Lowercase
                </label>
                <label>
                    <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
                    Include Numbers
                </label>
                <label>
                    <input type="checkbox" checked={includeSpecialChars} onChange={() => setIncludeSpecialChars(!includeSpecialChars)} />
                    Include Special Characters
                </label>
            </div>

            <div style={{ width: '100%', marginBottom: '10px' }}>
                <label>Custom Words/Phrase:</label>
                <input
                    type="text"
                    placeholder="Enter words or phrase"
                    value={customWords}
                    onChange={(e) => setCustomWords(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '8px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                    }}
                />
            </div>

            <button onClick={generatePasswords} style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>Generate Passwords</button>

            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '10px',
            }}>
                {passwords.length > 0
                    ? passwords.map((pwd, index) => (
                        <div key={index} style={{
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            backgroundColor: '#fff',
                            textAlign: 'center',
                            wordBreak: 'break-word',
                        }}>
                            {pwd}
                        </div>
                    ))
                    : <div style={{
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                    }}>Your passwords will appear here</div>}
            </div>
        </div>
    );
};

export default PasswordGenerator;
