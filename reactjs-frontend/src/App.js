import './App.css';

// Custom import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListAccountsComponent from './components/ListAccountsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAccountsComponent from './components/CreateAccountsComponent';


// Routing should be done in App.js because App component is root component
// Header and Footer component outside because it must be available in all page
// Switch not supported anymore. https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
function App() {
  return (
    <div>
      <BrowserRouter>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path='/' element = {<ListAccountsComponent /> }></Route>
              <Route path='/accounts' element = {<ListAccountsComponent /> }></Route>
              <Route path='/create-accounts' element = {<CreateAccountsComponent /> }></Route>
            </Routes>
          </div>
          <FooterComponent />
      </BrowserRouter>
    </div>
  );
} 

export default App;
