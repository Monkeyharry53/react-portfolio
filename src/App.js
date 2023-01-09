import './App.css';
import './NavBar.css';
import './Banner.css';
import './Skills.css';
import './Work.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Work/>
    </div>
  );
}

export default App;
