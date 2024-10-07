
import './App.css';
import Main from './Main/Main';
import Latest from './Latest/Latest';
import Section from './Section/Section';

import Data from './Main/Data';
function App() {
  return (
    <div className="App">
     
       <Main />
       <Latest Data = {Data} />
       <Section />
     
    </div>
  );
}

export default App;
