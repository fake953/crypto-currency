export const CoinList = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id: number) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id: number, days = 365, currency: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = () => `https://coinranking1.p.rapidapi.com/coins`;

export const PopularNews = () =>
  "https://crypto-news16.p.rapidapi.com/news/coindesk";
