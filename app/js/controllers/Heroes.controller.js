//main controller for app
function HeroCtrl(HeroService) {
    var self = this;

    this.name = null;
    this.isSuper = false;
    this.isGenius = false;
    this.isRich = false;
    this.clicked = false;
    this.heroesList = HeroService.getHeroes();

    //method for adding heroes to the table
    this.addHero = function (heroName, isSuper, isRich, isGenius) {
        HeroService.addHero(heroName, isSuper, isRich, isGenius);
        self.tableShow = true;
        self.name = null;
        self.isSuper = false;
        self.isGenius = false;
        self.isRich = false;
        hideOrShowTable();
    };

    //method for synchronization with local storage
    this.sync = function () {
        return HeroService.syncWithStorage();
    };

    //ordering by method
    this.orderBy = function (x) {
        self.orderingBy = x;
    };

    //method for removing  heroes from the table
    this.removeHero = function(name) {
        HeroService.removeHero(name);

        if(this.heroesList.length === 0) {
            self.tableShow = false;
        }

        self.clicked = !self.clicked;
        hideOrShowTable();
    };


    this.confirmToggle = function (id, value) {
        console.log(id);
        console.log(value);
        /*       document.getElementById(id).$set("data-value", "!this.clicked");*/

        self.clicked = !self.clicked;
    };

    //method for counting super-power heroes
    this.remainingSuperPower = function () {
        return HeroService.superPowerCount();
    };

    //method for counting rich heroes
    this.remainingRich = function () {
        return HeroService.richCount();
    };

    //method for counting genius heroes
    this.remainingGenius = function () {
        return HeroService.geniusCount();
    };

    //current amount of super-power heroes
    this.checkLinkSuper = function () {
        var a = self.remainingSuperPower();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    //current amount of rich heroes
    this.checkLinkRich = function () {
        var a = self.remainingRich();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    //current amount of genius heroes
    this.checkLinkGenius = function () {
        var a = self.remainingGenius();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    //method for showing or hiding table
    function hideOrShowTable() {
        if (self.heroesList.length > 0) {
            self.tableShow = true;
        } else {
            self.tableShow = false;
        }
    }

    hideOrShowTable();

}