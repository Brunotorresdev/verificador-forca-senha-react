import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Digite sua senha");

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    let currentScore = 0;

    if (password.length > 5) {
      currentScore += 1;
    }

    if (password.length > 10) {
      currentScore += 2;
    }

    if (/[A-Z]/.test(password)) {
      currentScore += 1;
    }

    if (/\d/.test(password)) {
      currentScore += 1;
    }

    if (/\w|_/.test(password)) {
      currentScore += 2;
    }

    if (score === 0) {
      setMessage("Digite sua senha");
    } else if (currentScore > 0 && currentScore <= 3) {
      setMessage("sua senha é fraca");
    } else if (currentScore > 3 && currentScore <= 6) {
      setMessage("sua senha é média");
    } else {
      setMessage("Sua senha é forte");
    }

    setScore(currentScore);
  }, [password, setScore]);

  return (
    <div className="App">
      <input value={password} placeholder="senha" onChange={changePassword} />

      <div>
        <h3>Força da senha</h3>
        <p>{message} </p>
        <p>{score}</p>
        <progress value={score} max={7} />
      </div>
    </div>
  );
}

export default App;
