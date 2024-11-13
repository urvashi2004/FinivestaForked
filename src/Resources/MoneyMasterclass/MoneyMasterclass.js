import React from "react";
import "../Resources.css";

import Session1 from "../Images/moneymasterclass/Session1.png";
import Session2 from "../Images/moneymasterclass/Session2.jpg";

const MoneyMasterclass = () => {
  return (
    <div className="MoneyMasterclass">
      
      <div class="header moneymc">
        <h1>Money Masterclass</h1>
        <p>Unlocking essential financial knowledge and skills, one session at a time <br/>– an initiative by Finivesta</p>
      </div>

      <div className="resourcesbox">

        <div className="boxsmall">
          <a href="https://www.canva.com/design/DAGUqH5oZgY/0zHssdS1PHB0uE9wd8IgoA/view?utm_content=DAGUqH5oZgY&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noreferrer">
            <div className="landscape">
              <img src={Session1} alt="Cover" />
            </div>
            <div className="text">
              <h2>Session 1</h2>
              <p>Payroll System</p>
            </div>
          </a>
        </div>

        <div className="boxsmall">
          <a href="https://www.canva.com/design/DAGVk62xHNY/pu_yEeEqy-v_tTf3KWssDw/view?utm_content=DAGVk62xHNY&utm_campaign=designshare&utm_medium=link&utm_source=editor"  target="_blank" rel="noreferrer">
            <div className="landscape">
              <img src={Session2} alt="Cover" />
            </div>
            <div className="text">
              <h2>Session 2</h2>
              <p>The Economic Impact of Trump's Return</p>
            </div>
          </a>
        </div>

        </div>

    </div>
  );
};

export default MoneyMasterclass;
