import { useEffect, useState } from "react";
import "./styles.css";
import ContactCard from "./ContactCard";

function App() {
  return <ContactCard />;
}

export default App;

/*

Api 

export default function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((responce) => responce.json())
      .then(setData);
  }, []);

  if (data) {
    return <div> {JSON.stringify(data)} </div>;
  }
  return <div>No Data</div>;
}

*/
