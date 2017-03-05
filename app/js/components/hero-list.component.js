angular.module('AngularApp')
    .component("heroList", {
        templateUrl: '/templates/hero-list.template.html',
        controller: ['$scope', 'HeroService',  HeroCtrl]
    });

function HeroCtrl($scope , HeroService) {

    $scope.name = null;
    $scope.isSuper = false;
    $scope.isGenius = false;
    $scope.isRich = false;
    $scope.clicked = false;
    $scope.heroesList = HeroService.getHeroes();

    $scope.addHero = function (heroName, isSuper, isRich, isGenius) {
        HeroService.addHero(heroName, isSuper, isRich, isGenius);
        $scope.tableShow = true;
        $scope.name = null;
        $scope.isSuper = false;
        $scope.isGenius = false;
        $scope.isRich = false;
        hideOrShowTable();
    };

    $scope.sync = function () {
        return HeroService.syncWithStorage();
    };

    $scope.orderBy = function (x) {
        $scope.orderingBy = x;
    };

    $scope.removeHero = function(name) {
        HeroService.removeHero(name);

        if($scope.heroesList.length === 0) {
            $scope.tableShow = false;
        }

        $scope.clicked = !$scope.clicked;
        hideOrShowTable();
    };

    $scope.confirmToggle = function (id, value) {
        console.log(id);
        console.log(value);
       /* document.getElementById(id).$set("ng-show", "true");*/

        $scope.clicked = !$scope.clicked;
    };

    $scope.remainingSuperPower = function () {
        return HeroService.superPowerCount();
    };

    $scope.remainingRich = function () {
        return HeroService.richCount();
    };

    $scope.remainingGenius = function () {
        return HeroService.geniusCount();
    };

    $scope.checkLinkSuper = function () {
        var a = $scope.remainingSuperPower();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    $scope.checkLinkRich = function () {
        var a = $scope.remainingRich();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    $scope.checkLinkGenius = function () {
        var a = $scope.remainingGenius();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    function hideOrShowTable() {
        if ($scope.heroesList.length > 0) {
            $scope.tableShow = true;
        } else {
            $scope.tableShow = false;
        }
    }

    hideOrShowTable();

}







