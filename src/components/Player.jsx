import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [customPlayerName, setCustomPlayerName] = useState();

  function handleClick() {
    setCustomPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {customPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
