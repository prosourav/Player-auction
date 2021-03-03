import Header from "./components/Header/Header";
import PlayerList from "./components/PlayerList/PlayerList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <PlayerList></PlayerList>
    </div>
  );
}

export default App;
