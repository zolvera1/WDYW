import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import yelp from 'yelp-fusion';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();
const port = 3002 ;
const apiKey = process.env.YELP_API_TOKEN;
const client = yelp.client(apiKey);
const __filename = __filename;
const __dirname = dirname(__filename);
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

exports.handler = async (event, context) => {
  const { state, city, address, radius, priceRange } = JSON.parse(event.body);
  console.log(state, city, address, radius, priceRange)
  const milesToMeter = Math.ceil(radius * 1609.34);

  try {
    const response = await client.search({
      categories: 'restaurants',
      location: `${address}, ${city} ${state}`,
      open_now: true,
      radius: milesToMeter,
      price: priceRange,
    });

    const items = response.jsonBody.businesses;
    if (items.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "No restaurants found" })
      };
    } else {
      const randomBusiness = items[Math.floor(Math.random() * items.length)];
      console.log(JSON.stringify(randomBusiness));
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(randomBusiness)
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" })
    };
  }
};

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${port}`);
});
