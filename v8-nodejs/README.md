V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

Firefox has SpiderMonkey
Safari has JavaScriptCore (also called Nitro)
Edge was originally based on Chakra but has more recently been rebuilt using Chromium and the V8 engine.

V8 is written in C++.

JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.
This has been happening since 2009, when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea.
JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.
