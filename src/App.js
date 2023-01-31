import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Main from './component/Main';
import NotFound from './component/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact={true} element={<Home/>} />
          <Route path='/login' exact={true} element={<Login />} />
          <Route path='/main' exact={true} element={<Main />} />
          <Route path='*' exact={true}  element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// ----------Download Code---------- 

// import React, {useState} from 'react';
// import Main from "./component/Main";
// import Login from "./component/Login";
// import Home from "./component/Home";
// import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
// import "./component/main.css";

// function App() {
// 	const [navVisible, showNavbar] = useState(false);

// 	return (
// 		<BrowserRouter >
// 			<div className="App">
// 				<Main visible={ navVisible } show={ showNavbar } />
// 				<Routes>
// 					<Route path="/" element={<Home to="/dashboard" />} />
// 					<Route path='/dashboard' element={<div className={!navVisible ? "page" : "page page-with-navbar"}> <h1>Dashboard</h1> </div> } />
// 					<Route path='/analytics' element={ <div className={!navVisible ? "page" : "page page-with-navbar"}> <h1>Analystics</h1> </div> }/>
// 					<Route path='/orders' element={ <div className={!navVisible ? "page" : "page page-with-navbar"}> <h1>Orders</h1> </div> }/>
// 					<Route path='/settings' element={ <div className={!navVisible ? "page" : "page page-with-navbar"}> <h1>Settings</h1> </div> }/>
// 					<Route path='/login' element={ <Login /> }/>
// 				</Routes>
// 			</div>
// 		</BrowserRouter>
//   );
// }

// export default App;