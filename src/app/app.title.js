export default ['$transitions', '$window', '$q', ($transitions, $window, $q) => {
    $transitions.onSuccess({}, (transition) => {
        let title = "";
        const tokens = transition.getResolveTokens();
        const resolves = {};
        const promises = tokens.map(function (token) {
            var resolved = transition.injector().get(token);
            resolves[token] = resolved;
            return resolved;
        });
        $q.all(promises).then(function () {
            title = resolves.$title;
            if (!title) {
                title = 'MeteoApp';
            }
            $window.document.title = title;
        })
    })
}];