import React from 'react';
import { stripIndent } from 'common-tags';

exports.onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  return setPreBodyComponents([
    (<script
      key={`gatsby-plugin-facebook-sdk`}
      dangerouslySetInnerHTML={{
        __html: stripIndent`
          fbAsyncInit = function() {
            FB.init(${JSON.stringify(pluginOptions)});
          };

          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/it_IT/xfbml.customerchat.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}}
      />),
  ]);
};
