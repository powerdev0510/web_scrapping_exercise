import express from 'express';
import bodyParser from 'body-parser';
import { scrapeZillow } from './scraper';

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/scrape', async (req, res) => {
    const { city } = req.body;
    try {
        const listings = await scrapeZillow(city);
        res.json({ success: true, listings });
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        res.status(500).json({ success: false, error: errorMessage });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
