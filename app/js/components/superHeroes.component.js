angular.module("SuperHeroes", [])
    //component for displaying super heroes(filter)
    .component("super", {
        templateUrl: '/templates/super-power.template.html',
        controller: ['HeroService',  HeroCtrl]
    });
