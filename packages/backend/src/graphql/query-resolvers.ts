import getApps from './queries/get-apps';
import getApp from './queries/get-app';
import getConnectedApps from './queries/get-connected-apps';
import testConnection from './queries/test-connection';
import getFlow from './queries/get-flow';
import getFlows from './queries/get-flows';
import getStepWithTestExecutions from './queries/get-step-with-test-executions';
import getExecution from './queries/get-execution';
import getExecutions from './queries/get-executions';
import getExecutionSteps from './queries/get-execution-steps';
import getDynamicData from './queries/get-dynamic-data';
import getCurrentUser from './queries/get-current-user';
import getLicense from './queries/get-license.ee';
import healthcheck from './queries/healthcheck';

const queryResolvers = {
  getApps,
  getApp,
  getConnectedApps,
  testConnection,
  getFlow,
  getFlows,
  getStepWithTestExecutions,
  getExecution,
  getExecutions,
  getExecutionSteps,
  getDynamicData,
  getCurrentUser,
  getLicense,
  healthcheck,
};

export default queryResolvers;
