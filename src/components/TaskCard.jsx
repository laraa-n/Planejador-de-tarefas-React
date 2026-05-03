function TaskCard({ tarefa, marcarConcluida, apagarTarefa }) {
  const corDaPrioridade = {
    Alta: 'border-red-500',
    Media: 'border-yellow-500',
    Baixa: 'border-green-500',
  }

  return (
    <article
      className={`mb-3 rounded-lg border-l-4 bg-white p-3 shadow-md ${corDaPrioridade[tarefa.priority]}`}
    >
      <h3
        className={`font-medium text-slate-800 ${tarefa.done ? 'line-through opacity-60' : ''}`}
      >
        {tarefa.title}
      </h3>
      <p className="mt-2 text-sm text-slate-500">Prioridade: {tarefa.priority}</p>
      <div className="mt-3 space-y-2">
        <button
          type="button"
          className="w-full rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
          onClick={() => marcarConcluida(tarefa.id)}
        >
          {tarefa.done ? 'Voltar para pendente' : 'Marcar como concluida'}
        </button>
        <button
          type="button"
          className="w-full rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          onClick={() => apagarTarefa(tarefa.id)}
        >
          Deletar
        </button>
      </div>
    </article>
  )
}

export default TaskCard
