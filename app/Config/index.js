//Need improvement in config **&&**
//Not working with react-native-config module :()
import Config from 'react-native-config';

export default {
  auth0: {
    clientId: Config.AUTH0_CLIENT_ID,
    host: Config.AUTH0_HOST,
  },
  api: {
    host: 'https://swapi.co/api/',
  },
  timeout: {
    query: Config.QUERY_TIMEOUT,
  },
  envName: Config.NODE_ENV || 'development',
};

