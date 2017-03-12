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
        self.refreshStatistics();
    }

    self.statistics = {
        superPower: 0,
        rich: 0,
        genius: 0
    };

    //method for updating our local storage
    self.syncWithStorage = function() {
        localStorage.setItem('heroesList', JSON.stringify(heroesList));
        self.refreshStatistics();
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

    self.getCountByType = function (type) {
      var remainingCount = 0;

      heroesList.forEach(function (hero) {
        remainingCount += hero[type] ? 1 : 0;
      });
      return remainingCount;
    };

    self.refreshStatistics = function () {
      for (var prop in self.statistics) {
          if (self.statistics.hasOwnProperty(prop)) {
              self.statistics[prop] = self.getCountByType(prop);
          }
      }

    };

    init();
}


})();

