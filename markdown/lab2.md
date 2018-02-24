# Lab 2: Responsive Web Design and stuff

## 1. Review [RWD Article](http://alistapart.com/article/responsive-web-design).

**What is the purpose of the RWD? Why it is used? How things are done
before RWD? What is the difference?**

The purpose of RWD is to make websites more attractive and accessible for users with different kind of devices.

**How css media queries can help you building responsive web sites?**

With media queries you can target [different kind of devices](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_types) and resolutions, and [specific browsers](http://browserhacks.com/) for building different rules for them.

**Why to use em (font) based sizing for example margins?**

It allows defining your margins according to browsers default font size (if not overridden). I've mostly used rem like in exercises below, but I've really not clearly understood [the difference between them](https://zellwk.com/blog/rem-vs-em/). More practice ahead I guess.

**Article is already 7 years old, do we have any new technology which can be used to achieve same type of UI
responsiveness as described in the article. Buzz words: (CSS Grid, Flexbox)**

* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) makes it easier to create fluid layouts than the tools we used before (floats, yummy...) by offering easy scaling and wrapping of elements and also defining the direction of layout with single property.
* [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) is in [Candidate Recommendation](https://www.w3.org/TR/css-grid-1/) phase at the time of writing. It allows to define your layout very neatly and declaratively. I [started experimenting](https://codepen.io/sirjuan/pen/BJOdGp) with it a while ago.

## 2. RWD Examples

### Boston Globe
[![alt text](/static/images/rwd/bostonglobe-large.jpg "Boston Globe on large screen")](/static/images/rwd/bostonglobe-large.jpg) |
------------|
Boston Globe on large screen |

[![alt text](/static/images/rwd/bostonglobe-810.jpg "Boston Globe on 810px")](/static/images/rwd/bostonglobe-810.jpg) |
------------|
Boston Globe on 810px. Breakpoint is defined in my opinion too low, leading the paragraphs to become really narrow. |

[![alt text](/static/images/rwd/bostonglobe-809.jpg "Boston Globe on 809px")](/static/images/rwd/bostonglobe-809.jpg) |
------------|
Boston Globe on 809px |

[![alt text](/static/images/rwd/bostonglobe-400.jpg "Boston Globe on 400px")](/static/images/rwd/bostonglobe-400.jpg) |
------------|
Boston Globe on 400px |

[![alt text](/static/images/rwd/bostonglobe-android.jpg "Boston Globe on android")](/static/images/rwd/bostonglobe-android.jpg) |
------------|
Boston Globe on android |

### Wellington

[![alt text](/static/images/rwd/wellington-large.jpg "Wellington on large screen")](/static/images/rwd/wellington-large.jpg) |
------------|
Wellington on large screen |

[![alt text](/static/images/rwd/wellington-992.jpg "Wellington on 992px")](/static/images/rwd/wellington-992.jpg) |
------------|
Wellington on 992px |

[![alt text](/static/images/rwd/wellington-991.jpg "Wellington on 991px")](/static/images/rwd/wellington-991.jpg) |
------------|
Wellington on 991px |

[![alt text](/static/images/rwd/wellington-568.jpg "Wellington on 568px")](/static/images/rwd/wellington-568.jpg) |
------------|
Wellington on 568p |

[![alt text](/static/images/rwd/wellington-android.jpg "Wellington on android")](/static/images/rwd/wellington-android.jpg) |
------------|
Wellington on android |

### Esquire

[![alt text](/static/images/rwd/esquire-large.jpg "Esquire on large screen")](/static/images/rwd/esquire-large.jpg) |
------------|
Esquire on large screen|

[![alt text](/static/images/rwd/esquire-980.jpg "Esquire on 980px")](/static/images/rwd/esquire-980.jpg)|
------------|
Esquire on 980px|

[![alt text](/static/images/rwd/esquire-979.jpg "Esquire on 979px")](/static/images/rwd/esquire-979.jpg)|
------------|
Esquire on 979px|

[![alt text](/static/images/rwd/esquire-649.jpg "Esquire on 649px")](/static/images/rwd/esquire-649.jpg)|
------------|
Esquire on 649px|

[![alt text](/static/images/rwd/esquire-android.jpg "Esquire on android")](/static/images/rwd/esquire-android.jpg)|
------------|
Esquire on android|


## 3. RWD in practice

<p data-height="265" data-theme-id="0" data-slug-hash="XZrZzQ" data-default-tab="css,result" data-user="sirjuan" data-embed-version="2" data-pen-title="Responsive Example" class="codepen">See the Pen <a href="https://codepen.io/sirjuan/pen/XZrZzQ/">Responsive Example</a> by Juha Pekkarinen (<a href="https://codepen.io/sirjuan">@sirjuan</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## 4. Adding stuff

<p data-height="265" data-theme-id="0" data-slug-hash="XZrZwr" data-default-tab="css,result" data-user="sirjuan" data-embed-version="2" data-pen-title="Responsive Example With Menu" class="codepen">See the Pen <a href="https://codepen.io/sirjuan/pen/XZrZwr/">Responsive Example With Menu</a> by Juha Pekkarinen (<a href="https://codepen.io/sirjuan">@sirjuan</a>) on <a href="https://codepen.io">CodePen</a>.</p>

**HTML5 specification introduces new semantic elements. One of them is a figure
element. Can you say why you should use it in addition to standard img
elements?**

If you need captions in your images, figure gives a way to semantically add a caption to image with HTML. It also helps with screen readers.

## 5. Responsive person list

<p data-height="265" data-theme-id="0" data-slug-hash="mXdWQN" data-default-tab="css,result" data-user="sirjuan" data-embed-version="2" data-pen-title="Person List Responsive" class="codepen">See the Pen <a href="https://codepen.io/sirjuan/pen/mXdWQN/">Person List Responsive</a> by Juha Pekkarinen (<a href="https://codepen.io/sirjuan">@sirjuan</a>) on <a href="https://codepen.io">CodePen</a>.</p>
