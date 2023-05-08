import { useRoutes } from 'react-router-dom';
import { router } from './routes/routes';

import './App.css';

function App() {
	const AppRoutes = useRoutes(router());
	return <div className='app'></div>;
}

export default App;
