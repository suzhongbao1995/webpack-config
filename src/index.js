import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('成功注册 ', registration);
        }).catch(registrationError => {
            console.log(' 注册失败: ', registrationError);
        });
    });
}

ReactDom.render(<App/>, document.getElementById('root'))
