const shortid = require('shortid');
const URL = require('../models/urlModel');


const handleGenerateShortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "Url is required" })
    const shortID = shortid()
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    });
    return res.json({ id: shortID })
}


const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortID
    const result = await URL.findOne({ shortId })
    console.log(result);
    return res.json(
        {
            TotalClicks: result.visitHistory.length,
            analytics: result.visitHistory
        }
    )
}


module.exports = { handleGenerateShortUrl, handleGetAnalytics }