import TaskCard from './TaskCard'

function DayColumn({ dia, listaTarefas, marcarConcluida, apagarTarefa }) {
  const tarefasDoDia = listaTarefas.filter((tarefa) => tarefa.day === dia)

  return (
    <div className="min-h-[540px] rounded-[26px] bg-slate-100/90 p-3">
      <div className="mb-3 flex items-center justify-between rounded-2xl bg-white px-3 py-3 shadow-sm">
        <h2 className="text-base font-semibold text-slate-800">{dia}</h2>
        <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-white">
          {tarefasDoDia.length}
        </span>
      </div>
      {tarefasDoDia.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-4 text-center text-sm text-slate-400">
          Nenhuma tarefa para este dia
        </div>
      )}
      <div className="space-y-3">
        {tarefasDoDia.map((tarefa) => (
          <TaskCard
            key={tarefa.id}
            tarefa={tarefa}
            marcarConcluida={marcarConcluida}
            apagarTarefa={apagarTarefa}
          />
        ))}
      </div>
    </div>
  )
}

export default DayColumn
