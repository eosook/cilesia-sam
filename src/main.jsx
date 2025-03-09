import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-WGWJ83JZ"
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
