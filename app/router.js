import EmberRouter from '@ember/routing/router';
import config from 'oauther-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('google-sign-in');
  this.route('microsoft-sign-in');
  this.route('facebook-sign-in');
  this.route('github-sign-in');
  this.route('linkedin-sign-in');
  this.route('twitch-sign-in');
  this.route('stackexchange-sign-in');
  this.route('instagram-sign-in');
  this.route('yandex-sign-in');
  this.route('twitter-sign-in');
});
