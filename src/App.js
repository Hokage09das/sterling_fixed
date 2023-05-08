import { useRoutes } from 'react-router-dom';
import { router } from './routes/routes';

import './App.css';

function App() {
	const AppRoutes = useRoutes(router());
	return AppRoutes;
}

export default App;
