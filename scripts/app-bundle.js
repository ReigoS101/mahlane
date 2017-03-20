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
      config.title = 'photoFlat - parim platvorm sinule';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'people', name: 'people', moduleId: 'people/people', nav: true }, { route: 'profile', name: 'profile', moduleId: 'profile/profile', nav: true }, { route: 'event', name: 'event', moduleId: 'event/event', nav: true }, { route: 'settings', name: 'settings', moduleId: 'settings/settings', nav: true }, { route: 'createEvent', name: 'createEvent', moduleId: 'createEvent/createEvent', nav: true }]);
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
define('createEvent/createEvent',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CreateEvent = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CreateEvent = exports.CreateEvent = function () {
    function CreateEvent() {
      _classCallCheck(this, CreateEvent);

      this.eventData = {};

      this.appName = "aureliaphotoflat";
    }

    CreateEvent.prototype.createEvent = function createEvent() {
      var client = new _aureliaFetchClient.HttpClient();

      client.fetch('http://localhost:9000', {
        'method': POST,
        'body': (0, _aureliaFetchClient.json)(this.eventData)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {});
    };

    CreateEvent.prototype.chooseEventPicture = function chooseEventPicture(eventPicName) {
      document.getElementById("eventpicture").setAttribute("src", eventPicName);
    };

    return CreateEvent;
  }();
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
			this.userList = [];

			this.appName = "adPortal";
			this.count = 0;
		}

		people.prototype.activate = function activate() {
			var _this = this;

			var client = new _aureliaFetchClient.HttpClient();

			client.fetch('http://localhost:8080/users').then(function (response) {
				return response.json();
			}).then(function (users) {
				return _this.userList = users;
			});
		};

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
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('profile/profile',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Profile = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Profile = exports.Profile = function () {
        function Profile() {
            _classCallCheck(this, Profile);

            this.userList = [];
        }

        Profile.prototype.activate = function activate() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();

            client.fetch('http://localhost:8080/users/1').then(function (response) {
                return response.json();
            }).then(function (users) {
                return _this.userList = users;
            });
        };

        return Profile;
    }();
});
define('settings/settings',["exports", "aurelia-fetch-client"], function (exports, _aureliaFetchClient) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Settings = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Settings = exports.Settings = function () {
        function Settings() {
            _classCallCheck(this, Settings);

            this.userInfo = { "id": "1", "username": "testUser1" };
            this.userList = [];
        }

        Settings.prototype.activate = function activate() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();

            client.fetch('http://localhost:8080/users/1').then(function (response) {
                return response.json();
            }).then(function (users) {
                return _this.userList = users;
            });
        };

        Settings.prototype.sendUserSetInfo = function sendUserSetInfo() {
            var client = new _aureliaFetchClient.HttpClient();

            client.fetch('http://localhost:8080/users/updateInfo', {
                'method': "POST",
                'body': (0, _aureliaFetchClient.json)(this.userInfo)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("Server saatis " + data.profession);
            });

            console.log("Method executed!");
        };

        return Settings;
    }();
});
define('src/app',['exports'], function (exports) {
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
      config.title = 'photoFlat - parim platvorm sinule';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'people', name: 'people', moduleId: 'people/people', nav: true }, { route: 'profile', name: 'profile', moduleId: 'profile/profile', nav: true }, { route: 'event', name: 'event', moduleId: 'event/event', nav: true }, { route: 'settings', name: 'settings', moduleId: 'settings/settings', nav: true }, { route: 'createEvent', name: 'createEvent', moduleId: 'createEvent/createEvent', nav: true }]);
      config.mapUnknownRoutes('not-found');
    };

    return App;
  }();
});
define('src/environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('src/main',['exports', './environment'], function (exports, _environment) {
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
define('src/createEvent/createEvent',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CreateEvent = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CreateEvent = exports.CreateEvent = function () {
    function CreateEvent() {
      _classCallCheck(this, CreateEvent);

      this.eventData = {};

      this.appName = "aureliaphotoflat";
    }

    CreateEvent.prototype.createEvent = function createEvent() {
      var client = new _aureliaFetchClient.HttpClient();

      client.fetch('http://localhost:9000', {
        'method': POST,
        'body': (0, _aureliaFetchClient.json)(this.eventData)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {});
    };

    CreateEvent.prototype.chooseEventPicture = function chooseEventPicture(eventPicName) {
      document.getElementById("eventpicture").setAttribute("src", eventPicName);
    };

    return CreateEvent;
  }();
});
define('src/event/event',["exports"], function (exports) {
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
define('src/people/people',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
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
			this.userList = [];

			this.appName = "adPortal";
			this.count = 0;
		}

		people.prototype.activate = function activate() {
			var _this = this;

			var client = new _aureliaFetchClient.HttpClient();

			client.fetch('http://localhost:8080/users').then(function (response) {
				return response.json();
			}).then(function (users) {
				return _this.userList = users;
			});
		};

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
define('src/home/index',['exports'], function (exports) {
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
define('src/profile/profile',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Profile = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Profile = exports.Profile = function () {
        function Profile() {
            _classCallCheck(this, Profile);

            this.userList = [];
        }

        Profile.prototype.activate = function activate() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();

            client.fetch('http://localhost:8080/users/1').then(function (response) {
                return response.json();
            }).then(function (users) {
                return _this.userList = users;
            });
        };

        return Profile;
    }();
});
define('src/resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('src/settings/settings',["exports", "aurelia-fetch-client"], function (exports, _aureliaFetchClient) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Settings = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Settings = exports.Settings = function () {
        function Settings() {
            _classCallCheck(this, Settings);

            this.userInfo = { "id": "1", "username": "testUser1" };
            this.userList = [];
        }

        Settings.prototype.activate = function activate() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();

            client.fetch('http://localhost:8080/users/1').then(function (response) {
                return response.json();
            }).then(function (users) {
                return _this.userList = users;
            });
        };

        Settings.prototype.sendUserSetInfo = function sendUserSetInfo() {
            var client = new _aureliaFetchClient.HttpClient();

            client.fetch('http://localhost:8080/users/updateInfo', {
                'method': "POST",
                'body': (0, _aureliaFetchClient.json)(this.userInfo)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("Server saatis " + data.profession);
            });

            console.log("Method executed!");
        };

        return Settings;
    }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!createEvent/createEvent.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery.js\"></script><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"createEvent\"><div class=\"container box\"><div class=\"row\"><div class=\"col-xs-12 col-lg-6 col-md-6 col-sm-6\"><div class=\"conctact_pic\"><img src=\"pics/vali_pilt_moodus.jpg\" class=\"img-responsive center-block\" id=\"eventpicture\"></div><div class=\"info\"><div class=\"form-group\"><label for=\"form_email\" style=\"float:left\">Kontaktisik</label><input id=\"form_email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Sisesta email *\" required=\"required\" data-error=\"Sisestage email.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label for=\"form_place\" style=\"float:left\">Toimumiskoht</label><input id=\"form_place\" type=\"text\" name=\"place\" class=\"form-control\" placeholder=\"Sisesta toimumiskoht *\" required=\"required\" data-error=\"Sisestage toimumiskoht.\"><div class=\"help-block with-errors\"></div></div><div class=\"col-xs-12\"><div class=\"row\"><div class=\"form-group col-xs-6\" style=\"margin-bottom:0\"><label for=\"form_beginDate\" style=\"float:left;margin-bottom:0;text-align:center\">Alguskuupäev</label><br><input style=\"width:70%\" id=\"form_beginDate\" type=\"date\" name=\"beginDate\" class=\"form-control\" required=\"required\" data-error=\"Sisestage alguskuupäev.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group col-xs-6\" style=\"margin-bottom:0\"><label for=\"form_endDate\" style=\"float:left;margin-bottom:0;text-align:center;margin-left:30%\">Lõppkuupäev</label><br><input style=\"width:70%;margin-left:15%\" id=\"form_endDate\" type=\"date\" name=\"endDate\" class=\"form-control\" required=\"required\" data-error=\"Sisestage lõppkuupäev.\"><div class=\"help-block with-errors\"></div></div></div></div><div class=\"form-group\"><label for=\"form_eventName\" style=\"float:left\">Ürituse nimi</label><input id=\"form_eventName\" type=\"text\" name=\"eventName\" class=\"form-control\" placeholder=\"Sisesta ürituse nimi *\" required=\"required\" data-error=\"Sisestage ürituse nimi.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label for=\"form_message\" style=\"float:left\">Kirjuta üritusest</label><textarea id=\"form_message\" name=\"message\" class=\"form-control\" placeholder=\"Kirjuta *\" rows=\"4\" required=\"required\" data-error=\"Palun kirjeldage üritust .\"></textarea><div class=\"help-block with-errors\"></div><input type=\"submit\" class=\"btn btn-success btn-send\" value=\"Loo üritus\"></div></div></div><div class=\"col-xs-12 col-lg-6 col-md-6 col-sm-6\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/abielu_moodus.jpg')\" class=\"img-responsive\" src=\"../pics/abielu_moodus.jpg\" alt=\"\"></div><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/autopilt_moodus.jpg')\" class=\"img-responsive\" src=\"pics/autopilt_moodus.jpg\" alt=\"\"></div><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/sunnipaev_moodus.jpg')\" class=\"img-responsive\" src=\"pics/sunnipaev_moodus.jpg\" alt=\"\"></div><div click.delegate=\"chooseEventPicture('pics/pidu_moodus.jpg')\" class=\"col-xs-6 portfolio-item choosePic\"><img class=\"img-responsive\" src=\"pics/pidu_moodus.jpg\" alt=\"\"></div><div click.delegate=\"chooseEventPicture('pics/stuudio_moodus.jpg')\" class=\"col-xs-6 portfolio-item choosePic\"><img class=\"img-responsive\" src=\"pics/stuudio_moodus.jpg\" alt=\"\"></div><div click.delegate=\"chooseEventPicture('pics/varia_moodus.jpg')\" class=\"col-xs-6 portfolio-item choosePic\"><img class=\"img-responsive\" src=\"pics/varia_moodus.jpg\" alt=\"\"></div></div></div></div></div><footer><div class=\"row\" style=\"margin-left:0;margin-right:0\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!event/event.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery.js\"></script><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"adds\"><div class=\"container\"><div class=\"col-xs-12\"><div class=\"row\"><div class=\"col-xs-12 box\"><div class=\"\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/wedding.jpg\" alt=\"\" style=\"height:350px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><p></p><h5 class=\"text-center contact_info\">Viimased hinnapakkumised</h5><p></p><div class=\"col-xs-6\" style=\"overflow:scroll;overflow-x:hidden;max-height:200px;text-align:center;color:#717171;font-size:18px;padding-bottom:15px;padding-top:10px\"><p><a href=\"#profile\">Ahto Jalakas</a> pakkus hinnaks 500$</p><p><a href=\"#profile\">Ahto Malakas</a> pakkus hinnaks 600$</p><p><a href=\"#profile\">Mari Mops</a> pakkus hinnaks 300$</p><p><a href=\"#profile\">Muri Jeesus</a> pakkus hinnaks 200$</p><p><a href=\"#profile\">Muri Jeesus</a> pakkus hinnaks 200$</p><p><a href=\"#profile\">Muri Jeesus</a> pakkus hinnaks 200$</p></div><div class=\"info col-xs-6 text-center\"><form method=\"post\" style=\"margin-top:45px;color:#717171;font-size:22px;padding-top:10px\">Paku hind: <input style=\"border-radius:15px;width:25%;text-align:center\" type=\"number\" name=\"pakuHind\">€</form><br><a href=\"\" class=\"btn-lg\">Kinnita pakkumine</a> <a href=\"\" class=\"btn-lg\">Tagasi</a></div></div></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!event/index.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery-3.1.1.min.js\"></script><link href=\"font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"adds\"><div class=\"container\" style=\"max-height:700px\"><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section><script src=\"js/jquery-3.1.1.min.js\"></script><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery-3.1.1.min.js\"></script><link href=\"font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"adds\"><div class=\"container\" style=\"max-height:700px\"><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/bday.jpg\" alt=\"\" style=\"height:300px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/wedding.jpg\" alt=\"\" style=\"height:300px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/photoshoot.jpg\" alt=\"\" style=\"height:300px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/funeral.jpg\" alt=\"\" style=\"height:300px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section><script src=\"js/jquery-3.1.1.min.js\"></script><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!people/people.html', ['module'], function(module) { module.exports = "<template>Hei! ${appName} kasutajaid on praegu ${count}<form id=\"userform\" submit.delegate=\"addUser()\"><div><label for=\"firstName\">First name</label><input id=\"firstName\" type=\"text\" name=\"firstName\" value.bind=\"userData.firstName\"></div><div><label for=\"lastName\">Last name</label><input id=\"lastName\" type=\"text\" name=\"lastName\" value.bind=\"userData.lastName\"></div><div><label for=\"numOfPets\">Num of pets</label><input id=\"numOfPets\" type=\"number\" name=\"numOfPets\" value.bind=\"userData.numOfPets\"></div><input type=\"submit\" name=\"Lisa kasutaja\"></form></template>"; });
