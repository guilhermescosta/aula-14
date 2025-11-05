import React, { useState } from "react";

function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const somar = () => setResultado(Number(num1) + Number(num2));
  const subtrair = () => setResultado(Number(num1) - Number(num2));
  const multiplicar = () => setResultado(Number(num1) * Number(num2));
  const dividir = () => setResultado(Number(num1) / Number(num2));

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Calculadora Simples</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={dividir}>/</button>
      </div>
      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
}

export default Calculadora;