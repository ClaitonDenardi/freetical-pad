import React from "react";
import { Bar, Button, Commands, Container, Data, Section, Title } from "./styles";

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
