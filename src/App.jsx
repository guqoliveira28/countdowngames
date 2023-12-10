import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

const challenges = [
  {
    title: "Easy",
    targetTime: 1,
  },
  {
    title: "Not Easy",
    targetTime: 5,
  },
  {
    title: "Getting Tough",
    targetTime: 10,
  },
  {
    title: "Pros Only",
    targetTime: 15,
  },
];

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {challenges.map((challenge, index) => (
          <TimerChallenge
            key={index}
            title={challenge.title}
            targetTime={challenge.targetTime}
          />
        ))}
      </div>
    </>
  );
}

export default App;
