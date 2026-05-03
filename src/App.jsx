import { useState } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import TaskForm from './components/TaskForm'
import WeekBoard from './components/WeekBoard'
import tarefasIniciais from './data/tasks.json'

function App() {
  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais)
  const [filtroAtual, setFiltroAtual] = useState('todas')

  function adicionarTarefa(novaTarefa) {
    if (!novaTarefa.title.trim()) {
      return
    }

    setListaTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      {
        id: Date.now(),
        title: novaTarefa.title.trim(),
        day: novaTarefa.day,
        priority: novaTarefa.priority,
        done: false,
      },
    ])
  }

  function marcarConcluida(idDaTarefa) {
    setListaTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === idDaTarefa ? { ...tarefa, done: !tarefa.done } : tarefa,
      ),
    )
  }

  function apagarTarefa(idDaTarefa) {
    setListaTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== idDaTarefa),
    )
  }

  function limparConcluidas() {
    setListaTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => !tarefa.done),
    )
  }

  const tarefasFiltradas = listaTarefas.filter((tarefa) => {
    if (filtroAtual === 'pendentes') {
      return !tarefa.done
    }

    if (filtroAtual === 'concluidas') {
      return tarefa.done
    }

    return true
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-[1600px] px-4 py-6">
        <TaskForm adicionarTarefa={adicionarTarefa} />
        <Summary listaTarefas={listaTarefas} />
        <section className="mb-6 rounded-xl bg-white p-4 shadow-md">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">Filtro</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    filtroAtual === 'todas'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  onClick={() => setFiltroAtual('todas')}
                >
                  Todas
                </button>
                <button
                  type="button"
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    filtroAtual === 'pendentes'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  onClick={() => setFiltroAtual('pendentes')}
                >
                  Pendentes
                </button>
                <button
                  type="button"
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    filtroAtual === 'concluidas'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  onClick={() => setFiltroAtual('concluidas')}
                >
                  Concluidas
                </button>
              </div>
            </div>
            <button
              type="button"
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
              onClick={limparConcluidas}
            >
              Limpar concluidas
            </button>
          </div>
        </section>
        <WeekBoard
          listaTarefas={tarefasFiltradas}
          marcarConcluida={marcarConcluida}
          apagarTarefa={apagarTarefa}
        />
      </main>
    </div>
  )
}

export default App
