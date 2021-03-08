import Oauth2CodeSignInRoute from 'ember-oauther/routes/oauth2-code-sign-in';

export default class FacebookSignInRoute extends Oauth2CodeSignInRoute {
  providerName = 'facebook';

  model(params) {
    // this.getAccessToken(params).then((accessToken) => {
    //   console.log(accessToken);
    // });

    this.getUserInformation(params).then((data) => {
      console.log(data);
    });
  }
}
