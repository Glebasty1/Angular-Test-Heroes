angular.module('AngularApp')
    .component("sideBar", {
        templateUrl: '/templates/sidebar.template.html',
        controller: ['HeroService',  HeroCtrl]
    });
