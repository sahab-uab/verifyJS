# VerifyJS - Simple JavaScript CAPTCHA System

## Overview

**VerifyJS** is a lightweight, customizable JavaScript-based CAPTCHA system that helps prevent automated bot interactions on web forms. It generates random CAPTCHA images that users must solve to verify their human identity.

## Features

- ✅ Customizable CAPTCHA settings (digits, uppercase, special characters)
- 🔄 Refresh button to generate a new CAPTCHA
- 🎨 Adjustable CAPTCHA image size
- 📜 Simple validation method
- 🛡️ Prevents bots from automated form submissions

## Demo

Check out a live demo: [Click for demo](https://sahab-uab.github.io/verifyJS/)

## Installation

1. Clone the repository or download the files:
   ```sh
   git clone https://github.com/yourusername/verifyjs.git
   ```
2. Include the JavaScript file in your HTML:
   ```html
   <script src="verify.js"></script>
   ```
3. Or include the minified JavaScript file in your HTML:
   ```html
   <script src="verify.min.js"></script>
   ```

## Usage

### 1. HTML Structure

Include the following code in your HTML file:

```html
<div id="captchaForm">
  <div class="captchawraper">
    <img id="captcha" width="200" height="50" alt="CAPTCHA" />
  </div>
  <div class="fild">
    <input type="text" id="captchaInput" required />
    <button type="button" onclick="captchaRefresh()">Refresh</button>
  </div>
  <button onclick="validate()">Submit</button>
</div>
```

### 2. JavaScript Configuration

Configure VerifyJS in your script:

```js
// Configure VerifyJS
verifyJS({
  totalDigit: 4,        // Number of characters in CAPTCHA
  number: true,         // Allow numbers
  uppercase: false,     // Disable uppercase letters
  specialsCharacter: false, // Disable special characters
  width: 140,           // CAPTCHA image width
  height: 50,           // CAPTCHA image height
}).vJSConfig();

// Set image on page load
window.onload = () => {
  verifyJS().vJSImgSrc("#captcha");
};

// Refresh CAPTCHA image
function captchaRefresh() {
  verifyJS().vJSImgRefreshSrc("#captcha");
}

// Validate CAPTCHA input
function validate() {
  const captchaField = document.getElementById("captchaInput").value;
  let status = verifyJS().vJSCheck(captchaField);
  if (status) {
    alert("You passed the CAPTCHA!");
  } else {
    alert("Sorry, try again!");
  }
}
```

## Customization Options

Modify these settings to customize your CAPTCHA:

| Option              | Description                         | Default |
| ------------------- | ----------------------------------- | ------- |
| `totalDigit`        | Number of characters in the CAPTCHA | `6`     |
| `number`            | Include numbers in CAPTCHA          | `true`  |
| `uppercase`         | Include uppercase letters           | `true` |
| `specialsCharacter` | Include special characters          | `true` |
| `width`             | Width of CAPTCHA image              | `200`   |
| `height`            | Height of CAPTCHA image             | `50`    |

## Contributing

If you'd like to improve VerifyJS, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

⭐ **Star this repo if you found it useful!** ⭐
