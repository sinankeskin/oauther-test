'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'oauther-test',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV['ember-oauther'] = {
    popup: false,
    popupOptions: {
      width: 640,
      heigth: 480,
    },
    twitter: {
      consumerKey: '...',
      consumerSecret: '...',
      redirectUri: 'https://localhost:4200/twitter-sign-in',
      includeEmail: true,
      requestTokenEndpoint: {
        useCorsProxy: true,
      },
      accessTokenEndpoint: {
        useCorsProxy: true,
      },
      userInformationEndpoint: {
        useCorsProxy: true,
      },
    },
    google: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/google-sign-in?provider=google',
      scope: 'profile email',
    },
    microsoft: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/microsoft-sign-in',
      tenantId: '...',
      scope: 'https://graph.microsoft.com/user.read',
    },
    facebook: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/facebook-sign-in',
      apiVersion: 'v10.0',
      scope: 'email',
      fields: 'name,email',
    },
    instagram: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/instagram-sign-in',
      scope: 'user_profile',
      fields: 'id,username',
      tokenEndpoint: {
        useCorsProxy: true,
      },
      userInformationEndpoint: {
        useCorsProxy: true,
      },
    },
    yandex: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/yandex-sign-in',
      scope: 'login:birthday login:email login:info login:avatar',
      userInformationEndpoint: {
        useCorsProxy: true,
      },
    },
    github: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/github-sign-in',
      scope: 'user:email',
      tokenEndpoint: {
        useCorsProxy: true,
      },
    },
    linkedin: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/linkedin-sign-in',
      scope: 'r_liteprofile,r_emailaddress',
      tokenEndpoint: {
        useCorsProxy: true,
      },
      userInformationEndpoint: {
        useCorsProxy: true,
      },
    },
    twitch: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/twitch-sign-in',
      scope: 'user:read:email',
      forceVerify: 'false',
    },
    stackexchange: {
      clientId: '...',
      clientSecret: '...',
      redirectUri: 'https://localhost:4200/stackexchange-sign-in',
      site: 'stackoverflow',
      key: '...',
      scope: '',
      tokenEndpoint: {
        useCorsProxy: true,
      },
      userInformationEndpoint: {
        useCorsProxy: true,
      },
    },
  };

  return ENV;
};
