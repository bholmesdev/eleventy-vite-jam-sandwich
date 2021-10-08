module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('scss')
  eleventyConfig.addPassthroughCopy('assets/**')
  
  eleventyConfig.addFilter('formatTalks', function(talks) {
    return talks.map(({data: {speakers = [], title = '', picture = '', page}}) => ({
      speakers,
      title,
      picture,
      url: page.url,
    }))
  })

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src'
    }
  }
}