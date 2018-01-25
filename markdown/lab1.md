# Lab1

## 1. Definitions

### HTML (Hypertext Markup Language)

HTML is a markup language is an open standard meant for structuring documents containing hyperlinks (hypertext).

### CSS (Cascading Style Sheets)

When HTML is concerned about the structure of the document, CSS is in charge of giving the document it's appearance. It is a declarative programming language that manipulates nodes of the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) in appearance using [selectors](https://www.w3schools.com/cssref/css_selectors.asp) and [properties](https://www.w3schools.com/cssref/default.asp). It can also achieve some dynamic aspects to the document for example using :hover selectors.

### Javascript

JavaScript (JS) is implementation of [EcmaScript standard (ES)](https://www.ecma-international.org/publications/standards/Ecma-262.htm), an interpreted scripting language first designed by Brendan Eich. It was long the only programming language natively supported by browsers (now there is also WebAssembly), but there are languages that compile to JS such as [TypeScript](https://www.typescriptlang.org/), [Dart](https://babeljs.io/)(optionally) and [Babel](https://babeljs.io/) (new EcmaScript(ES) features translated to ES5 or whatever the developer wishes).

All browsers don't implement the same ES features, but the support comes gradually. That is why it is needed to compile newer features with Babel. The newest version of EcmaScript right now is ES2017 (ES8).

JavaScript supports multiple programming paradigms such as
- Object-oriented programming through prototypal inheritance
- Functional programming that is being emphasized in later versions (ES2015 onwards)
- Imperative programming


### HTTP (Hypertext Transfer Protocol)

HTTP is a protocol that is used to transmit documents between computers. The documents can be for example HTML documents between browser and server or [JSON](https://www.json.org/)/[XML](https://www.w3.org/XML/) objects transfered from/to server using JavaScript. Client is always to one initiating the contact and server responds contrary to for example [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

### HTML5

[HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) is the newest version of the HTML standard. It has numerous new features, for example video embeds, WebSockets and Web Workers.

### Dynamic HTML (DHTML)

DHTML is a collection of tools that are used to make the document dynamic using only client side programming (no additional requests). Techniques involve for example using above mentioned :hover selectors in CSS and JavaScript manipulation using event handlers (for example onclick event that is triggered when the element is clicked). 

## 2. Coding conventions

OK, this may sound boring but coding conventions are really important when you are doing code professionally. Make yourself familiar what this actually means in practice.
Here is a generic definition: https://en.wikipedia.org/wiki/Coding_conventions

Find conventions from for html / css / is from Internet which you are going to use on this course. Like: http://codeguide.co/
And from now on, use these conventions every time you write html. If your code does not follow the conventions, you can not pass this course.

## 3. HTML5

a. Create a simple HTML5 document. Please do not copy paste, and remember to follow coding conventions. 
You can find an example from here: https://www.w3.org/TR/html5/single-page.html#a-quick-introduction-to-html 
The document linked above actually is an official specification of the HTML version 5. Browse through the 
document and store the link to your bookmarks. It can be valuable later on.

b. Modify previous document so that you will have an

  - external style sheet file (.css) with styles
  
  - external Javascript file (.js)

Both of these files should be linked and used in .html file.

## 4. Developer tools

Every modern browser contains nowadays developer tools. Find how you can activate
these tools for the browser you are using. Get yourself familiar at least with the inspector
and the Javascript console.

5. Dynamic HTML

[Link to CodePen](https://codepen.io/sirjuan/pen/aEgNrW)
