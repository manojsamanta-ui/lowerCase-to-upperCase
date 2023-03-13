// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
    {/* <Navbar/> */}
    <Navbar title ="TextUtils" aboutText ="About Text"/>
    <div className="container my-3">

      <TextForm heading ="Enter the text to analysis below"/>
    </div>
  </>
  );
}

export default App;
