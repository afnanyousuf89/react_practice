import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Slider from './Components/Slider';
import MainContent from './Components/MainContent';
import { useState } from 'react';

function App() {

	const [show, setShow] = useState(false);

	return (
		<div className='wrapper'>
			<Header />
			<Menu />
			<Slider />

			<button onClick={() => setShow(!show)}>
				{
					show ? 'Hide' : 'Show'
				}
				Now</button>


			{
				show ? <MainContent /> : ''
			}



		</div>
	);
}
export default App;
