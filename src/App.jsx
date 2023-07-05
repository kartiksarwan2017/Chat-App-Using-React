import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import './App.css';
  

function App() {

  return ( 
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
