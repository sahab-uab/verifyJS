// our capthca
let captchaText = "";

// captcha config
let totalCaptcaDigit = 6;
let number = true;
let uppercase = true;
let specialsCharacter = true;
let canvaw = 200
let canvah = 50

// init function
function verifyJS(config = {}) {
  return {
    // configure
    vJSConfig: () => {
      if (Object.keys(config).length > 0) {
        if (Object.keys(config).includes("totalDigit")) {
          totalCaptcaDigit = config["totalDigit"];
        }
        if (Object.keys(config).includes("specialsCharacter")) {
          specialsCharacter = config["specialsCharacter"];
        }
        if (Object.keys(config).includes("number")) {
          number = config["number"];
        }
        if (Object.keys(config).includes("uppercase")) {
          uppercase = config["uppercase"];
        }
        if (Object.keys(config).includes("width")) {
          canvaw = config["width"];
        }
        if (Object.keys(config).includes("height")) {
          canvah = config["height"];
        }
      }
    },

    // set image
    vJSImgSrc: (target) => {
      const targetDOM = document.querySelector(target);
      if (!target) {
        console.log("Invalid image DOM");
      }
      targetDOM.setAttribute("src", vJSImg());
    },

    // refres image
    vJSImgRefreshSrc: (target) => {
      const targetDOM = document.querySelector(target);
      if (!target) {
        console.log("Invalid image DOM");
      }
      targetDOM.setAttribute("src", vJSImg());
    },

    // validator
    vJSCheck: (value) => {
      const storedCaptcha = sessionStorage.getItem("captcha");
      if (value === storedCaptcha) {
        return true;
      } else {
        return false;
      }
    },
  };
}

// genarate image
function vJSImg() {
  // canva configer
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = canvaw;
  canvas.height = canvah;

  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Generate random text
  captchaText = "";
  const possibleChars = `${
    uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
  }abcdefghijklmnopqrstuvwxyz${number ? "0123456789" : ""}${
    specialsCharacter ? "/=-{[]}!@#$%^&*()|/" : ""
  }`;
  for (let i = 0; i < totalCaptcaDigit; i++) {
    captchaText += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }

  // Draw text on canvas with random positioning, rotation, font size, font weight, and color
  for (let i = 0; i < captchaText.length; i++) {
    const char = captchaText.charAt(i);
    const x = 30 * i + 10;
    const y = Math.random() * 15 + 30;
    const angle = Math.random() * 0.3 - 0.15;
    const fontSize = Math.floor(Math.random() * 3) + 30; // Random font size between 16 and 18
    const fontWeight = Math.random() >= 0.5 ? "normal" : "bold"; // Randomly choose between 'normal' and 'bold'
    const color = vJSRandomColor();

    context.save();
    context.translate(x, y);
    context.rotate(angle);
    context.font = `${fontWeight} ${fontSize}px Arial`; // Font weight and size combined
    context.fillStyle = color;
    context.fillText(char, 0, 0);
    context.restore();
  }

  // Add noise
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    context.fillRect(x, y, 2, 2);
  }

  // set session
  sessionStorage.setItem("captcha", captchaText);
  return canvas.toDataURL();
}

// genarate color
function vJSRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
