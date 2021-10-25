import { useState } from "react";
import Field from "./components/Field";
import SettingsBar from "./components/SettingsBar";

const colors = [
  { name: "Red", hex: "#f03535" },
  { name: "Blue", hex: "#354bf0" },
  { name: "Orange", hex: "#f08635" },
  { name: "Acqua", hex: "#40c98e" },
  { name: "Purple", hex: "#7240c9" },
  { name: "Pink", hex: "#c940be" },
];

const themes = [
  { name: "Soccer", hex: "#91ce56" },
  { name: "Futsal", hex: "#0099cc" },
  { name: "Volleyball", hex: "#e68064" },
  { name: "Basketball", hex: "#ca4c08" },
];

function App() {
  const [theme, setTheme] = useState(0);
  const [teams, setTeams] = useState({
    one: ["", "", ""],
    colorOne: 0,
    two: [],
    colorTwo: 1,
  });

  const nextTheme = () => {
    if (theme < themes.length - 1) {
      setTheme(theme + 1);
    }
  };

  const prevTheme = () => {
    if (theme > 0) {
      setTheme(theme - 1);
    }
  };

  const nextColor = (e) => {
    let state = e.target.name;
    if (teams[state] < colors.length - 1) {
      setTeams({ ...teams, [state]: teams[state] + 1 });
    }
  };

  const prevColor = (e) => {
    let state = e.target.name;
    if (teams[state] > 0) {
      setTeams({ ...teams, [state]: teams[state] - 1 });
    }
  };

  const addPlayer = (e) => {
    let team = e.target.name;
    let aux = teams[team];
    if (aux.length < 11) {
      aux.push("");
      setTeams({ ...teams, [team]: aux });
    }
  };

  const removePlayer = (e) => {
    let team = e.target.name;
    let aux = teams[team];
    if (aux.length > 0) {
      aux.pop();
      setTeams({ ...teams, [team]: aux });
    }
  };

  return (
    <>
      <Field
        teams={teams}
        colorOne={colors[teams.colorOne].hex}
        colorTwo={colors[teams.colorTwo].hex}
        theme={themes[theme]}
      />
      <SettingsBar
        teams={teams}
        addPlayer={() => addPlayer}
        removePlayer={() => removePlayer}
        colorOne={colors[teams.colorOne].name}
        colorTwo={colors[teams.colorTwo].name}
        next={() => nextColor}
        prev={() => prevColor}
        theme={themes[theme].name}
        nextTheme={() => nextTheme}
        prevTheme={() => prevTheme}
      />
    </>
  );
}

export default App;
