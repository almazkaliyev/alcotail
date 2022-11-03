export type EndpointParam = string | number | boolean

export type NoParamEndpointConstructor = () => string
export type OneParamEndpointConstructor<P = EndpointParam> = (param: P) => string
