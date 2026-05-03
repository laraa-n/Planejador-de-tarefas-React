function Summary({ listaTarefas }) {
  const total = listaTarefas.length
  const concluidas = listaTarefas.filter((tarefa) => tarefa.done).length
  const pendentes = total - concluidas

  return (
    <section className="grid grid-cols-3 gap-3">
      <div className="rounded-[24px] bg-slate-900 p-4 text-white shadow-sm">
        <p className="text-xs uppercase tracking-wide text-slate-300">Total</p>
        <strong className="mt-2 block text-3xl">{total}</strong>
      </div>
      <div className="rounded-[24px] bg-blue-500 p-4 text-white shadow-sm">
        <p className="text-xs uppercase tracking-wide text-blue-100">Concluidas</p>
        <strong className="mt-2 block text-3xl">{concluidas}</strong>
      </div>
      <div className="rounded-[24px] bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-wide text-slate-400">Pendentes</p>
        <strong className="mt-2 block text-3xl text-slate-800">{pendentes}</strong>
      </div>
    </section>
  )
}

export default Summary
