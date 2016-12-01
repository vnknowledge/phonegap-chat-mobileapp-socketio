# Project demo chat realtime app on multi-device using node.js, expressjs, socket.io and apache cordova build up.

  1. On iOS and Browser just used socket.io and jquery, I think it just enough for demo
  2. On android we need use plugin for by pass security **WebView**. Plugin I use on this link: [plugin-socket.io](https://github.com/wf9a5m75/plugin-socket.io)

## Attention:
  1. Use CORS and import **Content-Policy** index.html in two project into client folder:

    ```html
        <meta http-equiv="Content-Security-Policy" content="default-src * gap: ws: https://ssl.gstatic.com;img-src 'self' data: content:;style-src 'self' 'unsafe-inline' data: blob:;script-src * 'unsafe-inline' 'unsafe-eval' data: blob:;">
    ```    
    
  2. Use CORS into express server:
  ```javascript
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  ```
    
  
