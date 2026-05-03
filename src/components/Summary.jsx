function Summary({ listaTarefas }) {
  const total = listaTarefas.length
  const concluidas = listaTarefas.filter((tarefa) => tarefa.done).length
  const pendentes = total - concluidas

  return (
    <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-xl bg-white p-4 shadow-md">
        <p className="text-sm text-slate-500">Total</p>
        <strong className="text-2xl text-slate-800">{total}</strong>
      </div>
      <div className="rounded-xl bg-white p-4 shadow-md">
        <p className="text-sm text-slate-500">Concluidas</p>
        <strong className="text-2xl text-slate-800">{concluidas}</strong>
      </div>
      <div className="rounded-xl bg-white p-4 shadow-md">
        <p className="text-sm text-slate-500">Pendentes</p>
        <strong className="text-2xl text-slate-800">{pendentes}</strong>
      </div>
    </section>
  )
}

export default Summary
