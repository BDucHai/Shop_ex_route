import './App.css';
import { publicRoutes } from './routes/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../src/pages/MainLayout';


function App() {
  return (
    <Router>
      <div className="App">
         
        <Routes>
          <Route path='/' element={<MainLayout />}>
            {publicRoutes.map((route,index) =>{
            const Page = route.component;
            return(
              <Route key={index} path={route.path} element={<Page />} />
            )
            })}
          </Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
