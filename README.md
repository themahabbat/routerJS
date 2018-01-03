# RouterJS
Javascript library for loading pages within wrapper elements with AJAX


## Dependencies
`jQuery`

Just include jQuery before
```html
<script src="jquery.min.js"></script>
```

## Usage
Parameters:
`element, attribute, wrapper, pushState`

```js
// Single element
Router(
    'a', 'href', 'body', true
)

// Multiple element
Router(
    ['a', 'button'],
    ['href', 'data-btn-link'],
    '#main', false
)
```