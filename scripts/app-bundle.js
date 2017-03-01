define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'My Aurelia äpp';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'people', name: 'people', moduleId: 'people/people', nav: true }, { route: 'profile', name: 'profile', moduleId: 'profile/profile', nav: true }, { route: 'event', name: 'event', moduleId: 'event/event', nav: true }]);
      config.mapUnknownRoutes('not-found');
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('event/event',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Event = exports.Event = function Event() {
		_classCallCheck(this, Event);
	};
});
define('home/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);

    this.terv = 'Nonii nahuj!';
  };
});
define('people/people',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.people = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var people = exports.people = function () {
		function people() {
			_classCallCheck(this, people);

			this.userData = {};

			this.appName = "adPortal";
			this.count = 0;
		}

		people.prototype.addUser = function addUser() {
			var client = new _aureliaFetchClient.HttpClient();

			client.fetch('http://localhost:8080/users/add', {
				'method': "POST",
				'body': (0, _aureliaFetchClient.json)(this.userData)
			}).then(function (response) {
				return response.json();
			}).then(function (data) {
				console.log("Server saatis " + data.firstName);
			});

			console.log("Method executed!");
		};

		return people;
	}();
});
define('profile/profile',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Profile = exports.Profile = function Profile() {
		_classCallCheck(this, Profile);
	};
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!event/event.html', ['module'], function(module) { module.exports = "<template>Skip to content This repository Search Pull requests Issues Gist @rosulg Sign out Watch 0 Star 0 Fork 1 rosulg/photoflat Code Issues 0 Pull requests 0 Projects 0 Wiki Pulse Graphs Settings Branch: master Find file Copy pathphotoflat/photoflat/event.html 72b9dda 2 days ago @markussomp markussomp Add files via upload 1 contributor RawBlameHistory 144 lines (122 sloc) 5.99 KB<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery.js\"></script><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#page-top\"><span class=\"light\"></span><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#Kinesioloogia\">Registeeru</a></li><li><a class=\"page-scroll smallcolor\" href=\"#kontakt\">Logi sisse</a></li></ul></div></div></nav><section id=\"adds\"><div class=\"container\"><div class=\"col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/700x300\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><p></p><h5 class=\"text-center contact_info\">Viimased hinnapakkumised</h5><p></p><p>Ahto Jalakas pakkus hinnaks 500$</p><p>Ahto Malakas pakkus hinnaks 600$</p><p>Mari Mops pakkus hinnaks 300$</p><p>Muri Jeesus pakkus hinnaks 200$</p><form method=\"post\">Paku hind: <input type=\"text\" name=\"hind\"></form><br><a href=\"\" class=\"btn\">Kinnita pakkumine</a> <a href=\"\" class=\"btn\">Tagasi</a></div></div></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12\"><p>Copyright &copy; photoFlat 2017</p></div></div></footer></section><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery-3.1.1.min.js\"></script><link href=\"font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#page-top\"><span class=\"light\"></span><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#Kinesioloogia\">Registeeru</a></li><li><a class=\"page-scroll smallcolor\" href=\"#kontakt\">Logi sisse</a></li></ul></div></div></nav><section id=\"adds\"><div class=\"container\" style=\"overflow:scroll;max-height:700px\"><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"\" class=\"btn\">Loe rohkem</a></div></div></div></div></div></div><hr><div class=\"row text-center\"><div class=\"col-lg-12\"><ul class=\"pagination\"><li><a href=\"#\">&laquo;</a></li><li class=\"active\"><a href=\"#\">1</a></li><li><a href=\"#\">2</a></li><li><a href=\"#\">3</a></li><li><a href=\"#\">4</a></li><li><a href=\"#\">5</a></li><li><a href=\"#\">&raquo;</a></li></ul></div></div><hr><footer><div class=\"row\"><div class=\"col-lg-12\"><p>Copyright &copy; photoFlat 2017</p></div></div></footer></section><script src=\"js/jquery-3.1.1.min.js\"></script><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!people/people.html', ['module'], function(module) { module.exports = "<template>Hei! ${appName} kasutajaid on praegu ${count}<form id=\"userform\" submit.delegate=\"addUser()\"><div><label for=\"firstName\">First name</label><input id=\"firstName\" type=\"text\" name=\"firstName\" value.bind=\"userData.firstName\"></div><div><label for=\"lastName\">Last name</label><input id=\"lastName\" type=\"text\" name=\"lastName\" value.bind=\"userData.lastName\"></div><div><label for=\"numOfPets\">Num of pets</label><input id=\"numOfPets\" type=\"number\" name=\"numOfPets\" value.bind=\"userData.numOfPets\"></div><input type=\"submit\" name=\"Lisa kasutaja\"></form></template>"; });
define('text!profile/profile.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><link href=\"css/profile.css\" rel=\"stylesheet\"><link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#page-top\"><span class=\"light\"></span><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#Kinesioloogia\">Registeeru</a></li><li><a class=\"page-scroll smallcolor\" href=\"#kontakt\">Logi sisse</a></li></ul></div></div></nav><div class=\"col-xs-12 col-lg-4\"><div class=\"box\"><div class=\"row\"><div class=\"col-xs-12\"><img src=\"http://placehold.it/350x150\" class=\"profile-pic\" style=\"padding:0\"> <button class=\"btn btn-primary text-right\">Settings</button></div></div><div class=\"row\"><div class=\"col-xs-12 user-info text-left\"><div class=\"col-xs-12\"><h5>Nimi: <span id=\"name\">Tester Tester</span></h5><h5>Amet: <span id=\"name\">Tester ja fotograaf</span></h5><h5>E-mail: <span id=\"name\">tester@testerland.com</span></h5><h5>Endast:</h5><div class=\"info-box\"></div></div></div></div></div><div class=\"btn btn-primary text-center\" style=\"margin-top:20px\">Vaata täis portfooliot</div></div><div class=\"col-xs-12 col-lg-4\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"port-box\"><img src=\"pics/portfolio-1.jpg\" class=\"img-responsive center-block\"></div></div><div class=\"col-xs-12\"><div class=\"port-box\"><img src=\"pics/portfolio-2.jpg\" class=\"img-responsive center-block\"></div></div></div></div><div class=\"col-xs-12 col-lg-4\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"port-box\"><img src=\"pics/maja1.png\" class=\"img-responsive center-block\"></div></div><div class=\"col-xs-12\"><div class=\"port-box\"><img src=\"pics/portfolio-3.jpg\" class=\"img-responsive center-block\"></div></div></div></div></body></html></template>"; });
//# sourceMappingURL=app-bundle.js.map