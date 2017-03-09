function HeroCtrl(HeroService) {
    var self = this;

    this.name = null;
    this.isSuper = false;
    this.isGenius = false;
    this.isRich = false;
    this.clicked = false;
    this.heroesList = HeroService.getHeroes();

    this.addHero = function (heroName, isSuper, isRich, isGenius) {
        HeroService.addHero(heroName, isSuper, isRich, isGenius);
        self.tableShow = true;
        self.name = null;
        self.isSuper = false;
        self.isGenius = false;
        self.isRich = false;
        hideOrShowTable();
    };

    this.sync = function () {
        return HeroService.syncWithStorage();
    };

    this.orderBy = function (x) {
        self.orderingBy = x;
    };

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

    this.remainingSuperPower = function () {
        return HeroService.superPowerCount();
    };

    this.remainingRich = function () {
        return HeroService.richCount();
    };

    this.remainingGenius = function () {
        return HeroService.geniusCount();
    };

    this.checkLinkSuper = function () {
        var a = self.remainingSuperPower();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    this.checkLinkRich = function () {
        var a = self.remainingRich();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    this.checkLinkGenius = function () {
        var a = self.remainingGenius();
        if (a === 0) {
            return true;
        } else {
            return false;
        }
    };

    function hideOrShowTable() {
        if (self.heroesList.length > 0) {
            self.tableShow = true;
        } else {
            self.tableShow = false;
        }
    }

    hideOrShowTable();

}