import { useRoutes } from 'react-router-dom';
import router from './router';
import {  BrowserRouter as Router } from 'react-router-dom';

function App() {
  const content = useRoutes(router);
  return content
  
}

export default App;
