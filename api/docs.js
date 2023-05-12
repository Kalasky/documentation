const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

module.exports = async (req, res) => {
  try {
    const entries = await client.getEntries({ content_type: 'mongoDocs' })
    res.json(entries.items)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching data from Contentful' })
  }
}
