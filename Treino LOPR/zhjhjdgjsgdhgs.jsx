import React, { useState, useEffect } from "react";

export default function ComponenteInutil60() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("olá");
  const [flag, setFlag] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Efeito que incrementa o contador lentamente (porque pode)
  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 5000);
    return () => clearInterval(id);
  }, []);

  // Efeito que não faz nada útil — apenas observa mudanças
  useEffect(() => {
    // nada realmente acontece aqui
  }, [text, flag, hidden]);

  // Funções inúteis
  function toggleFlag() {
    setFlag((f) => !f);
  }

  const noop = () => {
    // altera algo só para fingir que há propósito
    setText((t) => t + ".");
    setHidden((h) => !h);
  };

  const fakeList = new Array(4).fill(0).map((_, i) => ({
    id: i,
    name: `item-${i}`,
  }));

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 20 }}>
      <h1>Componente JSX Inútil (60 linhas)</h1>

      <p>Contador (aumenta a cada 5s): {count}</p>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={toggleFlag}>Alternar Flag</button>
        <button onClick={noop}>Fazer Nada</button>
      </div>

      <div aria-hidden={hidden}>
        {fakeList.map((item) => (
          <div
            key={item.id}
            onClick={() => console.log("Clicou em", item.name)}
            style={{ padding: 6, border: "1px solid #ddd", marginBottom: 6 }}
          >
            <strong>{item.name}</strong>
            <div>
              <small>Descrição inútil e redundante.</small>
            </div>
          </div>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        style={{ width: "100%", marginTop: 12 }}
      />

      <pre style={{ background: "#f6f6f6", padding: 8, marginTop: 12 }}>
        {JSON.stringify({ count, text, flag }, null, 2)}
      </pre>

      <svg width="160" height="28" aria-hidden style={{ display: "block", marginTop: 12 }}>
        <rect width="160" height="28" fill="#eee"></rect>
        <text x="8" y="18">SVG inútil</text>
      </svg>

      <hr style={{ marginTop: 16 }} />

      <footer style={{ marginTop: 8 }}>
        <small>Gerado para diversão — sem propósito real.</small>
      </footer>
    </div>
  );
}
