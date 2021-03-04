//import { useEffect, useState } from "react";
import "./styles.css";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Jackson",
          phone: "6028023744",
          email: "jackson@gmail.com"
        }}
      />
      <ContactCard
        contact={{
          name: "Joanna",
          phone: "6028023744",
          email: "joanna41191@gmail.com"
        }}
      />
      <ContactCard
        contact={{
          name: "Jayaraj",
          phone: "123-456-7890",
          email: "jayaraj@hotmail.com"
        }}
      />
    </div>
  );
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
