
const FacebookInstall = async () => {
    // wait for facebook sdk to initialize before starting the react app
    const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
    console.log(facebookAppId);
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v8.0'
      });

      // // auto authenticate with the api if already logged in with facebook
      // window.FB.getLoginStatus(({ authResponse }) => {
      //   if (authResponse) {
      //     console.log(authResponse);
      //   } else {
      //     console.log('nothing');
      //   }
      // });
    };

    // load facebook sdk script
    (function (d, id) {
      var s = 'script';
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement('script'); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs?.parentNode?.insertBefore(js, fjs);
    }(document, 'facebook-jssdk'));
}

export default FacebookInstall;
