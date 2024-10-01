// import { useEffect, useState } from "react";

// const usePersist = () => {
//   const [persist, setPersist] = useState(
//     JSON.parse(localStorage.getItem("persist") as string) || false,
//   );

//   useEffect(() => {
//     localStorage.setItem("persist", JSON.stringify(persist));
//   });

//   return [persist, setPersist];
// };

// export default usePersist;
//*
// import { useEffect, useState } from "react";

// const usePersist = () => {
//   const [persist, setPersist] = useState(false);

//   useEffect(() => {
//     const storedPersist = JSON.parse(localStorage.getItem("persist") as string);
//     if (storedPersist !== null) {
//       setPersist(storedPersist);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("persist", JSON.stringify(persist));
//   }, [persist]);

//   return [persist, setPersist] as const;
// };

// export default usePersist;

import { useEffect, useState } from "react";

const isLocalStorageAvailable = (): boolean => {
  try {
    const test = "__storage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const usePersist = () => {
  const [persist, setPersist] = useState(() => {
    if (isLocalStorageAvailable()) {
      // Synchronous initialization on the client-side if localStorage is available
      const storedValue = localStorage.getItem("persist");
      return storedValue ? JSON.parse(storedValue) : false;
    }
    return false;
  });

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      localStorage.setItem("persist", JSON.stringify(persist));
    }
  }, [persist]);

  return [persist, setPersist] as const;
};

export default usePersist;
