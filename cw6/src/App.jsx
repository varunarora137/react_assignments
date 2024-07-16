import ValueContainer from "./components/ValueContainer/ValueContainer.jsx";
import GraphContainer from "./components/GraphContainer/GraphContainer.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [principleAmount, setPrincipleAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function setInitialValues(l, i, y, initialAmt) {
    const tLM = y * 12;
    const iPM = i / (100 * 12);
    const mP = (l * iPM * (1 + iPM) ** tLM) / ((1 + iPM) ** tLM - 1);
    const tI = mP * tLM - l;

    setMonthlyPayment(mP.toFixed(2));
    setTotalInterest(tI.toFixed(2));
    setPrincipleAmount(initialAmt);
  }

  return (
    <>
      <div className="nav">
        <p>Bank of React</p>
      </div>
      <div className="main">
        <ValueContainer setInitialValues={setInitialValues} />
        <GraphContainer
          principleAmount={principleAmount}
          totalInterest={totalInterest}
          monthlyPayment={monthlyPayment}
        />
      </div>
    </>
  );
}

export default App;
