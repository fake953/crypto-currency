import { createContext, useContext } from "react";
import {
  TrendingCoinsInterface,
  AllNewsInterface,
} from "../interfaces/interface";

interface contextInterface {
  coins: TrendingCoinsInterface[] | undefined;
  isLoading: boolean;
  news: AllNewsInterface[];
}
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
