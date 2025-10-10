// Seletores dos elementos por ID

const elements = {
    promptTitle : document.getElementById('prompt-title'),
    promptContent: document.getElementById('prompt-content'),
    titleWrapper: document.getElementById('title-wrapper'),
    contentWrapper: document.getElementById('content-wrapper'),
    btnOpen: document.getElementById("btn-open"),
    btnCollapse: document.getElementById("btn-collapse"),
    sidebar: document.querySelector(".sidebar"),

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

// Inicialização
function init() {
    attchAllEditableHandlers()
    updateAllEditableStates()

    elements.btnOpen.addEventListener('click' , openSidebar)
    elements.btnCollapse.addEventListener('click' , closeSidebar)
}

// Executa a inicialização ao carregar o script
init()