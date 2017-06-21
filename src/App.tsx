import * as React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";
import Layout from './Layout';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={lightMuiTheme}>
          <Layout />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
