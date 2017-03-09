angular.module("GeniusHeroes", [])
    //component for displaying genius heroes(filter)
    .component("genius", {
        templateUrl: '/templates/genius.template.html',
        controller: ['HeroService',  HeroCtrl]
    });
