import { createContext, useContext } from "react";
import {
  TrendingCoinsInterface,
  AllNewsInterface,
} from "../interfaces/interface";

// const valueForContextFunc = [
//   {
//     "24hVolume": "string",
//     btcPrice: "string",
//     change: "string",
//     coinrankingUrl: "string",
//     color: "string",
//     contractAddresses: ["string"],
//     iconUrl: "string",
//     listedAt: 1,
//     lowVolume: true,
//     marketCap: "string",
//     name: "string",
//     price: "string",
//     rank: 1,
//     sparkline: ["string"],
//     symbol: "string",
//     tier: 1,
//     uuid: "string",
//   },
// ];
// const isLoadingTypeParam: boolean = true;
interface contextInterface {
  coins: TrendingCoinsInterface[] | undefined;
  isLoading: boolean;
  news: AllNewsInterface[];
}
// const contextDefaultValue: contextInterface = {
//   TrendingCoinsType: [
//     {
//       "24hVolume": "string",
//       btcPrice: "string",
//       change: "string",
//       coinrankingUrl: "string",
//       color: "string",
//       contractAddresses: ["string"],
//       iconUrl: "string",
//       listedAt: 1,
//       lowVolume: true,
//       marketCap: "string",
//       name: "string",
//       price: "string",
//       rank: 1,
//       sparkline: ["string"],
//       symbol: "string",
//       tier: 1,
//       uuid: "string",
//     },
//   ],
//   // setTrendingCoinsType: (valueForContextFunc) => {
//   //   console.log(valueForContextFunc);
//   // },
//   // isLoadingType: false,
//   // setIsLoadingType: (isLoadingTypeParam) => {
//   //   console.log(isLoadingTypeParam);
//   // },
// };
export const coinsContext = createContext<contextInterface | undefined>(
  undefined
);

export const useCoinsContext = () => {
  const coinsContextForCustumHook = useContext(coinsContext);
  if (coinsContextForCustumHook === undefined) {
    throw new Error("something in coinsContext went wrong");
  }

  return coinsContextForCustumHook;
};
