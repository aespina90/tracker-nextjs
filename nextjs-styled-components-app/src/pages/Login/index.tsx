export const Login = () => {
  return ( 
  <div className="w-screen h-screen bg-gray-300 flex justify-center">
    <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
      <aside className="flex justify-center items-center">
        <img src="/code.svg" alt="Coder" />
      </aside>
      <main className="flex flex-col justify-center items-center gap-16">
        <h1 className="font-bold text-3xl">Gestão de Projetos</h1>
        <form className="flex flex-col w-full gap-2 justify-center items-center">
          <label>
            <span>E-mail: </span>
            <input type="email" />
          </label>
          <label>
            <span>Senha: </span>
            <input type="password" />
          </label>
          <button>Login</button>
        </form>
        <a href="/register">Nova Conta</a>
      </main>
    </div>
  </div>
  )
}
