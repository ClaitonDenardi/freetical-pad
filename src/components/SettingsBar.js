import styled from "styled-components";

const Bar = styled.div`
  background: #202225;
  height: 25vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.div`
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

const Commands = styled.div`
  display: flex;
`;

const Section = styled.span`
  color: #cec5c5;
  font-weight: bold;
`;

const Title = styled.span`
  color: #fff;
  margin-top 3px;
`;

const Data = styled.span`
  color: #fff;
  margin: 4px 8px;
`;

const Button = styled.button`
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

const SettingsBar = ({
  teams,
  addPlayer,
  removePlayer,
  colorOne,
  colorTwo,
  next,
  prev,
  theme,
  nextTheme,
  prevTheme,
}) => {
  return (
    <Bar>
      <Container>
        <Section>Team One</Section>
        <Title>Players</Title>
        <Commands>
          <Button name="one" onClick={removePlayer()}>
            -
          </Button>
          <Data>{teams.one.length}</Data>
          <Button name="one" onClick={addPlayer()}>
            +
          </Button>
        </Commands>

        <Title>Color</Title>
        <Commands>
          <Button name="colorOne" onClick={prev()}>
            {"<"}
          </Button>
          <Data>{colorOne}</Data>
          <Button name="colorOne" onClick={next()}>
            {">"}
          </Button>
        </Commands>
      </Container>

      <Container>
        <Section>Team Two</Section>
        <Title>Players</Title>
        <Commands>
          <Button name="two" onClick={removePlayer()}>
            -
          </Button>
          <Data>{teams.two.length}</Data>
          <Button name="two" onClick={addPlayer()}>
            +
          </Button>
        </Commands>

        <Title>Color</Title>
        <Commands>
          <Button name="colorTwo" onClick={prev()}>
            {"<"}
          </Button>
          <Data>{colorTwo}</Data>
          <Button name="colorTwo" onClick={next()}>
            {">"}
          </Button>
        </Commands>
      </Container>

      <Container>
        <Section>More</Section>
        <Title>Theme</Title>
        <Commands>
          <Button onClick={prevTheme()}>{"<"}</Button>
          <Data>{theme}</Data>
          <Button onClick={nextTheme()}>{">"}</Button>
        </Commands>
        <Title>Source code</Title>
        <Commands>
          <Button
            onClick={() =>
              window.open(
                "https://github.com/ClaitonDenardi/react-tatical-pad",
                "_blank"
              )
            }
          >
            {">"}
          </Button>
        </Commands>
      </Container>
    </Bar>
  );
};

export default SettingsBar;
