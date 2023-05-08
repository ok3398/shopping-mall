import React from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './app'
import './scss/index.scss'
import { worker } from './mocks/browser'
const container = document.getElementById('root')
const root = createRoot(container);

if (import.meta.env.DEV) {
    worker.start()
}

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>
)
