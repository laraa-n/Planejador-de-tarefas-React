function DayColumn({ dia, listaTarefas }) {
  const tarefasDoDia = listaTarefas.filter((tarefa) => tarefa.day === dia)

  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">{dia}</h2>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {tarefasDoDia.length}
        </span>
      </div>
    </div>
  )
}

export default DayColumn
