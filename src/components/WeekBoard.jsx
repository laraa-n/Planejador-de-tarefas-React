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

function WeekBoard({ listaTarefas, marcarConcluida }) {
  return (
    <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-7">
      {diasDaSemana.map((dia) => (
        <DayColumn
          key={dia}
          dia={dia}
          listaTarefas={listaTarefas}
          marcarConcluida={marcarConcluida}
        />
      ))}
    </section>
  )
}

export default WeekBoard
