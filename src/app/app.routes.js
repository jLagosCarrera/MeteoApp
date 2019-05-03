export default ['$stateProvider', function (provider) {
    const helloState = {
        name: 'hello',
        url: '/hello',
        component: 'hello'
    }

    const constState = {
        name: 'world',
        url: '/world',
        component: 'world'
    }

    provider.state(helloState);
    provider.state(constState);
}];