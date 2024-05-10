import { createContext, useContext } from "react";
import { TrendingCoinsInterface } from "../interfaces/interface";

const valueForContextFunc = [
  {
    "24hVolume": "string",
    btcPrice: "string",
    change: "string",
    coinrankingUrl: "string",
    color: "string",
    contractAddresses: ["string"],
    iconUrl: "string",
    listedAt: 1,
    lowVolume: true,
    marketCap: "string",
    name: "string",
    price: "string",
    rank: 1,
    sparkline: ["string"],
    symbol: "string",
    tier: 1,
    uuid: "string",
  },
];
const isLoadingTypeParam: boolean = true;
interface contextInterface {
  TrendingCoinsType: TrendingCoinsInterface[] | undefined;
  setTrendingCoinsType: (valu: TrendingCoinsInterface[]) => void;
  isLoadingType: boolean;
  setIsLoadingType: (valu: boolean) => void;
}
const contextDefaultValue: contextInterface = {
  TrendingCoinsType: [
    {
      "24hVolume": "string",
      btcPrice: "string",
      change: "string",
      coinrankingUrl: "string",
      color: "string",
      contractAddresses: ["string"],
      iconUrl: "string",
      listedAt: 1,
      lowVolume: true,
      marketCap: "string",
      name: "string",
      price: "string",
      rank: 1,
      sparkline: ["string"],
      symbol: "string",
      tier: 1,
      uuid: "string",
    },
  ],
  setTrendingCoinsType: (valueForContextFunc) => {
    console.log(valueForContextFunc);
  },
  isLoadingType: false,
  setIsLoadingType: (isLoadingTypeParam) => {
    console.log(isLoadingTypeParam);
  },
};
export const coinsContext =
  createContext<contextInterface>(contextDefaultValue);

export const useCoinsContext = () => {
  const coinsContextForCustumHook = useContext(coinsContext);
  if (coinsContextForCustumHook === undefined) {
    console.error("something in coinsContext went wrong");
    //  throw new Error("something in coinsContext went wrong");
    return;
  }

  return coinsContextForCustumHook;
};
