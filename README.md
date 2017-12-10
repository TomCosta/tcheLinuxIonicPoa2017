# Tchê Linux Porto Alegre 2017
Um aplicativo de clima criado para a demonstração do desenvolvimento de aplicativos em Ionic no evento Tchê Linux Porto Alegre 2017.

## Preparando o ambiente, instale o Node.js
- `sudo apt-get update`
- `sudo apt-get install nodejs`
- `sudo apt-get install npm`

## Em seguida instale o Ionic e o Cordova
- `npm install -g ionic cordova`

## Para baixar e iniciar este aplicativo
- `git clone https://github.com/TomCosta/tcheLinuxIonicPoa2017.git`
- `cd tcheLinuxIonicPoa2017`
- `npm install`
- `ionic serve`
*Faça o seu cadastro na openweather.org para obter a sua api key.*

### Para gerar um .apk (app Android)
- `ionic cordova build android`

#### Para instalar o .apk no smartphone
No seu Android, habilite instalações de fontes desconhecidas.
Para fazer testes ou gerar aplicativos nas versões iOS, verifique a documentação do [Ionic Framework](https://ionicframework.com/docs/v1/guide/testing.html).
