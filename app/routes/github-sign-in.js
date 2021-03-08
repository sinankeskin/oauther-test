import Oauth2CodeSignInRoute from 'ember-oauther/routes/oauth2-code-sign-in';

export default class GithubSignInRoute extends Oauth2CodeSignInRoute {
  providerName = 'github';

  model(params) {
    // this.getAccessToken(params).then((accessToken) => {
    //   console.log(accessToken);
    // });

    this.getUserInformation(params).then((data) => {
      console.log(data);
    });
  }
}
