export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'My Aurelia äpp';

    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
      { route: 'people', name: 'people',  moduleId: 'people/people',   nav: true },
      { route: 'profile', name: 'profile',  moduleId: 'profile/profile',   nav: true },
      { route: 'event', name: 'event',  moduleId: 'event/event',   nav: true }

    ]);
    config.mapUnknownRoutes('not-found');
  }

}
