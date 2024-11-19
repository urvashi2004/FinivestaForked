import React, { useEffect, useState, useRef } from 'react';
import "./Scramble.css";

const Scramble = () => {
    const words = [
        { word: "LOAN", hint: "Often used for things like buying a car, home, or funding education" },
        { word: "BANK", hint: "A place where people deposit their money" },
        { word: "CASH", hint: "Physical form of money" },
        { word: "STOCK", hint: "Represents a share in a company" },
        { word: "BUDGET", hint: "A plan for managing expenses" },
        { word: "INVEST", hint: "To put money into assets for future returns" },
        { word: "TAX", hint: "A mandatory contribution to the government" },
        { word: "SAVINGS", hint: "Money set aside for future use" },
        { word: "INTEREST", hint: "The cost of borrowing money" },
        { word: "INFLATION", hint: "The rise in general price levels" }
    ];

    const [currentWord, setCurrentWord] = useState({});
    const [scrambledWord, setScrambledWord] = useState("");
    const [input, setInput] = useState("");
    const [score, setScore] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        startGame();
        return () => clearInterval(timerRef.current); // Cleanup timer on component unmount
    }, []);

    const startGame = () => {
        setTimeElapsed(0); // Reset the timer
        setNewWord();
        startTimer();
    };

    const startTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current); // Clear any existing timer
        }
        timerRef.current = setInterval(() => {
            setTimeElapsed(prevTime => prevTime + 1);
        }, 1000);
    };

    const setNewWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex].word;
        const hint = words[randomIndex].hint;
        setCurrentWord({ word, hint });
        setScrambledWord(scrambleWord(word));
        setInput("");
    };

    const scrambleWord = (word) => {
        const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
        return scrambled;
    };

    const handleInputChange = (e) => {
        setInput(e.target.value.toUpperCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === currentWord.word) {
            setScore(prevScore => prevScore + 1);
            showCorrectMessage();
            setNewWord();
        } else {
            showWrongMessage();
        }
    };

    const showCorrectMessage = () => {
        const correctMessage = document.getElementById("correct-message");
        if (correctMessage) {
            correctMessage.style.display = "flex";
            setTimeout(() => {
                correctMessage.style.display = "none";
            }, 2000);
        }
    };

    const showWrongMessage = () => {
        const wrongMessage = document.getElementById("wrong-message");
        if (wrongMessage) {
            wrongMessage.style.display = "flex";
            setTimeout(() => {
                wrongMessage.style.display = "none";
            }, 2000);
        }
    };

    return (
        <div className="scramble-game">
            <h1>Scramble Game</h1>
            <div id="timer">{timeElapsed}s</div>
            <div id="correct-message" style={{ display: 'none' }}>Correct!</div>
            <div id="wrong-message" style={{ display: 'none' }}>Wrong!</div>
            <div className="scramble-word">
                <p>Hint: {currentWord.hint}</p>
                <p>{scrambledWord}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Unscramble the word"
                />
                <button type="submit">Submit</button>
            </form>
            <div className="score">Score: {score}</div>
        </div>
    );
};

export default Scramble;