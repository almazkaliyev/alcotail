import { NoParamEndpointConstructor } from 'interfaces/endpoints.interfaces'

interface Endpoints {
  getRandom: NoParamEndpointConstructor
}

export const cocktailsEndpoints: Endpoints = {
  getRandom: () => `/random.php`,
}
