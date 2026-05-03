function TaskCard({ tarefa, marcarConcluida }) {
  return (
    <article className="mb-3 rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <h3 className="font-medium text-slate-800">{tarefa.title}</h3>
      <p className="mt-2 text-sm text-slate-500">Prioridade: {tarefa.priority}</p>
      <button
        type="button"
        className="mt-3 w-full rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
        onClick={() => marcarConcluida(tarefa.id)}
      >
        {tarefa.done ? 'Voltar para pendente' : 'Marcar como concluida'}
      </button>
    </article>
  )
}

export default TaskCard
