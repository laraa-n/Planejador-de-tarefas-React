import DayColumn from './DayColumn'

const diasDaSemana = [
  'Segunda',
  'Terca',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
  'Domingo',
]

function WeekBoard({ listaTarefas, marcarConcluida, apagarTarefa }) {
  return (
    <section className="overflow-x-auto pb-2">
      <div className="grid min-w-[1120px] grid-cols-7 gap-4">
      {diasDaSemana.map((dia) => (
        <DayColumn
          key={dia}
          dia={dia}
          listaTarefas={listaTarefas}
          marcarConcluida={marcarConcluida}
          apagarTarefa={apagarTarefa}
        />
      ))}
      </div>
    </section>
  )
}

export default WeekBoard
