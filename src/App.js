import logo from './logo.svg';
import './App.css';
import Match from './components/Match';
import MatchList from './components/MatchList';
import Player from './components/Player';
import PlayerList from './components/PlayerList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { addWinsToPlayers, preparePlayerData } from './helpers/playerHelper'

function App() {

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  //const onePlayer = parsedPlayerData[0];
  //const oneMatch = matchData[0];

  


  return (
    <div className="App">
       <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
    <PlayerList parsedPlayerData={parsedPlayerData}/>
    <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
