import { useState } from "react";

export default function NovaTarefa() {
  const [titulo, setTitulo] = useState("");

  return (
    <div>
      <h1>{titulo}</h1>
      <input type="text" onChange={(e) => setTitulo(e.target.value)} />
    </div>
  );
}
