import React from "react";
import Draggable from "react-draggable";
import {
  Base,
  LeftAttack,
  LeftGoal,
  MiddleCircle,
  AdjustCenter,
  MiddleLine,
  RightAttack,
  RightGoal,
  Square,
  StyledPlayer,
  LeftLine,
  RightLine,
  LeftDefense,
  AdjustLeft,
  LeftCircle,
  RightDefense,
  RightCircle,
  AdjustRight,
  LeftArea,
  RightArea,
} from "./styles";

const Field = ({ teams, colorOne, colorTwo, theme }) => {
  const returnLines = () => {
    if (theme.name === "Basketball") {
      return (
        <Square>
          <AdjustLeft>
            <LeftDefense />
            <LeftLine />
            <LeftCircle />
          </AdjustLeft>
          <AdjustCenter>
            <MiddleLine />
            <MiddleCircle />
          </AdjustCenter>
          <AdjustRight>
            <RightDefense />
            <RightLine />
            <RightCircle />
          </AdjustRight>
        </Square>
      );
    } else if (theme.name === "Volleyball") {
      return (
        <Square>
          <LeftAttack />
          <AdjustCenter>
            <MiddleLine />
          </AdjustCenter>
          <RightAttack />
        </Square>
      );
    } else if (theme.name === "Futsal") {
      return (
        <Square>
          <LeftArea />
          <AdjustCenter>
            <MiddleLine />
            <MiddleCircle />
          </AdjustCenter>
          <RightArea />
        </Square>
      );
    } else {
      return (
        <Square>
          <LeftGoal />
          <AdjustCenter>
            <MiddleLine />
            <MiddleCircle />
          </AdjustCenter>
          <RightGoal />
        </Square>
      );
    }
  };

  return (
    <Base id="field" name="field" back={theme.hex}>
      {teams.one &&
        teams.one.map((p, index) => (
          <Draggable bounds="body" id={index} key={"t1" + index}>
            <StyledPlayer color={colorOne}>{index + 1}</StyledPlayer>
          </Draggable>
        ))}

      {teams.two &&
        teams.two.map((p, index) => (
          <Draggable bounds="body" id={index} key={"t2" + index}>
            <StyledPlayer color={colorTwo}>{index + 1}</StyledPlayer>
          </Draggable>
        ))}
      {returnLines()}
    </Base>
  );
};

export default Field;
