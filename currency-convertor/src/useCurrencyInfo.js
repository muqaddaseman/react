import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.frankfurter.dev/v2/rates?base=${currency.toUpperCase()}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }
        return res.json();
      })
      .then((res) => {
        const rates = {};

        res.forEach((item) => {
          rates[item.quote.toLowerCase()] = item.rate;
        });

        setData(rates);
      })
      .catch((error) => {
        console.error("Currency API Error:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;