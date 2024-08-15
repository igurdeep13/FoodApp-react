import { useState } from "react";
import { useEffect } from "react";

export default function Search() {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    function fetchApi() {
      console.log("Demo Function Executed!");
    }
    demo();
  }, [query]);
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
