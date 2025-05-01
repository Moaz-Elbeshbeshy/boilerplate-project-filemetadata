const displayHomePage = (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html')
}

const analyzeFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' })
    }
    const fileMetadata = {
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    }
    res.status(200).json(fileMetadata)
}

module.exports = {
    displayHomePage,
    analyzeFile,
}