[1.0.0] - Atividades de cadastrar, editar, excluir, concluir, editar lista de tarefas com angualr e spring boot e postgreSQL.
Para a atividade foram consideradas apenas consultas simples de listar atividades em andamento, e trabalhos com Data transfer object, bem como separados os itens entre domínio e infra.

Para executar o projeto caso não tenha o postgreSQL instalado deve entrar na pasta backend e no terminal executar o comando:
   #Comando docker
   docker-compose up -d
Caso tenha o postgreSQL, deverá entrar na pasta no application.yml e trocar login e senha.
Após o postgreSQL executar na máquina deverá ainda na pasta backend executar:
#comando spring boot
mvn spring-boot:run

onde o mesmo executará as migrations para as tabelas do serviço

Após deve-se entrar na pasta frontend e fazer a instalação dos pacotes através do:
#Comando instalar pacotes
npm install

após a instalação faremos a execução em um terminal separado:
#Comando angular
npm run start
ou
ng serve
