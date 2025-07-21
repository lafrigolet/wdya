import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import './i18n';


import Inicio from './components/home/index';

// Translation
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import yaml from 'js-yaml';


i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
        lng: 'en',
        debug: false,
        backend: {
            loadPath: '/locales/{{lng}}.yaml',
          parse: (data) => {
            console.log('+++++++++++++++++', data);
            return yaml.load(data);
          },
        },
    });




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading">
    <Inicio />
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
