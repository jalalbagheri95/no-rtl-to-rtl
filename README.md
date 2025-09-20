# No RTL to RTL

A simple Firefox add-on that forces **ChatGPT** interface to display in **Persian (fa-IR)** with **right-to-left (RTL)** layout.  
This add-on is designed for Persian-speaking users who want ChatGPT to look more natural in their language.

---

## Features

- Automatically sets `<html dir="rtl" lang="fa-IR">`.
- Applies a custom Persian font for better readability.
- Lightweight, runs only on **chat.openai.com**.
- Open Source (GPL v2).

---

## Installation

1. Download the add-on from [Firefox Add-ons (AMO)](https://addons.mozilla.org/) (after publication).
2. Install it in your browser.
3. Open [ChatGPT](https://chat.openai.com/) → the page will automatically switch to RTL and Persian.

---

## Source Code

The full source code is available on GitHub:  
[https://github.com/jalalbagheri95/no-rtl-to-rtl](https://github.com/jalalbagheri95/no-rtl-to-rtl)

---

## Development

To test locally before publishing:

1. Open **Firefox** and go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on**.
3. Select the `manifest.json` file from this project.
4. Open ChatGPT and test the RTL layout.

---

## License

This project is licensed under **GPL v2**.  
Font Software is licensed under the SIL Open Font License, Version 1.1. See [OFL.txt](/OFL.txt).

---

## Screenshots

### Before

![Before RTL](screenshots/before.png)

### After

![After RTL](screenshots/after.png)
