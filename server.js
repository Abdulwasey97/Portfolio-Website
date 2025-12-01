import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

const CONTACT_FILE = path.join(__dirname, 'contact.json')

app.use(express.json())
// Simple CORS for local dev (Vite or any localhost origin)
app.use((req, res, next) => {
  const origin = req.headers.origin || '*'
  res.header('Access-Control-Allow-Origin', origin)
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

// Ensure file exists
function ensureContactFile() {
  if (!fs.existsSync(CONTACT_FILE)) {
    fs.writeFileSync(CONTACT_FILE, '[]', 'utf8')
  }
}

app.post('/api/contact', (req, res) => {
  try {
    ensureContactFile()

    const newSubmission = {
      ...req.body,
      submittedAt: new Date().toISOString(),
    }

    const raw = fs.readFileSync(CONTACT_FILE, 'utf8') || '[]'
    let data = []
    try {
      data = JSON.parse(raw)
      if (!Array.isArray(data)) {
        data = []
      }
    } catch {
      data = []
    }

    data.push(newSubmission)

    fs.writeFileSync(CONTACT_FILE, JSON.stringify(data, null, 2), 'utf8')

    res.status(201).json({ success: true, message: 'Saved', submission: newSubmission })
  } catch (err) {
    console.error('Error saving contact submission:', err)
    res.status(500).json({ success: false, message: 'Failed to save contact submission' })
  }
})

app.get('/api/contact', (req, res) => {
  try {
    ensureContactFile()
    const raw = fs.readFileSync(CONTACT_FILE, 'utf8') || '[]'
    let data = []
    try {
      data = JSON.parse(raw)
      if (!Array.isArray(data)) {
        data = []
      }
    } catch {
      data = []
    }
    res.json(data)
  } catch (err) {
    console.error('Error reading contact submissions:', err)
    res.status(500).json({ success: false, message: 'Failed to read contact submissions' })
  }
})

app.listen(PORT, () => {
  console.log(`Contact backend running on http://localhost:${PORT}`)
})


