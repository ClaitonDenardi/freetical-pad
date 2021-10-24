import Draggable from "react-draggable";
import styled from "styled-components";

const StyledPlayer = styled.div`
  border: 2px solid #fff;
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
`;

const Field = ({ teams, colorOne, colorTwo }) => {
  return (
    <div
      id="field"
      name="field"
      style={{
        background: "#63ca00",
        height: "75vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
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
    </div>
  );
};

export default Field;
