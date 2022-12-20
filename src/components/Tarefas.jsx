import { useState } from "react";
import axios from "axios";

export function Tarefas() {
  const [tarefas, setTarefas] = useState([]);

  function getTasks() {
    axios
      .get("https://projeto-individual-mod3.onrender.com/primeiraHabilitacao")
      .then((result) => {
        console.log(result);
        setTarefas(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function postTasks() {
    axios
      .post(
        "https://projeto-individual-mod3.onrender.com/primeiraHabilitacao",
        {
          id: 44,
          nome: "Categoria Z",
          descrição:
            "Curso indicado para quem quer se tornar um condutor de bicicletas",
          preco: 0,
          pagamento: "de graça",
        }
      )
      .then((result) => {
        console.log(result);
        setTarefas(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function deleteTasks() {
    const id = prompt("O que deseja deletar??");
    axios
      .post(
        "https://projeto-individual-mod3.onrender.com/primeiraHabilitacao" + id
      )
      .then((result) => {
        console.log(result);
        setTarefas(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <button onClick={getTasks}> Mostrar Dados</button>
      {/* <button onClick={postTasks}> Adicionar Dados</button> */}
      <button onClick={deleteTasks}> Deletar Dados</button>
      <ul>
        {tarefas.map((tarefa) => (
          <li>{tarefa.id}</li>
        ))}
        {tarefas.map((tarefa) => (
          <li>{tarefa.nome}</li>
        ))}
        {tarefas.map((tarefa) => (
          <li>{tarefa.descrição}</li>
        ))}
        {tarefas.map((tarefa) => (
          <li>{tarefa.preco}</li>
        ))}
        {tarefas.map((tarefa) => (
          <li>{tarefa.pagamento}</li>
        ))}
      </ul>
    </div>
  );
}
