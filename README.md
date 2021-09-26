<h1 align="center">The Eleventy, Vite and JAM sandwich 🥪</h1>
<p style="display: flex; align-items: center; gap: 8px">
  <a href="https://www.netlify.com/img/deploy/button.svg" target="_blank">
    <img alt="Deploy to Netlify" src="https://www.netlify.com/img/deploy/button.svg">
  </a>
  <a href="https://github.com/Holben888/eleventy-vite-jam-sandwich/blob/main/LICENSE.md" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/bholmesdev" target="_blank">
    <img alt="Twitter: bholmesdev" src="https://img.shields.io/twitter/follow/bholmesdev.svg?style=social" />
  </a>
</p>

> Seen at Jamstack Conf 2021! A no-mess recipe for bring interactive React components to your static 11ty templates

### 🏠 [View the original talk](https://jamstackconf.com/talk/31cadaf67b08/the-11ty-web-component-and-jam-sandwich-a-recipe-for-making-the-static-interactive/)

### ✨ [Try in a sandbox](https://stackblitz.com/github/Holben888/eleventy-vite-jam-sandwich)

## Spin up the dev server

```sh
npm i
npm start
```

This will spin up two dev servers simultaneously:
- **11ty in `--watch` mode** - This processes any shortcodes, filters, or other SSG magic in our static `.html` files (just an `index.html` for this example).
- **Vite in dev mode** - This picks up any JSX component imports in the `.html` files 11ty generates

By strapping these 2 rockets together, we can bring component frameworks like React in any templating language. We could even change that `index.html` to an `index.md` or `index.liquid` if we wanted to!

## Want to use this in *your* 11ty project?

I recommend [grabbing the Slinkity plugin](https://slinkity.dev/) to get up-and-running fast. This tool offers a few key benefits:
- **You'll get the amazing `{% react ... %}` shortcode** this project showcases with zero `eleventyConfig` required
- **You'll also have the option to use React components as pages**, complete with NextJS-style hydration! [More on that here](https://slinkity.dev/docs/).
- **Instead of running 11ty and Vite together using concurrently, you can use 1 CLI command**: `slinkity`. This spins up both our servers, or stacks the commands one-after-the-other for production builds. If your project already uses `eleventy --serve` and `eleventy`, you can just use `slinkity --serve` and `slinkity` for the same effect. Yes, all 11ty flags (`--input`, `--quiet`, `--incremental`, etc) are passed through to 11ty by the `slinkity` command!

## Author

👤 **Ben Holmes**

* Website: https://bholmes.dev
* Twitter: [@bholmesdev](https://twitter.com/bholmesdev)
* Github: [@holben888](https://github.com/holben888)
* LinkedIn: [@bholmesdev](https://linkedin.com/in/bholmesdev)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_