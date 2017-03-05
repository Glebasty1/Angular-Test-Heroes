angular.module('AngularApp')
    .component("sideBar", {
        templateUrl: '/templates/sidebar.template.html',
        controller: ['$scope', 'HeroService',  HeroCtrl]
    });