define('text!profile/profile.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><link href=\"css/profile.css\" rel=\"stylesheet\"><link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"><div class=\"boxprofile\"><div class=\"row\"><div class=\"col-sm-4 col-xs-12 col-lg-4\"><img src=\"pics/fotograaf_moodus600x600.jpg\" class=\"img-responsive profile-pic\" style=\"\"></div><div class=\"col-sm-8 col-xs-12 col-lg-8 user-info text-left\"><h5>Nimi: <span id=\"name\">${userList.username}</span></h5><h5>Amet: <span id=\"name\">${userList.profession}</span></h5><h5>E-mail: <span id=\"name\">${userList.userEmail}</span></h5><h5>Number: <span id=\"name\">${userList.phoneNumber}</span></h5><h5>Endast:</h5><div class=\"info-box\">${userList.description}</div><button class=\"btn btn-primary center-block\" style=\"margin:5px\">Vaata kodulehte</button> <a href=\"#settings\"><button class=\"btn btn-primary center-block\" style=\"margin:5px\">Seaded</button></a></div></div></div></div><div class=\"col-xs-12 col-lg-12\"><div class=\"row\"><div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"><div class=\"\"><img src=\"pics/portfolio-1.jpg\" class=\"img-responsive pilt center-block\"></div></div><div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"><div class=\"\"><img src=\"pics/portfolio-3.jpg\" class=\"img-responsive pilt center-block\"></div></div><div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"><div class=\"\"><img src=\"pics/portfolio-4.jpg\" class=\"img-responsive pilt center-block\"></div></div><div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"><div class=\"\"><img src=\"pics/portfolio-5.jpg\" class=\"img-responsive pilt center-block\"></div></div><div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"><div class=\"\"><img src=\"pics/portfolio-2.jpg\" class=\"img-responsive pilt center-block\"></div></div></div></div></body><footer><div class=\"row\" style=\"margin-left:0;margin-right:0\"><div class=\"col-xs-12 text-center\" style=\"margin-top:20px\"><div>Copyright &copy; photoFlat 2017</div></div></div></footer></html></template>"; });
define('text!settings/settings.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><link href=\"css/profile.css\" rel=\"stylesheet\"><link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#event\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"usersettings\"><div class=\"container\" class=\"purpletowhite\"><div class=\"controls\" style=\"margin-top:50px\"><div class=\"row\"><div class=\"col-xs-12 box\"><form submit.delegate=\"sendUserSetInfo()\"><div class=\"col-xs-12 col-lg-6\"><div class=\"form-group\"><label for=\"form_name\">Amet * ${userInfo.profession}</label><input id=\"profession\" type=\"text\" name=\"profession\" value.bind=\"userInfo.profession\" class=\"form-control\" placeholder=\"Sisestage eesnimi *\" required=\"required\" data-error=\"Firstname is required.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label class=\"control-label\">Lae üles profiilipilt</label><input id=\"input-4\" name=\"input4[]\" type=\"file\" multiple=\"multiple\" class=\"file-loading\"><script>$(document).on(\"ready\",function(){$(\"#input-4\").fileinput({showCaption:!1})})</script></div><div class=\"form-group\"><label for=\"form_phone\">Telefon</label><input id=\"phoneNumber\" type=\"text\" name=\"phoneNumber\" value.bind=\"userInfo.phoneNumber\" class=\"form-control\" placeholder=\"Sisesta telefoninumber\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label for=\"form_email\">Email *</label><input id=\"userEmail\" type=\"text\" name=\"userEmail\" value.bind=\"userInfo.userEmail\" class=\"form-control\" placeholder=\"Sisesta email *\" required=\"required\" data-error=\"Valid email is required.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label for=\"form_message\">Endast *</label><textarea id=\"description\" type=\"text\" name=\"description\" value.bind=\"userInfo.description\" class=\"form-control\" placeholder=\"Kirjuta *\" rows=\"4\" required=\"required\" data-error=\"Please,leave us a message.\"></textarea><div class=\"help-block with-errors\"></div><input type=\"submit\" class=\"btn btn-success btn-send\" value=\"Seadista\"><p></p><h3>Kasutajad</h3><ul><li>${userList.profession} ${userList.username}</li></ul><p></p></div></div></form><div class=\"col-xs-12 col-lg-6\"><label>Täida portfooliot</label><form submit.delegate=\"doUpload()\"><input id=\"files\" type=\"file\" accept=\".xlsx\" files.bind=\"selectedFiles\" class=\"form-control\"> <input type=\"submit\" class=\"btn btn-primary\" value=\"Upload\" if.bind=\"selectedFiles.length > 0\"></form></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section></body></html></template>"; });
define('text!src/app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!src/createEvent/createEvent.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery.js\"></script><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"createEvent\"><div class=\"container box\"><div class=\"row\"><div class=\"col-xs-12 col-lg-6\"><form id=\"eventform\" method=\"post\" action=\"http://localhost:9000/createEvent\"><div class=\"conctact_pic\"><img id=\"eventpicture\" src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><div class=\"form-group\"><label for=\"form_email\" style=\"float:left\">Kontaktisik</label><input value.bind=\"eventData.email\" id=\"form_email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Sisesta email *\" required=\"required\" data-error=\"Sisestage email.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label for=\"form_place\" style=\"float:left\">Toimumiskoht</label><input value.bind=\"eventData.place\" id=\"form_place\" type=\"text\" name=\"place\" class=\"form-control\" placeholder=\"Sisesta toimumiskoht *\" required=\"required\" data-error=\"Sisestage toimumiskoht.\"><div class=\"help-block with-errors\"></div></div><div class=\"col-xs-12\"><div class=\"row\"><div class=\"form-group col-xs-6\" style=\"margin-bottom:0\"><label for=\"form_beginDate\" style=\"float:left;margin-bottom:0;text-align:center;margin-left:30%\">Alguskuupäev</label><br><input style=\"width:70%;margin-left:15%\" value.bind=\"eventData.beginDate\" id=\"form_beginDate\" type=\"date\" name=\"beginDate\" class=\"form-control\" required=\"required\" data-error=\"Sisestage alguskuupäev.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group col-xs-6\" style=\"margin-bottom:0\"><label for=\"form_endDate\" style=\"float:left;margin-bottom:0;text-align:center;margin-left:30%\">Lõppkuupäev</label><br><input style=\"width:70%;margin-left:15%\" value.bind=\"eventData.endDate\" id=\"form_endDate\" type=\"date\" name=\"endDate\" class=\"form-control\" required=\"required\" data-error=\"Sisestage lõppkuupäev.\"><div class=\"help-block with-errors\"></div></div></div></div><div class=\"form-group\"><label for=\"form_eventName\" style=\"float:left\">Ürituse nimi</label><input value.bind=\"eventData.eventName\" id=\"form_eventName\" type=\"text\" name=\"eventName\" class=\"form-control\" placeholder=\"Sisesta ürituse nimi *\" required=\"required\" data-error=\"Sisestage ürituse nimi.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label for=\"form_message\" style=\"float:left\">Kirjuta üritusest</label><textarea value.bind=\"eventData.message\" id=\"form_message\" name=\"message\" class=\"form-control\" placeholder=\"Kirjuta *\" rows=\"4\" required=\"required\" data-error=\"Palun kirjeldage üritust .\"></textarea><div class=\"help-block with-errors\"></div><input type=\"submit\" class=\"btn btn-success btn-send\" value=\"Loo üritus\"></div></div></form></div><div class=\"col-xs-12 col-lg-6\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/funeral.jpg')\" class=\"img-responsive\" src=\"../pics/funeral.jpg\" id=\"funeral\" alt=\"\" style=\"margin-top:5%\"></div><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/wedding.jpg')\" class=\"img-responsive\" src=\"pics/wedding.jpg\" alt=\"\" id=\"wedding\" style=\"margin-top:5%\"></div><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/bday.jpg')\" class=\"img-responsive\" src=\"pics/bday.jpg\" id=\"bday\" alt=\"\"></div><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/party.jpg')\" class=\"img-responsive\" src=\"pics/party.jpg\" id=\"party\" alt=\"\"></div><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/varia.jpg')\" class=\"img-responsive\" src=\"pics/varia.jpg\" id=\"varia\" alt=\"\" style=\"height:158px\"></div><div class=\"col-xs-6 portfolio-item choosePic\"><img click.delegate=\"chooseEventPicture('pics/photoshoot.jpg')\" class=\"img-responsive\" src=\"pics/photoshoot.jpg\" id=\"photoshoot\" alt=\"\" style=\"height:158px;width:237.5px\"></div></div></div></div></div><footer><div class=\"row\" style=\"margin-left:0;margin-right:0\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!src/event/event.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery.js\"></script><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"adds\"><div class=\"container\"><div class=\"col-xs-12\"><div class=\"row\"><div class=\"col-xs-12 box\"><div class=\"\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/wedding.jpg\" alt=\"\" style=\"height:350px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><p></p><h5 class=\"text-center contact_info\">Viimased hinnapakkumised</h5><p></p><div class=\"col-xs-6\" style=\"overflow:scroll;overflow-x:hidden;max-height:200px;text-align:center;color:#717171;font-size:18px;padding-bottom:15px;padding-top:10px\"><p><a href=\"#profile\">Ahto Jalakas</a> pakkus hinnaks 500$</p><p><a href=\"#profile\">Ahto Malakas</a> pakkus hinnaks 600$</p><p><a href=\"#profile\">Mari Mops</a> pakkus hinnaks 300$</p><p><a href=\"#profile\">Muri Jeesus</a> pakkus hinnaks 200$</p><p><a href=\"#profile\">Muri Jeesus</a> pakkus hinnaks 200$</p><p><a href=\"#profile\">Muri Jeesus</a> pakkus hinnaks 200$</p></div><div class=\"info col-xs-6 text-center\"><form method=\"post\" style=\"margin-top:45px;color:#717171;font-size:22px;padding-top:10px\">Paku hind: <input style=\"border-radius:15px;width:25%;text-align:center\" type=\"number\" name=\"pakuHind\">€</form><br><a href=\"\" class=\"btn-lg\">Kinnita pakkumine</a> <a href=\"\" class=\"btn-lg\">Tagasi</a></div></div></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!src/event/index.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery-3.1.1.min.js\"></script><link href=\"font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"adds\"><div class=\"container\" style=\"max-height:700px\"><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section><script src=\"js/jquery-3.1.1.min.js\"></script><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!src/home/index.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><script src=\"js/jquery-3.1.1.min.js\"></script><link href=\"font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"adds\"><div class=\"container\" style=\"max-height:700px\"><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/bday.jpg\" alt=\"\" style=\"height:300px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/wedding.jpg\" alt=\"\" style=\"height:300px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><div class=\"col-md-6 col-xs-12\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/photoshoot.jpg\" alt=\"\" style=\"height:300px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img class=\"img-responsive center-block\" src=\"pics/funeral.jpg\" alt=\"\" style=\"height:300px\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta!</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div><div class=\"col-xs-12\"><div class=\"box\"><div class=\"conctact_pic\"><img src=\"http://placehold.it/350x150\" class=\"img-responsive center-block\"></div><div class=\"info\"><h5 class=\"text-center contact_info\">23.02.17 Pulm Fotograafi Login Loginovich 533258137</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor solutaLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque, tenetur quam aspernatur corporis at explicabo nulla dolore necessitatibus doloremque exercitationem sequi dolorem architecto perferendis quas aperiam debitis dolor soluta</p><a href=\"#event\" class=\"btn\">Loe rohkem</a></div></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section><script src=\"js/jquery-3.1.1.min.js\"></script><script src=\"js/bootstrap.min.js\"></script><script src=\"js/jquery.easing.min.js\"></script><script src=\"js/scrolling-nav.js\"></script><script src=\"js/style.js\"></script></body></html></template>"; });
define('text!src/people/people.html', ['module'], function(module) { module.exports = "<template>Hei! ${appName} kasutajaid on praegu ${count}<form id=\"userform\" submit.delegate=\"addUser()\"><div><label for=\"firstName\">First name</label><input id=\"firstName\" type=\"text\" name=\"firstName\" value.bind=\"userData.firstName\"></div><div><label for=\"lastName\">Last name</label><input id=\"lastName\" type=\"text\" name=\"lastName\" value.bind=\"userData.lastName\"></div><div><label for=\"numOfPets\">Num of pets</label><input id=\"numOfPets\" type=\"number\" name=\"numOfPets\" value.bind=\"userData.numOfPets\"></div><input type=\"submit\" name=\"Lisa kasutaja\"></form></template>"; });
define('text!src/profile/profile.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><link href=\"css/profile.css\" rel=\"stylesheet\"><link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#createEvent\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><div class=\"col-xs-12 col-lg-4\"><div class=\"box\"><div class=\"row\"><div class=\"col-xs-12\"><img src=\"http://placehold.it/350x150\" class=\"profile-pic\" style=\"padding:0\"> <a href=\"#settings\"><button class=\"btn btn-primary text-right\">Seaded</button></a></div></div><div class=\"row\"><div class=\"col-xs-12 user-info text-left\"><div class=\"col-xs-12\"><h5>Nimi: <span id=\"name\">${userList.username}</span></h5><h5>Amet: <span id=\"name\">${userList.profession}</span></h5><h5>E-mail: <span id=\"name\">${userList.userEmail}</span></h5><h5>E-mail: <span id=\"name\">${userList.phoneNumber}</span></h5><h5>Endast:</h5><div class=\"info-box\">${userList.description}</div></div></div></div></div><div class=\"btn btn-primary text-center\" style=\"margin-top:20px\">Vaata täis portfooliot</div></div><div class=\"col-xs-12 col-lg-4\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"port-box\"><img src=\"pics/portfolio-1.jpg\" class=\"img-responsive center-block\"></div></div><div class=\"col-xs-12\"><div class=\"port-box\"><img src=\"pics/portfolio-2.jpg\" class=\"img-responsive center-block\"></div></div></div></div><div class=\"col-xs-12 col-lg-4\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"port-box\"><img src=\"pics/maja1.png\" class=\"img-responsive center-block\"></div></div><div class=\"col-xs-12\"><div class=\"port-box\"><img src=\"pics/portfolio-3.jpg\" class=\"img-responsive center-block\"></div></div></div></div><footer><div class=\"row\" style=\"margin-left:0;margin-right:0\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></body></html></template>"; });
define('text!src/settings/settings.html', ['module'], function(module) { module.exports = "<template><!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Photoflat</title><link href=\"css/bootstrap.css\" rel=\"stylesheet\"><link href=\"css/4-col-portfolio.css\" rel=\"stylesheet\"><link href=\"css/scrolling-nav.css\" rel=\"stylesheet\"><link href=\"css/main.css\" rel=\"stylesheet\"><link href=\"css/boxes.css\" rel=\"stylesheet\"><link href=\"css/profile.css\" rel=\"stylesheet\"><link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script>function collapseNavbar(){$(\".navbar\").offset().top>50?$(\".navbar-fixed-top\").addClass(\"top-nav-collapse\"):$(\".navbar-fixed-top\").removeClass(\"top-nav-collapse\")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){$(\"a.page-scroll\").bind(\"click\",function(a){var l=$(this);$(\"html, body\").stop().animate({scrollTop:$(l.attr(\"href\")).offset().top},1500,\"easeInOutExpo\"),a.preventDefault()})}),$(\".navbar-collapse ul li a\").click(function(){$(this).closest(\".collapse\").collapse(\"toggle\")})</script></head><body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-fixed-top\"><nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">Menüü <i class=\"fa fa-bars\"></i></button> <a class=\"navbar-brand page-scroll\" href=\"#\"><span class=\"light\"></span><a href=\"#\"><img class=\"img-responsive logo\" src=\"pics/photoFlat.png\"></a></a></div><div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"><ul class=\"nav navbar-nav\"><li class=\"hidden\"><a href=\"#page-top\"></a></li><li><a class=\"page-scroll\" href=\"#event\"><button class=\"btn btn-success text-right\">Loo üritus</button></a></li><li><a class=\"page-scroll smallcolor\" href=\"#profile\"><button class=\"btn btn-primary text-right\">Minu konto</button></a></li></ul></div></div></nav><section id=\"usersettings\"><div class=\"container\" class=\"purpletowhite\"><div class=\"controls\" style=\"margin-top:50px\"><div class=\"row\"><div class=\"col-xs-12 box\"><form submit.delegate=\"sendUserSetInfo()\"><div class=\"col-xs-12 col-lg-6\"><div class=\"form-group\"><label for=\"form_name\">Amet * ${userInfo.profession}</label><input id=\"profession\" type=\"text\" name=\"profession\" value.bind=\"userInfo.profession\" class=\"form-control\" placeholder=\"Sisestage eesnimi *\" required=\"required\" data-error=\"Firstname is required.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label class=\"control-label\">Lae üles profiilipilt</label><input id=\"input-4\" name=\"input4[]\" type=\"file\" multiple=\"multiple\" class=\"file-loading\"><script>$(document).on(\"ready\",function(){$(\"#input-4\").fileinput({showCaption:!1})})</script></div><div class=\"form-group\"><label for=\"form_phone\">Telefon</label><input id=\"phoneNumber\" type=\"text\" name=\"phoneNumber\" value.bind=\"userInfo.phoneNumber\" class=\"form-control\" placeholder=\"Sisesta telefoninumber\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label for=\"form_email\">Email *</label><input id=\"userEmail\" type=\"text\" name=\"userEmail\" value.bind=\"userInfo.userEmail\" class=\"form-control\" placeholder=\"Sisesta email *\" required=\"required\" data-error=\"Valid email is required.\"><div class=\"help-block with-errors\"></div></div><div class=\"form-group\"><label for=\"form_message\">Endast *</label><textarea id=\"description\" type=\"text\" name=\"description\" value.bind=\"userInfo.description\" class=\"form-control\" placeholder=\"Kirjuta *\" rows=\"4\" required=\"required\" data-error=\"Please,leave us a message.\"></textarea><div class=\"help-block with-errors\"></div><input type=\"submit\" class=\"btn btn-success btn-send\" value=\"Seadista\"><p></p><h3>Kasutajad</h3><ul><li>${userList.profession} ${userList.username}</li></ul><p></p></div></div></form><div class=\"col-xs-12 col-lg-6\"><label>Täida portfooliot</label><form submit.delegate=\"doUpload()\"><input id=\"files\" type=\"file\" accept=\".xlsx\" files.bind=\"selectedFiles\" class=\"form-control\"> <input type=\"submit\" class=\"btn btn-primary\" value=\"Upload\" if.bind=\"selectedFiles.length > 0\"></form></div></div></div></div><footer><div class=\"row\"><div class=\"col-lg-12 text-center\"><br><p>Copyright &copy; photoFlat 2017</p></div></div></footer></div></section></body></html></template>"; });
//# sourceMappingURL=app-bundle.js.map