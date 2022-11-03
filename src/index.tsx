/* @refresh reload */
import 'assets/css/app.css'

import { Router } from '@solidjs/router';
import { render } from 'solid-js/web'

import { App } from './App'

const root = document.getElementById('root') as HTMLElement

render(() => (
  <Router>
    <App />
  </Router>
), root)
