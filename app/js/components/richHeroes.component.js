angular.module('RichHeroes', [])
    .component("rich", {
        templateUrl: '/templates/rich.template.html',
        controller: ['HeroService',  HeroCtrl]
    });





