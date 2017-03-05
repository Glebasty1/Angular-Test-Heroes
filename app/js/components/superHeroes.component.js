angular.module("SuperHeroes", [])
    .component("super", {
        templateUrl: '/templates/super-power.template.html',
        controller: ['$scope', 'HeroService',  HeroCtrl]
    });
