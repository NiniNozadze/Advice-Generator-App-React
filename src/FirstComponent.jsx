import React, { useState } from "react";
import styled from "styled-components";

const FirstComponent = () => {
  const [advice, setAdvice] = useState(null);
  const [adviceNumber, setAdviceNumber] = useState(117);

  const fetchRandomAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      setAdvice(data.slip.advice);
      setAdviceNumber(data.slip.id);
    } catch (error) {
      console.error("Error fetching random advice:", error.message);
    }
  };

  const handleGreenDivClick = () => {
    fetchRandomAdvice();
  };

  return (
    <>
      <MainDiv>
        <Advice>ADVICE #{adviceNumber}</Advice>
        <Article>
          {advice ||
            "It is easy to sit up and take notice, what's difficult is getting up and taking action."}
        </Article>
        <DividerImg src="./images/pattern-divider-mobile.svg" />
        <GreenDiv onClick={handleGreenDivClick}>
          <DiceImg src="/images/icon-dice.svg" />
        </GreenDiv>
      </MainDiv>
    </>
  );
};

const MainDiv = styled.div`
  width: 343px;
  height: 315px;
  border-radius: 10px;
  background: var(--Dark-Grayish-Blue, #313a48);
  box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
  margin-top: 120px;
  position: relative;
  @media (min-width: 1440px) {
    width: 540px;
    height: 355px;
    margin-top: 0px;
  }
`;
const Advice = styled.h2`
  color: var(--Neon-Green, #53ffaa);
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 3.457px;
  padding-top: 40px;
  @media (min-width: 1440px) {
    font-size: 13px;
    letter-spacing: 4.086px;
    padding-top: 48px;
  }
`;
const Article = styled.h1`
  color: var(--Light-Cyan, #cee3e9);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.257px;
  padding: 24px 24px 32px 24px;
  @media (min-width: 1440px) {
    font-size: 28px;
    letter-spacing: -0.3px;
    padding: 24px 48px 48px;
  }
`;
const DividerImg = styled.img`
  top: 76%;
  right: 7%;
  position: absolute;
  @media (min-width: 1440px) {
    width: 423px;
    top: 74%;
    right: 11%;
  }
`;
const GreenDiv = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  background: var(--Neon-Green, #53ffaa);
  position: absolute;
  top: 90%;
  right: 41%;
  @media (min-width: 1440px) {
    top: 90%;
    right: 44%;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 40px 0px #53ffaa;
  }
`;
const DiceImg = styled.img`
  position: absolute;
  top: 33%;
  right: 30%;
`;

export default FirstComponent;
