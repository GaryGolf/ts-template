/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for redux devtools extension
declare interface Window {
  __INITIAL_STATE__?: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends Function>(f: F) => F;
  devToolsExtension?(): (args?: any) => any;
}
// enviroment constant
declare const PRODUCTION: boolean