import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [container, setContainer] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(item);
    console.log(container);
    if (item.trim() !== "") {
      setContainer((contain) => [...contain, item.trim()]);
      setItem("");
    }
  }
  function handleClick(id) {
    console.log(id);
    setContainer((curr) => curr.filter((_, i) => i !== id));
  }
  return (
    <div className="container">
      <h1>TO DO LIST APP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add items..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
      <ul>
        {container.map((todo, i) => (
          <li
            onClick={() => handleClick(i)}
            key={i}
            style={{
              listStyleType: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            {todo} ❌
          </li>
        ))}
      </ul>
    </div>
  );
}
