import React from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Keycloak from "keycloak-js";
import App from "components/App";
import 'semantic-ui-css/semantic.min.css';
import './assets/img/favicon.ico';

const rootEl = document.getElementById("root");
const psl = require('psl');

const renderComponent = (Component) => {
    var realm = "aerobase"
    const defaultHref = "http://aerobase.example.com/auth"
    const runtimeHref = window.location.protocol + "//" + window.location.hostname + "/auth"
    
    // Calculate subdomain if exists
    var ps = psl.parse(window.location.hostname);
    var topDomain = ps.domain;
    
    if (ps.subdomain !== null) {
        if (ps.subdomain === "cloud" || topDomain === "aerobase.org" ) {
            realm = "master"
        }else{
            realm = ps.subdomain
        }
    }

    const config = {
        "realm": realm,
        "url": window.location.hostname === "localhost"? defaultHref: runtimeHref,
        "clientId":"aerobase-gsg",
        "ssl-required" : "external",
        "public-client" : true
    }
    
    const kc = Keycloak(config);

    kc.init({ onLoad: 'login-required' }).success(authenticated => {
        if (authenticated) {
            console.log("kc.idToken.preferred_username: " + kc.idTokenParsed.preferred_username);
            var username = kc.idTokenParsed.preferred_username;
            // Replace any none a-zA-Z0-9 characters to '-'
            var realmname = username.replace(/[^a-zA-Z0-9]/gi, '-');

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
