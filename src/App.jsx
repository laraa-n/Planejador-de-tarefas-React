import { useState } from 'react'
import Header from './components/Header'
import tarefasIniciais from './data/tasks.json'

function App() {
  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="rounded-xl bg-white p-4 shadow-md">
          <p className="text-sm text-slate-500">Tarefas carregadas</p>
          <strong className="text-2xl text-slate-800">{listaTarefas.length}</strong>
        </div>
      </main>
    </div>
  )
}

export default App
