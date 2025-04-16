Exemplo de comandos com envio de variaveis de ambiente

#shell (linux, macos, gitbash Windows) 
CYPRESS_MY_ENV=hml 
npx cypress open

ou

export CYPRESS_MY_ENV="hml" 
npx cypress open

#cmd 
set CYPRESS_MY_ENV="hml" 
npx cypress open

#powershell 
$env:CYPRESS_MY_ENV="hml"

# --env commands
npx cypress open --env MY_ENV="local"
