import React from 'react';
import './App.scss';
import { BrowserRouter ,Route} from 'react-router-dom';
import Home from './pages/home/Home'

interface Props {
  name:string
}
class App extends React.Component<any>{
  render(){
    return(
      <BrowserRouter>
        <div className="root-entry">
          <Route path='/' component={Home}></Route>
        </div>
      </BrowserRouter>
  )
    
  }
}
export default App;
