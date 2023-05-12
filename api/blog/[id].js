const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

module.exports = async (req, res) => {
  const { id } = req.query
  try {
    const entry = await client.getEntry(id)
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found', id })
    }
    res.json(entry)
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: error.message })
  }
}
