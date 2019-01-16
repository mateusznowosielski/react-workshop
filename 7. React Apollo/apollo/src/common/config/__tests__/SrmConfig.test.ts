import { ISrmConfig } from 'common/config/SrmConfig';
import SrmConfig from 'common/config/SrmConfig';

it('verifying SrmConfig to be created', () => {

  const srmConfig: ISrmConfig = new SrmConfig();

  expect(srmConfig).toBeDefined();
  expect(srmConfig.cache).toBeUndefined();
  expect(srmConfig.stateLink).toBeUndefined();
  expect(srmConfig.restLink).toBeUndefined();
  expect(srmConfig.graphQlLink).toBeUndefined();
  expect(srmConfig.errorLink).toBeUndefined();
  expect(srmConfig.client).toBeUndefined();
});

it('verifying SrmConfig to be created and registered', () => {

  const srmConfig: ISrmConfig = new SrmConfig();
  srmConfig.register();

  expect(srmConfig).toBeDefined();
  expect(srmConfig.cache).toBeDefined();
  expect(srmConfig.stateLink).toBeDefined();
  expect(srmConfig.restLink).toBeUndefined();
  expect(srmConfig.graphQlLink).toBeUndefined();
  expect(srmConfig.errorLink).toBeDefined();
  expect(srmConfig.client.link).toBeDefined();
});

it('verifying SrmConfig to be created and registered with local state resolvers, rest and graphql endpoint', () => {

  const srmConfig: ISrmConfig = new SrmConfig({
    graphQlUri: 'localhost',
    restApiUri: 'localhost',
    resolvers: {},
  });
  srmConfig.register();

  expect(srmConfig).toBeDefined();
  expect(srmConfig.cache).toBeDefined();
  expect(srmConfig.stateLink).toBeDefined();
  expect(srmConfig.restLink).toBeDefined();
  expect(srmConfig.graphQlLink).toBeDefined();
  expect(srmConfig.errorLink).toBeDefined();
  expect(srmConfig.client.link).toBeDefined();
});