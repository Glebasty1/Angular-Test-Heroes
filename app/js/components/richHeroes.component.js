angular.module('RichHeroes', [])
    .component("rich", {
        templateUrl: '/templates/rich.template.html',
        controller: ['$scope', 'HeroService',  HeroCtrl]
    });





