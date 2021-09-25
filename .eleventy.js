const { build: viteBuild } = require('vite')
const requireFromString = require('require-from-string')
const { renderToString } = require('react-dom/server')
const React = require('react')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('_includes/components')

  let idCounter = 0

  eleventyConfig.on('beforeBuild', function () {
    // reset the counter for each new build
    idCounter = 0
  })

  eleventyConfig.addShortcode('react', async function (componentPath, shipJavaScript = false) {
    idCounter += 1
    const componentRootId = `component-root-${idCounter}`

    const { output } = await viteBuild({
      root: '_site',
      build: {
        ssr: true,
        write: false,
        rollupOptions: {
          input: `./_includes/${componentPath}`,
        },
      },
    })
    const { default: Component } = requireFromString(output[0].code)
    const html = renderToString(React.createElement(Component))

    return `
<div id="${componentRootId}">${html}</div>
${shipJavaScript
        ? `<script type="module">
import Component from './_includes/${componentPath}';
import React from 'react';
import ReactDOM from 'react-dom';
const componentRoot = document.getElementById('${componentRootId}');
ReactDOM.hydrate(React.createElement(Component), componentRoot);
</script>`
        : ''
      }
  `
  })

}