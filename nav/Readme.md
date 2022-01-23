# web-elements nav

### [`See Demo `](https://webelementsjs.netlify.app/nav/)

this whole navbar can be called, adding links, nav theme, nav state using predefined functons.

let me show you how

## adding nav component to your website

link css inside `head` before your custom style

```html
<link
  rel="stylesheet"
  href="https://webelementsjs.netlify.app/v1/nav/nav.css"
/>
```

and this js file at the end of `body`

```html
<script src="https://webelementsjs.netlify.app/v1/nav/nav.js"></script>
```

## Adding navbar

inside your html just write

```html
<nav></nav>
```

<img src="https://webelementsjs.netlify.app/nav/images/1.png" />

- don't write anything inside `<nav> </nav>` (it will be automatically cleared), there are js functions for that

### let's rename our logo

- write every function after the `nav.js` you added

```javascript
setMainUrl("WebElements.js");
```

<img src="https://webelementsjs.netlify.app/nav/images/2.png" />

you can also refer this link anywhere else, by default it refers to the base url of your website

```javascript
setMainUrl("App name", "http://example.com");
```

### let's add some links to it

```javascript
addNavLink("link 1", "http://example.com");
```

##### Desktop view

<img src="https://webelementsjs.netlify.app/nav/images/3.png" />

#### Mobile view

<img src="https://webelementsjs.netlify.app/nav/images/3-ii.png" />

- you can leave second value blank it will be reffering to #
  ```javascript
  addNavLink("link #");
  ```

### changing theme of nav

first value = background color, second one color of text

```javascript
navTheme("#00cc8e", "#fff");
```

<img src="https://webelementsjs.netlify.app/nav/images/4.png" />

### closing nav in your own functions inside website

- mobile toggle button will also change on this

```javascript
navState();
```

### if you want to overwrite some classes - this is for you😉

each class starts with `.we-`

|     class      |                use                |
| :------------: | :-------------------------------: |
|  `.we-no-a `   | change porperties of navbar links |
| `.we-nav-logo` | change porperties of navbar logo  |

- you can see more clases by inspect tool
- if you are not able to overwrite properties use `!important` eg:

```css
.we-no-a:hover {
  color: #242b2e !important;
}
```

### more features this `nav.js` give

`navState()` can be used to toggle navbar anytime in your app

`slr()` it's an alternative to `document.querySelector()`

`slrA()` it's an alternative to `document.querySelectorAll()`

if you are using this you may use these function anywhere in your website

#### working on more, will be available soon. contact me if you want something more added here
