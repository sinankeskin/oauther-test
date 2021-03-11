import Oauth2CodeSignInRoute from 'ember-oauther/routes/oauth2-code-sign-in';

export default class LinkedinSignInRoute extends Oauth2CodeSignInRoute {
  model(params) {
    params.provider = 'linkedin';
    // this.getAccessToken(params).then((accessToken) => {
    //   console.log(accessToken);
    // });

    this.getUserInformation(params).then((data) => {
      console.log(data);
    });
  }
}
