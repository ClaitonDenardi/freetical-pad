import { useState } from "react";

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

const useSettings = () => {
  const [theme, setTheme] = useState(0);
  const [teams, setTeams] = useState({
    one: ["", "", ""],
    colorOne: 0,
    two: [],
    colorTwo: 1,
  });

  function nextTheme() {
    if (theme < themes.length - 1) {
      setTheme(theme + 1);
    }
  };

  function prevTheme() {
    if (theme > 0) {
      setTheme(theme - 1);
    }
  };

  function nextColor(e) {
    let state = e.target.name;
    if (teams[state] < colors.length - 1) {
      setTeams({ ...teams, [state]: teams[state] + 1 });
    }
  };

  function prevColor(e) {
    let state = e.target.name;
    if (teams[state] > 0) {
      setTeams({ ...teams, [state]: teams[state] - 1 });
    }
  };

  function addPlayer(e) {
    let team = e.target.name;
    let aux = teams[team];
    if (aux.length < 11) {
      aux.push("");
      setTeams({ ...teams, [team]: aux });
    }
  };

  function removePlayer(e) {
    let team = e.target.name;
    let aux = teams[team];
    if (aux.length > 0) {
      aux.pop();
      setTeams({ ...teams, [team]: aux });
    }
  };

  return {
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
  }
}

export default useSettings;
