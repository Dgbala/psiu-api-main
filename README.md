# Psiu API

## Requisitos

### Aluno

- [X] Cadastrar um aluno
 - [X] Não deve ser possível cadastrar RA já cadastrado
 - [X] Gerar senha aleatória para primeiro acesso
  - [] Criar hash para a senha aleatória gerada

- [X] Editar aluno
  - [X] Deve ser possível alterar o nome e data de nascimento do aluno
  - [x] Não deve ser possivel atualizar um student inativo

- [] Atualizar senha
  - [] Não deve ser possível colocar uma senha fraca

- [X] Deletar aluno
  - [X] Deve utilizar soft delete
  - [x] Não deve ser possivel deletar um student inativo
 
- [X] Buscar alunos
  - [] Criar páginação na busca de alunis

### Autenticação 

- [] Autenticação com senha 
  - [] Verificar se o RA existe
  - [] Criar um token de autenticação

### Post

- [] Criar post
- [] Editar post
- [] Deletar post
- [] Buscar posts
- [] Buscar posts por aluno

### ComentarioPostagem

- [] Criar comentário
- [] Editar comentário
- [] Deletar comentário

### Reacaodepoimento

- [] Criar reação
- [] Deletar reação
