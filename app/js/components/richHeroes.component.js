angular.module('RichHeroes', [])
    //component for displaying genius heroes(filter)
    .component("rich", {
        templateUrl: '/templates/rich.template.html',
        controller: ['HeroService',  HeroCtrl]
    });





