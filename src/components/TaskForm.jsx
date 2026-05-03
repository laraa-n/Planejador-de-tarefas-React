import { useState } from 'react'

const diasDaSemana = [
  'Segunda',
  'Terca',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
  'Domingo',
]

function TaskForm({ adicionarTarefa }) {
  const [titulo, setTitulo] = useState('')
  const [diaEscolhido, setDiaEscolhido] = useState(diasDaSemana[0])
  const [prioridadeEscolhida, setPrioridadeEscolhida] = useState('Media')

  return (
    <section className="mb-6 rounded-xl bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">Nova tarefa</h2>
      <form
        className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4"
        onSubmit={(evento) => {
          evento.preventDefault()
          adicionarTarefa({
            title: titulo,
            day: diaEscolhido,
            priority: prioridadeEscolhida,
          })
          setTitulo('')
          setDiaEscolhido(diasDaSemana[0])
          setPrioridadeEscolhida('Media')
        }}
      >
        <input
          type="text"
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 outline-none focus:border-blue-500"
          placeholder="Digite uma tarefa"
          value={titulo}
          required
          onChange={(evento) => setTitulo(evento.target.value)}
        />
        <select
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 outline-none focus:border-blue-500"
          value={diaEscolhido}
          onChange={(evento) => setDiaEscolhido(evento.target.value)}
        >
          {diasDaSemana.map((dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          ))}
        </select>
        <select
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 outline-none focus:border-blue-500"
          value={prioridadeEscolhida}
          onChange={(evento) => setPrioridadeEscolhida(evento.target.value)}
        >
          <option value="Baixa">Baixa</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
        <button
          type="submit"
          className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
        >
          Adicionar
        </button>
      </form>
    </section>
  )
}

export default TaskForm
