(function() {
    'use strict';
angular.module("AngularApp")
    .service('HeroService', ['$location', HeroService]);

function HeroService($location) {
    var self = this;

    var heroesList = [];

    //initialization our tasks to local storage
    function init() {
        var tasksFromStorage = localStorage.getItem('heroesList');

        if (!tasksFromStorage) {
            self.syncWithStorage();
        } else {
            heroesList = JSON.parse(tasksFromStorage);
        }
    }

    //method for updating our local storage
    self.syncWithStorage = function() {
        localStorage.setItem('heroesList', JSON.stringify(heroesList));
    };


    self.getHeroes = function () {
        return heroesList;
    };

    //method for adding heroes to the table
    self.addHero = function (heroName, isSuper, isRich, isGenius) {
        if (!heroName) {
            return 0;
        } else {
            heroesList.push({name: heroName, superPower: isSuper, rich: isRich, genius: isGenius});
            self.syncWithStorage();
        }
        $location.path( "/" );
    };

    //method for removing  heroes from the table
    self.removeHero = function (name) {
        var index = -1;
        var comArr = heroesList;
        for ( var i = 0; i < comArr.length; i++ ) {
            if(comArr[i].name === name) {
                index = i;
                break;
            }
        }
        if (index === -1 ) {
            return 0;
        }

        heroesList.splice(index, 1);
        self.syncWithStorage();
    };

    //method for counting super-power heroes
    self.superPowerCount = function () {
        var remainingCount = 0;

        heroesList.forEach(function (hero) {
            remainingCount += hero.superPower ? 1 : 0;
        });
        return remainingCount;
    };

    //method for counting rich heroes
    self.richCount = function () {
        var remainingCount = 0;

        heroesList.forEach(function (hero) {
            remainingCount += hero.rich ? 1 : 0;
        });

        return remainingCount;
    };

    //method for counting genius heroes
    self.geniusCount = function () {
        var remainingCount = 0;

        heroesList.forEach(function (hero) {
            remainingCount += hero.genius ? 1 : 0;
        });
        return remainingCount;
    };

    init();
}


})();

