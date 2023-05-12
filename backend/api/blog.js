const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

module.exports = async (req, res) => {
  const entries = await client.getEntries({ content_type: 'mongoBlog' })
  res.json(entries.items)
}
