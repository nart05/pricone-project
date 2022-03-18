import { createGlobalStyle } from 'styled-components'

import { COLOR } from '~common/app.model'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'S-CoreDream-5Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body,
  blockquote,
  code,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  button,
  fieldset,
  form,
  input,
  legend,
  textarea,
  select {
    margin: 0;
    padding: 0;
  }
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  button,
  select { /* 1 */
    text-transform: none;
  }
  fieldset {
    border: none;
  }
  a,
  a * {
    cursor: pointer;
  }
  div {
    margin: 0;
    padding: 0;
    background-color: transparent;
    text-align: left;
  }
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  hr,
  img {
    border: none;
  }
  applet,
  iframe,
  object {
    border: none;
    margin: 0;
    padding: 0;
  }
  button,
  input[type='button'],
  input[type='image'],
  input[type='reset'],
  input[type='submit'],
  label {
    cursor: pointer;
    border: none;
  }
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  /**
   * Remove the inner border and padding in Firefox.
   */
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  /**
   * Restore the focus styles unset by the previous rule.
   */
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  em,
  address {
    font-style: normal;
  }
  strong {
    font-weight: bold;
  }
  dl,
  dt,
  dd {
    margin: 0;
  }

  div,
  dd,
  p,
  span {
    word-break: break-word;
  }

  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 24px;
  }
  h3,
  h4,
  h5,
  h6,
  p,
  input {
    font-size: 16px;
  }
  thead,
  tbody,
  tr,
  th,
  td,
  label,
  strong,
  span,
  a {
    font-size: inherit;
  }

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    font-family: 'S-CoreDream-5Medium', sans-serif;
    font-style: normal;
    font-stretch: normal;
    font-size: 16px;
    line-height: normal;
    letter-spacing: normal;
    background-color: white;
    color: ${COLOR.DARK};
    box-sizing: border-box;
  }
  main {
    display: block;
  }
  a {
    text-decoration: none;
    color: ${COLOR.DARK};
    &:visited,
    &:active {
      color: ${COLOR.DARK};
    }
  }
  input[type='text'],
  input[type='search'],
  input[type='password'],
  input[type='email'],
  input[type='tel'],
  input[type='url'],
  input[type='number'],
  select,
  textarea,
  button {
    font-family: 'S-CoreDream-5Medium', sans-serif;
  }
  input[type='file'] {
    padding: 0;
  }
  input[type='search'] {
    -webkit-appearance: none;
    /* clears the 'X' from Chrome */
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
  * {
    -webkit-tap-highlight-color: rgba(110, 110, 110, 0.2);
    box-sizing: inherit;
    &::before,
    &::after {
      box-sizing: inherit;
    }
    &:focus {
      outline: none;
    }
  }
  label {
    cursor: default;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-style: italic;
    text-overflow: ellipsis;
  }
`

export default GlobalStyle
