angular.module('AngularApp')
    //component for displaying all heroes in the table
    .component("heroList", {
        templateUrl: '/templates/hero-list.template.html',
        controller: ['HeroService',  HeroCtrl]
    });








