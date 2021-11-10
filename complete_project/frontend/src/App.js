import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import {BrowserRouter, Route} from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import CreateNote from "./screens/SingleNote/CreateNote";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
    <Route path='/' component={LandingPage} exact/>
    <Route path='/login' component={LoginScreen} exact/>
    <Route path='/register' component={RegisterScreen} exact/>
    <Route path='/createnote' component={CreateNote} exact/>
    <Route path='/mynotes' component={() => <MyNotes/>}/>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
