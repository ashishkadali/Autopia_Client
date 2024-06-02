
import './App.scss';
import LeftMenu from './components/LeftMenu';
import Routers from './components/Routes';
import Logo  from './images/logo.jpg';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="mainApp">
      {/* header sections starts */}
      <div className="header-nav justify-content-between align-items-center d-flex p-2">
        <div className="logo">
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="logo-text">
          <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      {/* header sections end */}
      {/* body sections starts */}
      <div className="body-layout d-flex">
        <>
          <Routers/>
        </>        

      </div>

      {/* body sections end */}
    </div>
  );
}

export default App;
