# Sobre o Cookmaster Project
Este projeto visa interligar um banco de dados de usuarios, e receitas,onde é possível incluir informações de texto e imagens. Para criar, editar e apagar receitas, a aplicação passa por uma autenticação do usuário, verificando se este efetuou login e senha corretos, e se este usuário pode apagar ou editar tal receita(só é possível se ele for o criador da receita, ou se for um usuario com perfil 'admin'). 

# Informações para pessoas da área de T.I.
- Esta aplicação utiliza uma conexão de banco de dados mongoDb.
- A conexão é feita através de APIs REST.
- Utilização do pacote express para criar as rotas das requisições.
- Utilização do padrão MSC para organização do código.
- Para fazer upload de arquivos, utilizo o pacote Multer.
- A geração e verificação de tokens é do tipo JWT (JsonWebTokem).


# Como rodar o projeto:

1- Fazer o clone do projeto para sua máquina utilizando o seguinte comando em seu terminal:
```git clone git@github.com:felipeshcolnik/cookMaster-api.git```
2- Instalar as dependencias necessárias para o projeto funcionar corretamente:
```npm install```
3- Iniciar a aplicação digitando:
```npm start```
4- Iniciar o banco de dados, neste caso o MongoDB, digitando no terminal:
```sudo systemctl start mongod.service```
ou apenas 
```'mongo'```


# Contato:

Qualquer dúvida, entre em contato através do email: shcolnik@gmail.com
