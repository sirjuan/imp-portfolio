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

### JavaScript

I'm going to use [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with some personal modifications:

```
{
  "extends": "airbnb",
  "rules": {
    "func-names": ["error", "never"], //https://eslint.org/docs/rules/func-names
    "comma-dangle": ["error", { // https://eslint.org/docs/rules/comma-dangle
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js"]}],
    //https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/react-in-jsx-scope": "off", // React in global scope in Next.js
    // https://eslint.org/docs/rules/semi
    "semi": ["error", "never", { "beforeStatementContinuationChars": "always" }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": false // Allows Bootstrap link styling using Next.js Link component (no 'href' passed to a-node)
  }
}
```

I will be using CamelCase in variable and function names and PascalCase for component names.

### CSS

https://github.com/stylelint/stylelint
https://github.com/ericmasiello/stylelint-config-ericmasiello

I will be using snake-case in selector names.

### HTML

I will be using [HTMLHint](https://github.com/yaniswang/HTMLHint) with [default set of rules](https://github.com/yaniswang/HTMLHint/wiki/Rules)

I would have used CodeGuide's conventions, but it didn't include any configurations for linters.

## 3. HTML5

[Link](https://oamk-imp-portfolio.herokuapp.com/example)

## 4. Developer tools

I'm quite familiar with developer tools.

## 5. Dynamic HTML

<p data-height="265" data-theme-id="0" data-slug-hash="aEgNrW" data-default-tab="css,result" data-user="sirjuan" data-embed-version="2" data-pen-title="Person List" class="codepen">See the Pen <a href="https://codepen.io/sirjuan/pen/aEgNrW/">Person List</a> by Juha Pekkarinen (<a href="https://codepen.io/sirjuan">@sirjuan</a>) on <a href="https://codepen.io">CodePen</a>.</p>
