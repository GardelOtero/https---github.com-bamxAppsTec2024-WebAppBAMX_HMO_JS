import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario';
import firebase from 'firebase/app';
import 'bootswatch/dist/united/bootstrap.min.css';
function App() {
  return (
    <div className='container p-6'>
    <Formulario/>
    </div>
  )
}

export default App;
