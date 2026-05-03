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
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
      <Header />
      <main className="mx-auto max-w-[1600px] px-4 py-6 lg:px-6">
        <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-5 xl:sticky xl:top-6 xl:self-start">
            <Summary listaTarefas={listaTarefas} />
            <TaskForm adicionarTarefa={adicionarTarefa} />
            <section className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">Filtrar</h2>
                  <p className="text-sm text-slate-500">Escolhe o que quer ver.</p>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                  onClick={limparConcluidas}
                >
                  Limpar
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 xl:grid-cols-1">
                <button
                  type="button"
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    filtroAtual === 'todas'
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  onClick={() => setFiltroAtual('todas')}
                >
                  Todas
                </button>
                <button
                  type="button"
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    filtroAtual === 'pendentes'
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  onClick={() => setFiltroAtual('pendentes')}
                >
                  Pendentes
                </button>
                <button
                  type="button"
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    filtroAtual === 'concluidas'
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  onClick={() => setFiltroAtual('concluidas')}
                >
                  Concluidas
                </button>
              </div>
            </section>
          </aside>
          <section className="rounded-[32px] border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Quadro semanal</h2>
                <p className="text-sm text-slate-500">
                  As tarefas ficam separadas por dia em um painel lateral.
                </p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-white">
                {tarefasFiltradas.length} visiveis
              </span>
            </div>
            <WeekBoard
              listaTarefas={tarefasFiltradas}
              marcarConcluida={marcarConcluida}
              apagarTarefa={apagarTarefa}
            />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
