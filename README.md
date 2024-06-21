# jsonresume-theme-reactive

A flat and reactive [JSON Resume](https://jsonresume.org/) theme.

- 🤖 strongly typed with TypeScript
- 📑 templated with JSX/TSX
- 💅 styled with UnoCSS
- 📄 Markdown support
- 🌗 Light and dark mode
- 📱 Responsive design
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

```jsonc
{
  // ...
  "meta": {
    "theme": "jsonresume-theme-reactive",
    "themeOptions": {
      "colors": {
        "primary": "#3F51B5",
        "secondary": "#AD1457",
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

## ✅ TODOs

- light/dark mode
- responsive design
- testing
