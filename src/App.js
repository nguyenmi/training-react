import Form from './components/form/form'
import Pageinfo from './components/pageinfo/pageinfo'
import Detail from './components/pagedetail/detail'
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/infomation">thông tin cá nhân</Link>
          <Link to="/create-user">Thêm mới</Link>
        </div>
           
        <Switch>
          <Router  path="/infomation">
            <Pageinfo/>
          </Router>
          <Router  path="/create-user">
            <Form/>
          </Router>
          <Router  path="/Detail">
            <Detail />
          </Router>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
