# Let's Add a Service Worker
## What could go wrong?

Welcome to this brief tutorial on creating your first service worker, deliberately making a few mistakes along the way.

We'll examine the results of these mistakes and then, of course, fix them.

### 1. Clone this repo

To start, clone this repo:

```bash
$ git clone git@github.com:louiseswift/learn-service-worker-mistakes.git
$ cd learn-service-worker-mistakes

# install http-server if you need to:
# https://www.npmjs.com/package/http-server

$ http-server -p 1234
```

Now you can open http://localhost:1234 in your browser.

### 2. Add initial service worker code

IMPORTANT: If you're refreshing the demo page to see the new log messages in the console for each step below, you may notice that something "isn't working". If so, the first step is to go to Application > Service Workers (in Dev Tools) and check whether the latest version of your service worker is actually 'waiting to activate'. If so, click 'skipWaiting' and refresh to see your latest service worker changes take effect.


