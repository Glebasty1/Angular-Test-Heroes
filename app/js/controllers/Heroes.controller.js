//main controller for app
function HeroCtrl(HeroService) {
    var self = this;

    self.name = null;
    self.isSuper = false;
    self.isGenius = false;
    self.isRich = false;
    self.heroesList = HeroService.getHeroes();
    self.statistics = HeroService.statistics;

    console.log('Controller initalised:', self);

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

        hideOrShowTable();
    };


    this.confirmToggle = function (index) {
        this.heroesList.forEach(function (item, itemIndex) {
          if (itemIndex === index) {
            item.clicked = !item.clicked;
          } else {
            item.clicked = false;
          }
        });
    };

    this.checkLinkByType = function (type) {
      return HeroService.getCountByType(type) === 0;
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