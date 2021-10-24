import React from "react";
import Player from "./Player";



function PlayerList (props) {
  console.log("props at PlayerList is", props.parsedPlayerData);
  const parsedPlayers = props.parsedPlayerData.map(player => <Player key={player.gameTag} {...player} />);
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
    {parsedPlayers}
  </section>
  )
}

export default PlayerList;