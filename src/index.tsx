/* @refresh reload */
import 'assets/css/app.css'

import { render } from 'solid-js/web'

import { App } from './App'

const root = document.getElementById('root') as HTMLElement

render(() => <App />, root)
