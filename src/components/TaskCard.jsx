function TaskCard({ tarefa, marcarConcluida, apagarTarefa }) {
  const corDaPrioridade = {
    Alta: 'border-red-500 bg-red-50',
    Media: 'border-yellow-500 bg-yellow-50',
    Baixa: 'border-green-500 bg-green-50',
  }

  return (
    <article
      className={`rounded-2xl border-l-4 p-3 shadow-sm ${corDaPrioridade[tarefa.priority]}`}
    >
      <h3
        className={`text-sm font-semibold text-slate-800 ${tarefa.done ? 'line-through opacity-60' : ''}`}
      >
        {tarefa.title}
      </h3>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-white px-2 py-1 text-[11px] font-medium text-slate-600">
          {tarefa.priority}
        </span>
        <span className="text-[11px] text-slate-500">
          {tarefa.done ? 'Concluida' : 'Pendente'}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="rounded-xl bg-blue-500 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-600"
          onClick={() => marcarConcluida(tarefa.id)}
        >
          {tarefa.done ? 'Desfazer' : 'Concluir'}
        </button>
        <button
          type="button"
          className="rounded-xl bg-white px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-100"
          onClick={() => apagarTarefa(tarefa.id)}
        >
          Remover
        </button>
      </div>
    </article>
  )
}

export default TaskCard
