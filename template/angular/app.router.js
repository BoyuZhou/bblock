routerConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

function routerConfig ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state(
        '/',
        {
            url: '/',
            template: require('index.html')
        }
    )
        .state(
        'home',
        {
            url: '/home',
            template: require('home/home.html'),
            controller: 'homeController as vm'
        }
    )
}