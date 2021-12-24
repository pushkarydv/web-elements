# web-elements nav

<!-- demo here -->

this whole navbar can be called, adding links, dark mode, nav state using predefined functons.

let me show you how

## adding to your website

download this folder and link css and js to your website as shown

css file inside `head`

```html
<link rel="stylesheet" href="/nav.css" />
```

javascript file at the end of `body`

```html
<script src="/nav.js"></script>
```

## Adding navbar

inside your html just write

```html
<nav></nav>
```

- don't write anything inside nav, there are js functions for that

### let's rename our logo

- write every function after the `nav.js` you added

```javascript
setMainUrl("App name");
```

you can also refer this link anywhere else, by default it refers to the base url of your website

```javascript
setMainUrl("App name", "http://example.com");
```

### let's add some links to it

```javascript
addNavLink("link 1", "http://example.com");
```

- you can leave second value blank it will be reffering to #
  ```javascript
  addNavLink("link #");
  ```

### activating dark mode of nav

```javascript
navDark();
```

### closing nav in your own functions inside website

- mobile toggle button will also change on this

```javascript
navState();
```

### more features this `nav.js` give

`slr()` it's an alternative to `document.querySelector()`

`slrA()` it's an alternative to `document.querySelectorAll()`

if you are using this you may use these function anywhere in your website

#### working on more, will be available soon. contact me if you want something more added here
