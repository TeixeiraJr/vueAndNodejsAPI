# vueAndNodejsAPI

Aplicação fullstack com **backend Node.js** e **frontend Vue.js**, integrando uma API REST com interface de formulário de usuário. Projeto com deploy no Heroku.

## Estrutura

- `backend/` — API REST com Node.js e Express
- - `frontend/userform/` — Interface Vue.js consumindo a API
 
  - ## Tecnologias
 
  - - Node.js + Express (backend)
    - - Vue.js (frontend)
      - - Docker / Docker Compose
        - - Heroku (deploy)
         
          - ## Como rodar
         
          - ```bash
            # Backend
            cd backend
            npm install
            npm start

            # Frontend
            cd frontend/userform
            npm install
            npm run serve
            ```
            
