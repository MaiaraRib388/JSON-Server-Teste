export default function Form({props}) {
  return (
    <div className="Form">
      <h1>Hello</h1>
      <h2>{props}</h2>
      <hr />
      <div>
        <input type="text" placeholder="Name" />
      </div>
      <hr />
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <hr />
      <div>
        <input type="text" placeholder="Number" />
      </div>
      <hr />
      <div>
      <button>Enviar </button>
      </div>
    </div>
  );
}
