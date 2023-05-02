import React from "react";
import Field from "./components/Field";
import SettingsBar from "./components/SettingsBar";
import useSettings from "./hooks/useSettings";

function App() {

  const {
    teams,
    colors,
    themes,
    theme,
    nextTheme,
    prevTheme,
    nextColor,
    prevColor,
    addPlayer,
    removePlayer
  } = useSettings();

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
