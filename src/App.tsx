import { Routes as SolidRoutes, Route } from '@solidjs/router';
import { Component, lazy } from 'solid-js';

import { Routes } from 'constants/routes';

const RandomCocktailPage = lazy(() => import('pages/RandomCocktail'))
const WelcomePage = lazy(() => import('pages/Welcome'))

export const App: Component = () => (
  <SolidRoutes>
    <Route path={Routes.home} component={WelcomePage} />
    <Route path={Routes.random} component={RandomCocktailPage} />
  </SolidRoutes>
)
