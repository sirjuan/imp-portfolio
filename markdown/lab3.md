# Lab 3: Javascript APIs for interactive multimedia applications

## 1. Web Sockets

I have once tried WebSocket before. I mixed a couple of tutorials together and built [backend](https://github.com/sirjuan/chat-backend) with Node and [front](https://github.com/sirjuan/chat-frontend) with
React using [TypeScript](https://www.typescriptlang.org/).

**Read [this article](http://www.html5rocks.com/en/tutorials/websockets/basics/). What kind of problems web sockets
solve? In what kind of situations you should use them?**

WebSocket is great if you need your server to have ability to broadcast data instead of user (or client software) having
to initiate contact which leads to more latency. Chat applications like below is the most obvious situation where
WebSocket is crucial.

Other use cases are for example (taken from the article):

* Multiplayer online games
* Chat applications
* Live sports ticker
* Realtime updating social streams

<p data-height="332" data-theme-id="0" data-slug-hash="PQYmKj" data-default-tab="js,result" data-user="sirjuan" data-embed-version="2" data-pen-title="WebSocket Excercise" class="codepen">See the Pen <a href="https://codepen.io/sirjuan/pen/PQYmKj/">WebSocket Excercise</a> by Juha Pekkarinen (<a href="https://codepen.io/sirjuan">@sirjuan</a>) on <a href="https://codepen.io">CodePen</a>.</p>

**What happens if you send a message: ”LOGO”?**

(づ｡◕‿‿◕｡)づ

## 2. Local Storage

This was quite fun exercise. I took the [live coding scripts](https://github.com/oamk-veikko/Interactive_Multimedia_2018/tree/master/live_coding/2018_1_15) as a base and
created my own mini-[Redux](https://redux.js.org/). I also decided to [avoid constructors and instead opted for factory functions](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e) utilizing [closures](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36) instead of 'this'.

<p data-height="265" data-theme-id="0" data-slug-hash="LewKvm" data-default-tab="js,result" data-user="sirjuan" data-embed-version="2" data-pen-title="Person List MVC" class="codepen">See the Pen <a href="https://codepen.io/sirjuan/pen/LewKvm/">Person List MVC</a> by Juha Pekkarinen (<a href="https://codepen.io/sirjuan">@sirjuan</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## 3. Audio element

<p data-height="265" data-theme-id="0" data-slug-hash="ZrzXBq" data-default-tab="css,result" data-user="sirjuan" data-embed-version="2" data-pen-title="Bassoradio Streamer" class="codepen">See the Pen <a href="https://codepen.io/sirjuan/pen/ZrzXBq/">Bassoradio Streamer</a> by Juha Pekkarinen (<a href="https://codepen.io/sirjuan">@sirjuan</a>) on <a href="https://codepen.io">CodePen</a>.</p>
