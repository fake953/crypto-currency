import axios from "axios";

export default async function AllAPI() {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "90036e5006msh9c507143836a26bp115d86jsn545e41f4f9e8",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  try {
    console.log("api sended");
    const response = await axios.request(options);
    return response.data.data.coins;
  } catch (error) {
    console.error(error);
  }
}
