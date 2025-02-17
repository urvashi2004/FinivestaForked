import React from "react";
import "../Resources.css"; // Ensure this path points to your CSS file

// Import game cover images
import HL from '../Images/Games/HigherLower/cover.png'; // Higher or Lower game cover
import FB from '../Images/Games/FinanceBingo/cover.png'; // Finance Bingo game cover 

const Games = () => {
  return (
    <div className="gamepage">
      <div className="header games">
        <h1>Games</h1>
        <p>Play Engaging Games and Test Your Skills!</p>
      </div>

      <div className="resourcesbox">
        {/* Higher or Lower Game Card */}
        <div className="boxsmall game">
          <a href="/resources/games/HigherLower/Home">
            <div className="img">
              <img src={HL} alt="Higher or Lower Game Cover" />
            </div>
            <div className="text">
              <h2>Higher or Lower</h2>
              <p className="game-byline-card">
                Can you guess if the next value is higher or lower?
              </p>
            </div>
          </a>
        </div>

        {/* Finance Bingo Game Card */}
        <div className="boxsmall game">
          <a href="/resources/games/FinanceBingo">
            <div className="img">
              <img src={FB} alt="Finance Bingo Game Cover" />
            </div>
            <div className="text">
              <h2>Finance Bingo</h2>
              <p className="game-byline-card">
                Test your financial knowledge and win BINGO!
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Games;