import styled from "styled-components";

export const Bar = styled.div`
  background: #202225;
  height: 25vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  border: 2px solid #36393f;
  border-radius: 10px;
  padding: 2px 10px 10px 10px;
  border-radius: 10px;
`;

export const Commands = styled.div`
  display: flex;
`;

export const Section = styled.span`
  color: #cec5c5;
  font-weight: bold;
`;

export const Title = styled.span`
  color: #fff;
  margin-top 3px;
`;

export const Data = styled.span`
  color: #fff;
  margin: 4px 8px;
`;

export const Button = styled.button`
  color: #3ba55d;
  background: #36393f;
  border: none;
  border-radius: 100%;
  width: 30px;
  height: 30px;

  :hover {
    border-radius: 20%;
  }
`;
