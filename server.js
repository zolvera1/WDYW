import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import yelp from 'yelp-fusion';
dotenv.config();
const port = 3001;
const apiKey = process.env.YELP_API_TOKEN;
const client = yelp.client(apiKey);

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api', (req, res) => {
  const { state, city, address, radius, priceRange } = req.body;
  console.log(state, city, address, radius, priceRange)
  const milesToMeter = Math.ceil(radius * 1609.34);

  client.search({
    categories: 'restaurants',
    location: `${address}, ${city} ${state}`,
    open_now: true,
    radius: milesToMeter,
    price: priceRange,
  })
    .then(response => {
      const items = response.jsonBody.businesses
      const randomBusiness = items[Math.floor(Math.random() * items.length)]
      console.log(JSON.stringify(randomBusiness))
      res.send(JSON.stringify(randomBusiness))
    })
    .catch(e => {
      console.log(e);
      res.status(500).send('Error occurred while fetching data from Yelp API');
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
