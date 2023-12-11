import { useRoutes } from 'react-router-dom';
import router from './Router';
import {  BrowserRouter as Router } from 'react-router-dom';

function App() {
  const content = useRoutes(router);
  return content
  
}

export default App;
