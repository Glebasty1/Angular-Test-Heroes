angular.module("GeniusHeroes", [])
    .component("genius", {
        templateUrl: '/templates/genius.template.html',
        controller: ['$scope', 'HeroService',  HeroCtrl]
    });
