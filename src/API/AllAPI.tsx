export const CoinList = (value: string) => {
  console.log(value);

  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${value}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
};

export const SingleCoin = (id: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id: string, days: number, value: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${value}&days=${days}`;

export const TrendingCoins = () => `https://coinranking1.p.rapidapi.com/coins`;

export const PopularNews = () =>
  "https://crypto-news16.p.rapidapi.com/news/coindesk";
// export const Exchanges = () =>
//   "https://pro-api.coinmarketcap.com/v1/exchange/info";
