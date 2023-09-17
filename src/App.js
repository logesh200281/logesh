import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './Home';
import About from './About.js';
import Department from './Department.js';
import COURSES from './COURSES.js';
import ADMISSION from './ADMISSION.js';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/Department' element={<Department />} />
				<Route path='/COURSES' element={<COURSES />} />
				<Route path='/ADMISSION' element={<ADMISSION />} />
			</Routes>
		</Router>
	);
}

export default App;
