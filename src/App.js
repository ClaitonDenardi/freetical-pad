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

function App() {
  const [teams, setTeams] = useState({
    one: ["", "", ""],
    colorOne: 0,
    two: [],
    colorTwo: 1,
  });

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

  const removePlayer = () => {
    let aux = teams.one;
    if (aux.length > 0) {
      aux.pop();
      setTeams({ ...teams, one: aux });
    }
  };

  return (
    <>
      <Field
        teams={teams}
        colorOne={colors[teams.colorOne].hex}
        colorTwo={colors[teams.colorTwo].hex}
      />
      <SettingsBar
        teams={teams}
        addPlayer={() => addPlayer}
        removePlayer={() => removePlayer}
        colorOne={colors[teams.colorOne].name}
        colorTwo={colors[teams.colorTwo].name}
        next={() => nextColor}
        prev={() => prevColor}
      />
    </>
  );
}

export default App;
