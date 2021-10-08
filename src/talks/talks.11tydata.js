const fetch = require('node-fetch')

module.exports = {
  layout: 'talk-layout',
  tags: 'talks',
  eleventyComputed: {
    picture: async ({ picture, speakers }) => {
      if (!picture && speakers?.[0]?.ghUsername) {
        const result = await fetch(`https://api.github.com/users/${speakers[0].ghUsername}`)
        const { avatar_url = '' } = await result.json()
        return avatar_url
      } else {
        return picture
      }
    },
  },
}
