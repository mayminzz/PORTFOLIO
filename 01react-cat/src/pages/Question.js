import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import Russianblue from "../assets/cat/russianblue.jpg";
import Scottishfold from "../assets/cat/scottishfold.jpg";
import Siamese from '../assets/cat/siamese.jpg'
import Turkishangora from '../assets/cat/turkishangora.jpg'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;
const Cats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 100px 0;
`;
const Cat = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  console.log(totalScore);

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    console.log(newScore);
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      console.log(mbti);
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="success"
        now={(questionNo / QuestionData.length) * 100}
        style={{
          marginTop: 20,
        }}
      />
      <Title>{QuestionData[0].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          className="btn-warning"
          style={{
            width: "30%",
            height: "200px",
            fontSize: "20px",
          }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          className="btn-warning"
          style={{
            width: "30%",
            height: "200px",
            fontSize: "20px",
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
      <Cats>
        <Cat src={Russianblue} />
        <Cat src={Scottishfold} />
        <Cat src={Siamese} />
        <Cat src={Turkishangora} />
      </Cats>
    </Wrapper>
  );
};

export default Question;
