import './App.css';
import Header from './Component/Header/Header';
import Admin from './Component/Admin/Admin';
import Add from './Component/Add/Add';
import ViewDetail from './Component/ViewDetail/ViewDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewListContainer from './Component/ViewList/ViewListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Admin/>}/>
          <Route path="/compounds" element={<ViewListContainer/>}/>
          <Route path="/compounds/:index" element={<ViewDetail/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
