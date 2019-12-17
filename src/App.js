import React, {Fragment, Component} from 'react';
import Approuter from './Router/AppRouter';
import './firebase/firebase';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Approuter/>
      </Fragment>
    );
  }
}

export default App;