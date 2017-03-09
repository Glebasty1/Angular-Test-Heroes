angular.module('AngularApp')
    .component("heroList", {
        templateUrl: '/templates/hero-list.template.html',
        controller: ['HeroService',  HeroCtrl]
    });








