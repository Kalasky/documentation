require('dotenv').config()
const contentful = require('contentful')
const express = require('express')
const app = express()
const cors = require('cors')

// middleware
app.use(cors())

// port
const port = process.env.PORT || 5000

// contentful
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

// blog routes
app.get('/blog', async (req, res) => {
  const entries = await client.getEntries({ content_type: 'mongoBlog' })
  res.json(entries.items)
})

app.get('/blog/:id', async (req, res) => {
  const { id } = req.params
  try {
    // entry is the ID of the contentful category i.e. mongoBlog
    const entry = await client.getEntry(id)
    if (!entry) {
      return res.status(404).send('Not found')
    }
    res.json(entry)
  } catch (error) {
    return res.status(404).send('Not found')
  }
})

// documentation routes
app.get('/docs', async (req, res) => {
  const entries = await client.getEntries({ content_type: 'mongoDocs' })
  res.json(entries.items)
})

app.get('/docs/:id', async (req, res) => {
  const { id } = req.params
  try {
    // entry is the ID of the contentful category i.e. mongoBlog
    const entry = await client.getEntry(id)
    if (!entry) {
      return res.status(404).send('Not found')
    }
    res.json(entry)
  } catch (error) {
    return res.status(404).send('Not found')
  }
})

// releases routes
app.get('/releases', async (req, res) => {
  const entries = await client.getEntries({ content_type: 'mongoReleases' })
  res.json(entries.items)
})

app.get('/releases/:id', async (req, res) => {
  const { id } = req.params
  try {
    // entry is the ID of the contentful category i.e. mongoBlog
    const entry = await client.getEntry(id)
    if (!entry) {
      return res.status(404).send('Not found')
    }
    res.json(entry)
  } catch (error) {
    return res.status(404).send('Not found')
  }
})

// this is a catch all if none of the routes above match
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
