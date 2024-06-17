# jsonresume-theme-reactive

A flat and reactive [JSON Resume](https://jsonresume.org/) theme.

- 🤖 strongly typed with TypeScript and TSX
- 💅 styled with UnoCSS
- 📄 Markdown support
- 🌗 Light and dark mode
- 🎨 Customizable colors
- 📦 ESM and CommonJS builds

## 📦 Installation

Install the package with your preferred package manager (e.g. `npm`)

```sh
npm i -D jsonresume-theme-reactive
```

## 💻 Usage

### With resume-cli

Install [resume-cli](https://github.com/jsonresume/resume-cli) and this theme to render your resume.

```sh
npm install resume-cli jsonresume-theme-reactive
npx resume export resume.html --theme jsonresume-theme-reactive
```

### With resumed

Install [resumed](https://github.com/rbardini/resumed) and this theme to render your resume.

```sh
npm install resumed jsonresume-theme-reactive
npx resumed render --theme jsonresume-theme-reactive
```

## ⚙️ Options

> Tip: specify the theme in your _resume.json_ under `meta`

```jsonc
{
  // ...
  "meta": {
    "theme": "jsonresume-theme-reactive",
    // ...
  }
}
```

### Change colors

You can override theme colors in your _resume.json_ under `meta.themeOptions.colors`.
Each entry defines a tuple of light and (optional) dark color values. If only one value is defined, it will be used in both light and dark mode.

```jsonc
{
  // ...
  "meta": {
    "theme": "jsonresume-theme-reactive",
    "themeOptions": {
      "colors": {
        "background": ["#ffffff", "#191e23"],
        "dimmed": ["#f3f4f5", "#23282d"],
        "primary": ["#191e23", "#fbfbfc"],
        "secondary": ["#6c7781", "#ccd0d4"],
        "accent": ["#0073aa", "#00a0d2"]
      }
    }
    // ...
  }
}
```

## 💕 Thanks

This project is heavily inspired by and relies on other awesome projects:

- [JSON Resume](https://jsonresume.org/)
- [JSON Resume Schema](https://github.com/jsonresume/resume-schema)
- [jsonresume-theme-even](https://github.com/rbardini/jsonresume-theme-even)
- [Resumed](https://github.com/rbardini/resumed)
