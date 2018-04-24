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
            var username = kc.idTokenParsed.preferred_username;
            var realmname = username.replace(/[^a-zA-Z0-9]/gi, '-');

            window.parent.postMessage(realmname,"http://portal." + window.location.hostname);
            // TODO - Replace aerobase.io with external js attribute
            ReactDOM.render(
                <AppContainer>
                    <Component username={username} realmname={realmname + "." + window.location.hostname}/>
                </AppContainer>
                ,
                rootEl
            );
        }
    }).error(function() {
        var username = "_None@"
        var realmname = username.replace(/[^a-zA-Z0-9]/gi, '-');

        ReactDOM.render(
            <AppContainer>
                <Component username={username} realmname={realmname}/>
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
