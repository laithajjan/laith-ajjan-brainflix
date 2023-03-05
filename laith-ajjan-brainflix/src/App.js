import Header from './components/Header/header';
import './App.scss';
import { Component } from "react";
import UploadPage from './pages/Upload/upload';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './components/Home/home-page';

class App extends Component {

render () {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/upload' exact component={UploadPage}/>
        <Route path='/home/:id' component={HomePage}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );}
}

export default App;