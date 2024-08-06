import { useState, useEffect } from "react";

const Timeout = () => {
  const [t, setT] = useState<number>(3);

  useEffect(() => {
    if (t > 0) {
      const timer = setTimeout(() => setT(t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [t]);

  return (
    <div>{t > 0 ? t : "👻Timeout"}</div>
  );
}

export default Timeout;