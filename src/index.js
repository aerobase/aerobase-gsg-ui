import React from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Keycloak from "keycloak-js";
import App from "components/App";

const rootEl = document.getElementById("root");
const psl = require('psl');

const renderComponent = (Component) => {
    const kc = Keycloak('../unifiedpush-server/rest/keycloak/config/gsg');

    kc.init({ onLoad: 'login-required' }).success(authenticated => {
        if (authenticated) {
            console.log("kc.idToken.preferred_username: " + kc.idTokenParsed.preferred_username);
            var username = kc.idTokenParsed.preferred_username;
            // Replace any none a-zA-Z0-9 characters to '-'
            var realmname = username.replace(/[^a-zA-Z0-9]/gi, '-');
            var ps = psl.parse(window.location.hostname);
            var topDomain = ps.domain;

            window.parent.postMessage(realmname, window.location.protocol + "//" + window.location.hostname);

            ReactDOM.render(
                <AppContainer>
                    <Component username={username} realmname={realmname} topDomain={topDomain}/>
                </AppContainer>
                ,
                rootEl
            );
        }
    }).error(function() {
        var username = "_None@";
        var realmname = username.replace(/[^a-zA-Z0-9]/gi, '-');
        var topDomain = "localhsot";


        ReactDOM.render(
            <AppContainer>
                <Component username={username} realmname={realmname} topDomain={topDomain}/>
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
