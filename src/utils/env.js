import { DEVELOPMENT, PRODUCTION } from './config';

export function get(keyname) {
  let config;
  // NOTE: REACT_APP_ENV is set by the build command (see package.json)
  // HOWEVER, NODE_ENV is hardcoded by CRA and will be 'production' anytime the project is built
  switch (process.env.REACT_APP_ENV) {
    case 'production':
      config = PRODUCTION;
      break;
    default:
      config = DEVELOPMENT;
      break;
  }

  if (!keyname) {
    return config;
  }

  return config[keyname];
}
