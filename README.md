# DevWorkspace Client

The DevWorkspace Client is a library for interacting with DevWorkspaces on your cluster. Both browser and node support are available. The browser side code uses the kubernetes api directly and the node side uses @kubernetes/client-node.

## Examples

Browser side using kubernetes Rest API:
```typescript
import DevWorkspaceClient from '@eclipse-che/devworkspace-client';
import axios from 'axios';

const restApiClient = DevWorkspaceClient.getRestApi();
const workspaceApi = restApiClient.workspaceApi;
const promise = workspaceApi.getAllWorkspaces('my_namespace');
promise.then((workspaces) => {
    // process workspaces received from my_namespace
});
```

Node side using @kubernetes/client-node:
```typescript
import DevWorkspaceClient from '@eclipse-che/devworkspace-client';

const restApiClient = DevWorkspaceClient.getNodeApi();
const workspaceApi = restApiClient.workspaceApi;
const promise = workspaceApi.getAllWorkspaces('my_namespace');
promise.then((workspaces) => {
    // process workspaces received from my_namespace
});
```


## Developer support

### Getting Started
1. Install prerequisite tooling:
    - yarn
    - node
2. Install dependencies
    - Run `yarn install`
3. Build the project
    - Run `yarn run build`
4. To test the project
    - Run `yarn test`

### Integration tests
Integration tests can be run locally by using `export INTEGRATION_TESTS=true export DEVELOPMENT=true`. Refer to the Environment variables section to learn more.

**The devworkspace-controller must be on the cluster before running the integration tests.**

### Environment variables
`INTEGRATION_TESTS`: When the INTEGRATION_TESTS environment variable is defined and it's value is true, the integration tests will run against your currently authenticated cluster.

`DEVELOPMENT`: When the DEVELOPMENT environment variable is set, the authentication for `@kubernetes/client-node` is provided by your default local kubeconfig.

## License

EPL-2
