import { createContext, useContext } from "react";
// import { CoinData } from "../interfaces/interface";

export const coinsContext = createContext<any>(undefined);

export const useCoinsContext = () => {
  const coinsContextForCustumHook = useContext(coinsContext);
  if (coinsContextForCustumHook === undefined) {
    console.error("something in coinsContext went wrong");
    //  throw new Error("something in coinsContext went wrong");
    return;
  }

  return coinsContextForCustumHook;
};