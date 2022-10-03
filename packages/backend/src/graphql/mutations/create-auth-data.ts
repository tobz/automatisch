import Context from '../../types/express/context';
import axios from 'axios';
import prepareGlobalVariableForConnection from '../../helpers/global-variable/connection';
import App from '../../models/app';

type Params = {
  input: {
    id: string;
  };
};

const createAuthData = async (
  _parent: unknown,
  params: Params,
  context: Context
) => {
  const connection = await context.currentUser
    .$relatedQuery('connections')
    .findOne({
      id: params.input.id,
    })
    .throwIfNotFound();

  if (!connection.formattedData) {
    return null;
  }

  const authInstance = (await import(`../../apps/${connection.key}2/auth`))
    .default;
  const app = App.findOneByKey(connection.key);

  const $ = prepareGlobalVariableForConnection(connection, app);
  await authInstance.createAuthData($);

  try {
    await axios.get(connection.formattedData.url as string);
  } catch (error) {
    throw new Error('Error occured while creating authorization URL!');
  }

  return connection.formattedData;
};

export default createAuthData;
