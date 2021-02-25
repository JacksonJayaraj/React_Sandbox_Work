import { useEffect, useState } from "react";
import "./styles.css";

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

  /*
   return (
    <div>
      <Header days={days} />
      <Section login={login} />
    </div>
  );
  */
}

function Header(props) {
  return (
    <div>
      <h1> React Tutorial</h1>
      <ul>
        {props.days.map((day) => (
          <li> {day} </li>
        ))}
      </ul>
    </div>
  );
}

const days = ["Monday", "Tuesday"];
