import Oauth1SignInRoute from 'ember-oauther/routes/oauth1-sign-in';

export default class TwitterSignInRoute extends Oauth1SignInRoute {
  model(params) {
    params.provider = 'twitter';
    // this.getAccessToken(params).then((accessToken) => {
    //   console.log('oauth_token', accessToken.oauth_token);
    //   console.log('oauth_token_secret', accessToken.oauth_token_secret);
    //   console.log('user_id', accessToken.user_id);
    //   console.log('screen_name', accessToken.screen_name);
    // });

    this.getUserInformation(params).then((data) => {
      console.log(data);
    });
  }
}
