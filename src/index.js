import React from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import App from "components/App";

const rootEl = document.getElementById("root");

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
    overrides: {
        MuiDrawer: {
            // Name of the styleSheet
            docked: {
                height: '100%',
            },
        },
    },
});

const renderComponent = (Component) => {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <AppContainer>
                <Component/>
            </AppContainer>
        </MuiThemeProvider>,
        rootEl
    );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/App", () => {
        renderComponent(App);
    });
}
