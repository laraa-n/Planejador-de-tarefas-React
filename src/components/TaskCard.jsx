function TaskCard({ tarefa }) {
  return (
    <article className="mb-3 rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <h3 className="font-medium text-slate-800">{tarefa.title}</h3>
      <p className="mt-2 text-sm text-slate-500">Prioridade: {tarefa.priority}</p>
    </article>
  )
}

export default TaskCard
