import Clhead from './component/clhead';
import Clslogan from './component/clslogan';
import Currenttime from './component/currenttime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <center>
      <Clhead/>
      <Clslogan/>
      <Currenttime/>
    </center>
  )
}

export default App
