import TaskCard from './TaskCard'

function DayColumn({ dia, listaTarefas, marcarConcluida, apagarTarefa }) {
  const tarefasDoDia = listaTarefas.filter((tarefa) => tarefa.day === dia)

  return (
    <div className="rounded-xl bg-white p-4 shadow-md md:min-h-[420px]">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">{dia}</h2>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {tarefasDoDia.length}
        </span>
      </div>
      {tarefasDoDia.length === 0 && (
        <p className="text-sm text-slate-400">Nenhuma tarefa para este dia</p>
      )}
      {tarefasDoDia.map((tarefa) => (
        <TaskCard
          key={tarefa.id}
          tarefa={tarefa}
          marcarConcluida={marcarConcluida}
          apagarTarefa={apagarTarefa}
        />
      ))}
    </div>
  )
}

export default DayColumn
