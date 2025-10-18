// Chave para identificar os dados salvos pela app no navegador
const STORAGE_KEY = "prompts_storage"

// Estado para carregar os prompts salvos e exibir
const state = {
    prompts: [],
    selectedId: null,

}

// Seletores dos elementos por ID
const elements = {
    promptTitle : document.getElementById('prompt-title'),
    promptContent: document.getElementById('prompt-content'),
    titleWrapper: document.getElementById('title-wrapper'),
    contentWrapper: document.getElementById('content-wrapper'),
    btnOpen: document.getElementById("btn-open"),
    btnCollapse: document.getElementById("btn-collapse"),
    sidebar: document.querySelector(".sidebar"),
    btnSave: document.getElementById("btn-save"),

};

// Atualiza o estado do wrapper conforme o contéudo do elemento

function updateEditableWrapperState(element, wrapper) {
    const hasText = element.textContent.trim().lenght > 0

    wrapper.classList.toggle("is-empty", !hasText)  
}

function openSidebar() {
    elements.sidebar.style.display = "flex";
    elements.btnOpen.style.display = "none";
}

function closeSidebar() {
    elements.sidebar.style.display = "none";
    elements.btnOpen.style.display = "block";

}



// Atualiza o estado de todos os elementos editáveis
function updateAllEditableStates() {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
}

// Adiciona ouvintes de input para atualizar wrappers em tempo real
function attchAllEditableHandlers() {
        elements.promptTitle.addEventListener("input", function() {
           updateEditableWrapperState(elements.promptTitle, elements,titleWrapper)
        })
    
      elements.promptContent.addEventListener("input", function() {
            updateEditableWrapperState(
                elements.promptContent, 
                elements,contentWrapper
            )
        })
    
}

// Função para abrir a sidebar
function openSidebar() {
    document.querySelector('.sidebar').classList.add('is-open')
    elements.btnOpen.style.display = 'none'
}

// Função para fechar a sidebar
function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('is-open')
    elements.btnOpen.style.display = ''
}

function save() {
  const title = elements.promptTitle.textContent.trim()
  const content = elements.promptContent.innerHTML.trim()
  const hasContent = elements.promptContent.textContent.trim()

  if (!title || !hasContent) {
    alert("Título e conteúdo não podem estar vazios.")
    return
  }

  if(state.selectedId) {
   
  } else {
    const newPrompt = {
      id: Date.now().toString(),
      title,
      content,
    }
    state.prompts.unshift(newPrompt)
    state.selectedId = newPrompt.id
  }  

}

// Eventos dos botões
elements.btnSave.addEventListener('click', save)

// Inicialização
function init() {
    attchAllEditableHandlers()
    updateAllEditableStates()

    elements.btnOpen.addEventListener('click' , openSidebar)
    elements.btnCollapse.addEventListener('click' , closeSidebar)
}

// Executa a inicialização ao carregar o script
init()