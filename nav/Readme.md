# web-elements nav

<!-- demo here -->

this whole navbar can be called, adding links, dark mode and used by predefined functions.

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
