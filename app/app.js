angular.module("AngularApp", ["ngComponentRouter", "GeniusHeroes", "SuperHeroes", "RichHeroes"])

    //Using HTML5 mode so we can have clean URLs for our application routes
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })

    //Defining root component
    .value("$routerRootComponent", 'app')

    //Creating component with route configurations
    .component("app", {
        $routeConfig: [
            {path: '/home', name: 'Home', component: 'heroList', useAsDefault: true },
            {path: '/super', name: 'Super', component: 'super'},
            {path: '/rich', name: 'Rich', component: 'rich'},
            {path: '/genius', name: 'Genius', component: 'genius'}
        ]
    });




