import React from 'react';
import WebView from 'react-native-webview';
import {View} from 'react-native';

class GoogleCaptchaV3 extends React.Component {
    render() {
        const {siteKey, action, onExecute, baseUrl} = this.props;

        const recaptchaHtml = `<!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body {
                            display: flex;
                            justify-content: left; 
                            align-items: top;  
                        }
                    </style>  
                </head>
                <body>
                    <div id="inline-badge"></div>
                    <script src="https://www.google.com/recaptcha/api.js?render=${siteKey}&onload=onRecaptchaLoadCallback"></script>
                    <script>
                        function onRecaptchaLoadCallback() {
                            grecaptcha.ready(function () {
                                grecaptcha.execute('${siteKey}', {
                                    action: '${action}'
                                }).then(function (token) {
                                    window.ReactNativeWebView.postMessage(token)
                                });
                              });  
                        }
                      </script>      
                </body>
            </html>`;


        return (
            <View style={{ flex: 1 }}>
                <WebView
                    javaScriptEnabled
                    automaticallyAdjustContentInsets
                    source={{html: recaptchaHtml, baseUrl: baseUrl}}
                    onMessage={e => onExecute(e.nativeEvent.data)}
                    scalesPageToFit
                    ref={webview => this.webview = webview}
                    originWhitelist={['*']}
                />
            </View>
        );
    }
}

export default GoogleCaptchaV3;