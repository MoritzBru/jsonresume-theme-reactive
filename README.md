# jsonresume-theme-reactive

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/moritzbru/jsonresume-theme-reactive/npm-publish.yml?style=flat-square&logo=github&label=pipeline)](https://github.com/MoritzBru/jsonresume-theme-reactive/actions/workflows/npm-publish.yml)
[![GitHub Tag](https://img.shields.io/github/v/tag/moritzbru/jsonresume-theme-reactive?style=flat-square&logo=github)](https://github.com/MoritzBru/jsonresume-theme-reactive/releases)
[![NPM Version](https://img.shields.io/npm/v/jsonresume-theme-reactive?style=flat-square&logo=npm)](https://www.npmjs.com/package/jsonresume-theme-reactive)

A flat and reactive [JSON Resume](https://jsonresume.org/) theme.

- 🤖 strongly typed with TypeScript
- 📑 templated with JSX/TSX
- 💅 styled with UnoCSS
- 📄 Markdown support
- 🌗 Light and dark mode
- 📱 Responsive design
- 🎨 Customizable colors
- 💬 Customizable labels
- 📦 ESM and CommonJS build

## 🖼️ Example

<img src="/.github/assets/example-resume.png" alt="Example Resume" width="198" height="297"  />

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

### Change labels

You can override theme labels in your _resume.json_ under `meta.themeOptions.i18n`.

```jsonc
{
  // ...
  "meta": {
    "themeOptions": {
      "i18n": {
        "sections.awards": "Awards",
        "sections.education": "Education",
        "sections.interests": "Interests",
        "sections.languages": "Languages",
        "sections.projects": "Projects",
        "sections.publications": "Publications",
        "sections.references": "References",
        "sections.skills": "Skills",
        "sections.volunteer": "Volunteer",
        "sections.work": "Work",
        "timeRange.openEnd": "Present"
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
