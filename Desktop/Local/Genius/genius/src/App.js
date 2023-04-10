import {
  Route,
  Routes
} from "react-router-dom";

import MainMenu from "./components/MainMenu/MainMenu";
import Artists from "./components/Artists/Artists";
import Tracks from "./components/Tracks/Tracks";
import PageArtist from "./components/PageArtist/PageArtist";
import PageTrack from "./components/PageTrack/PageTrack";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainMenu />} />
        <Route path="artists" element={<Artists />} />
        <Route path="tracks" element={<Tracks />} />
        <Route path="artist/:id" element={<PageArtist />} />
        <Route path="track/:id" element={<PageTrack />} />\
        <Route  element={<MainMenu />} />
      </Routes>
    </div>
  );
}

export default App;
