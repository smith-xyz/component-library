import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CustomNavBar from './components/Navbar/CustomNavBar'
import TableIndex from './components/Table/Index'
import SpinnerIndex from './components/Spinners/Index'
import ButtonsIndex from './components/Buttons/Index'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavBar />
        <Switch>
          <Route path={"/tables"} component={TableIndex} />
          <Route path={"/spinners"} component={SpinnerIndex} />
          <Route path={"/buttons"} component={ButtonsIndex} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
