import styled from "styled-components";

export const Base = styled.div`
  height: 75vh;
  width: 100vw;
  overflow: hidden;
  background: ${({ back }) => (back ? back : "#91ce56")};
`;

export const StyledPlayer = styled.div`
  border: 0.5vh solid #fff;
  color: #fff;
  background: ${({ color }) => (color ? color : "#000")};
  height: 50px;
  width: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  position: absolute;
  z-index: 999;
`;

export const Square = styled.div`
  border: 2vh solid white;
  width: 75vw;
  margin-left: 12.5vw;
  height: 65vh;
  margin-top: 1.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftGoal = styled.div`
  border: 2vh solid white;
  border-left: none;
  width: 20vh;
  height: 40vh;
`;

export const RightGoal = styled.div`
  border: 2vh solid white;
  border-right: none;
  width: 20vh;
  height: 40vh;
`;

export const LeftArea = styled.div`
  border: 2vh solid white;
  border-left: none;
  width: 30vh;
  height: 40vh;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
`;

export const RightArea = styled.div`
  border: 2vh solid white;
  border-right: none;
  width: 30vh;
  height: 40vh;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
`;

export const AdjustCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdjustLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const AdjustRight = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const MiddleLine = styled.div`
  border: 1vh solid white;
  width: 0;
  height: 65vh;
`;

export const MiddleCircle = styled.div`
  border-radius: 100%;
  border: 2vh solid white;
  width: 20vh;
  height: 20vh;
  position: absolute;
`;

export const LeftAttack = styled.div`
  border: 1vh solid white;
  border-left: none;
  width: 50vh;
  height: 65vh;
`;

export const RightAttack = styled.div`
  border: 1vh solid white;
  border-right: none;
  width: 50vh;
  height: 65vh;
`;

export const LeftLine = styled.div`
  border: 2vh solid white;
  border-left: none;
  width: 40vh;
  height: 50vh;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
`;

export const LeftDefense = styled.div`
  border: 2vh solid white;
  border-left: none;
  width: 30vh;
  height: 20vh;
  position: absolute;
`;

export const LeftCircle = styled.div`
  border-radius: 100%;
  border: 2vh solid white;
  width: 20vh;
  height: 20vh;
  margin-left: 18vh;
  position: absolute;
`;

export const RightLine = styled.div`
  border: 2vh solid white;
  border-right: none;
  width: 40vh;
  height: 50vh;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
`;

export const RightDefense = styled.div`
  border: 2vh solid white;
  border-right: none;
  width: 30vh;
  height: 20vh;
  position: absolute;
`;

export const RightCircle = styled.div`
  border-radius: 100%;
  border: 2vh solid white;
  width: 20vh;
  height: 20vh;
  margin-right: 18vh;
  position: absolute;
`;
