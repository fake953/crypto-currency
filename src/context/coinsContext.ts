import { createContext, useContext } from "react";
import {
  TrendingCoinsInterface,
  AllNewsInterface,
} from "../interfaces/interface";

interface contextInterface {
  coins: TrendingCoinsInterface[] | undefined;
  isLoading: boolean;
  news: AllNewsInterface[];
  currency: string;
}
export const coinsContext = createContext<contextInterface | undefined>(
  undefined
);

export const useCoinsContext = () => {
  const coinsContextForCustomHook = useContext(coinsContext);
  if (coinsContextForCustomHook === undefined) {
    throw new Error("something in coinsContext went wrong");
  }

  return coinsContextForCustomHook;
};
