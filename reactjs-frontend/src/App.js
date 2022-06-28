import logo from './logo.svg';
import './App.css';
import ListAccountsComponent from './components/ListAccountsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListAccountsComponent />
      </div>
      <FooterComponent />
    </div>
  );
} 

export default App;
