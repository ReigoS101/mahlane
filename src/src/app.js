export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'photoFlat - parim platvorm sinule';

    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
      { route: 'people', name: 'people',  moduleId: 'people/people',   nav: true },
      { route: 'profile', name: 'profile',  moduleId: 'profile/profile',   nav: true },
      { route: 'event', name: 'event',  moduleId: 'event/event',   nav: true },
      { route: 'settings', name: 'settings',  moduleId: 'settings/settings',   nav: true },
      { route: 'createEvent', name: 'createEvent',  moduleId: 'createEvent/createEvent',   nav: true }

    ]);
    config.mapUnknownRoutes('not-found');
  }

}
