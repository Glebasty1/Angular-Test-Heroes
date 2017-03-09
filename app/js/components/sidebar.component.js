angular.module('AngularApp')
    // sidebar component displaying sidebar
    .component("sideBar", {
        templateUrl: '/templates/sidebar.template.html',
        controller: ['HeroService',  HeroCtrl]
    });
