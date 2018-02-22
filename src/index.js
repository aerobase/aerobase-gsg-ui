import React from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Keycloak from "keycloak-js";
import App from "components/App";

const rootEl = document.getElementById("root");

const renderComponent = (Component) => {
    const kc = Keycloak('../unifiedpush-server/rest/keycloak/config/gsg');

    kc.init({ onLoad: 'login-required' }).success(authenticated => {
        if (authenticated) {
            console.log("kc.idToken.preferred_username: " + kc.idTokenParsed.preferred_username);

            ReactDOM.render(
                <AppContainer>
                    <Component username={kc.idTokenParsed.preferred_username}/>
                </AppContainer>
                ,
                rootEl
            );
        }
    }).error(function() {
        ReactDOM.render(
            <AppContainer>
                <Component username='None'/>
            </AppContainer>
            ,
            rootEl
        );
    });
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/App", () => {
        renderComponent(App);
    });
}
