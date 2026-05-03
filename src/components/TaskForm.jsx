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
    <section className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-sm">
      <h2 className="mb-1 text-xl font-semibold text-slate-800">Nova tarefa</h2>
      <p className="mb-4 text-sm text-slate-500">Preenche rapido e manda para o dia certo.</p>
      <form
        className="grid grid-cols-1 gap-3"
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
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
          placeholder="Digite uma tarefa"
          value={titulo}
          required
          onChange={(evento) => setTitulo(evento.target.value)}
        />
        <select
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
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
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
          value={prioridadeEscolhida}
          onChange={(evento) => setPrioridadeEscolhida(evento.target.value)}
        >
          <option value="Baixa">Baixa</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
        <button
          type="submit"
          className="rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800"
        >
          Adicionar
        </button>
      </form>
    </section>
  )
}

export default TaskForm
