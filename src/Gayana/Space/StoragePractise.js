import { useEffect } from "react";
const StoragePractise = () => {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log(localStorage.getItem("Suresh"), "Local Storage");
    console.log(sessionStorage.getItem("Gayana"), "Session storage");
  };

  const handleLocal = () => {
    localStorage.setItem("gayana", 27);
  };
  const handleSession = () => {
    sessionStorage.setItem("laptop", "HP");
  };

  const handleRemove = () => {
    sessionStorage.removeItem("laptop");
    localStorage.removeItem("gayana");
  };
  return (
    <div>
      <p onClick={handleLocal}> Store Local Storage</p>
      <p onClick={handleSession}> Store Session Storage</p>
      <p onClick={handleRemove}> Remove Both Storage</p>
    </div>
  );
};

export default StoragePractise;
