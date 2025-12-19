// Task Manager: add, delete, toggle complete, and persist to localStorage
(function(){
  'use strict'

  const LS_KEY = 'taskmgr.tasks.v1'
  const FILTER_KEY = 'taskmgr.filter.v1'
  const THEME_KEY = 'taskmgr.theme.v1'
  const form = document.getElementById('task-form')
  const input = document.getElementById('task-input')
  const list = document.getElementById('tasks-list')
  const countEl = document.getElementById('task-count')
  const clearCompletedBtn = document.getElementById('clear-completed')
  const filterBtns = document.querySelectorAll('.filter-btn')
  const themeToggle = document.getElementById('theme-toggle')

  let tasks = []
  let filter = 'all'
  let theme = 'dark'

  function save(){
    try{
      localStorage.setItem(LS_KEY, JSON.stringify(tasks))
      localStorage.setItem(FILTER_KEY, filter)
      localStorage.setItem(THEME_KEY, theme)
    }catch(e){console.warn('Failed to save tasks',e)}
  }

  function load(){
    try{
      const raw = localStorage.getItem(LS_KEY)
      tasks = raw?JSON.parse(raw):[]
      const f = localStorage.getItem(FILTER_KEY)
      if(f) filter = f
      const t = localStorage.getItem(THEME_KEY)
      if(t) theme = t
    }catch(e){tasks=[]}
  }

  function applyTheme(t){
    theme = t || 'dark'
    try{
      document.documentElement.setAttribute('data-theme', theme)
    }catch(e){}
    if(themeToggle){
      const isDark = theme === 'dark'
      themeToggle.setAttribute('aria-pressed', String(isDark))
      themeToggle.title = isDark? 'Switch to light mode' : 'Switch to dark mode'
      themeToggle.textContent = isDark? '🌙' : '☀️'
      const hidden = document.createElement('span')
      hidden.className = 'visually-hidden'
      hidden.textContent = isDark? 'Toggle dark mode' : 'Toggle light mode'
      // ensure hidden label exists without duplicating
      if(!themeToggle.querySelector('.visually-hidden')) themeToggle.appendChild(hidden)
    }
  }

  function toggleTheme(){
    applyTheme(theme === 'dark' ? 'light' : 'dark')
    save()
  }

  function updateCount(){
    const total = tasks.length
    const remaining = tasks.filter(t=>!t.completed).length
    countEl.textContent = `${remaining} remaining · ${total} total`
  }

  function createTaskElement(task){
    const li = document.createElement('li')
    li.dataset.id = task.id

    const checkbox = document.createElement('button')
    checkbox.className = 'task-checkbox'
    checkbox.setAttribute('aria-pressed', String(task.completed))
    checkbox.setAttribute('aria-label', task.completed? 'Mark as incomplete':'Mark as complete')
    checkbox.title = checkbox.getAttribute('aria-label')
    checkbox.addEventListener('click', ()=>toggleTask(task.id))

    const label = document.createElement('div')
    label.className = 'task-label'
    if(task.completed) label.classList.add('completed')
    label.textContent = task.text
    label.tabIndex = 0
    label.setAttribute('role','text')

    // keyboard support: space/enter toggles complete
    label.addEventListener('keydown', (e)=>{
      if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); toggleTask(task.id) }
    })

    const actions = document.createElement('div')
    actions.className = 'task-actions'

    const toggleBtn = document.createElement('button')
    toggleBtn.className = 'small-btn toggle'
    toggleBtn.textContent = task.completed? 'Undo' : 'Done'
    toggleBtn.addEventListener('click', ()=>toggleTask(task.id))

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'small-btn delete'
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', ()=>removeTask(task.id))

    actions.appendChild(toggleBtn)
    actions.appendChild(deleteBtn)

    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(actions)

    return li
  }

  function render(){
    list.innerHTML = ''
    if(tasks.length === 0){
      const empty = document.createElement('li')
      empty.textContent = 'No tasks — add one above.'
      empty.style.opacity = '0.6'
      list.appendChild(empty)
    } else {
      const visible = tasks.filter(t=>{
        if(filter === 'all') return true
        if(filter === 'completed') return t.completed
        if(filter === 'pending') return !t.completed
        return true
      })
      if(visible.length === 0){
        const empty = document.createElement('li')
        empty.textContent = 'No tasks match this filter.'
        empty.style.opacity = '0.6'
        list.appendChild(empty)
      } else {
        visible.forEach(t=> list.appendChild(createTaskElement(t)))
      }
    }
    updateCount()
    save()
  }

  function updateFilterButtons(){
    if(!filterBtns) return
    filterBtns.forEach(btn=>{
      const f = btn.dataset.filter
      btn.setAttribute('aria-pressed', String(f === filter))
    })
  }

  function setFilter(f){
    filter = f || 'all'
    updateFilterButtons()
    save()
    render()
  }

  function addTask(text){
    const trimmed = (text||'').trim()
    if(!trimmed) return
    const task = { id: Date.now().toString(36)+Math.random().toString(36).slice(2,6), text: trimmed, completed:false }
    tasks.unshift(task)
    render()
  }

  function toggleTask(id){
    tasks = tasks.map(t=> t.id===id? {...t, completed: !t.completed } : t)
    render()
  }

  function removeTask(id){
    const keep = tasks.filter(t=>t.id!==id)
    tasks = keep
    render()
  }

  function clearCompleted(){
    tasks = tasks.filter(t=>!t.completed)
    render()
  }

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const taskText = input.value.trim()
    if(taskText){
        addTask(taskText)
        input.value = ''
        input.focus()
    }
})

  clearCompletedBtn.addEventListener('click', ()=>{
    clearCompleted()
  })

  // filter button handlers
  if(filterBtns && filterBtns.length){
    filterBtns.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const f = btn.dataset.filter
        setFilter(f)
      })
    })
  }

  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      toggleTheme()
    })
  }

  // initialize
  load()
  updateFilterButtons()
  applyTheme(theme)
  render()

  // expose for debugging
  window.TaskApp = { addTask, toggleTask, removeTask, clearCompleted, setFilter, toggleTheme, tasks }
})();
