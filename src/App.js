import "./styles.css";

export default function App() {
  return (
    <div>
      <Header days={days} />
    </div>
  );
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
