import React, {Component} from 'react';

import {MuiThemeProvider} from 'material-ui';
import {getMuiTheme, lightBaseTheme} from 'material-ui/styles';

import {Frame} from  './containers/Frame/Frame';
class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Frame>
                    {this.props.children}
                </Frame>
            </MuiThemeProvider>
        );
    }
}

export default App;
