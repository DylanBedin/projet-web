## Dépendances application :  

pm2, angular/cli, npm  

    $ sudo apt install npm
    $ sudo npm install -g pm2
    $ sudo npm install -g @angular/cli 

## Lancement de l'application:

    $ ./install.sh  //fait les npm install et ng build 
    $ ./start.sh    //lance l'appli  
    $ ./stop.sh      //stop l'appli

## adresse de deploiement :
  
localhost:3000 : swagger-ui  
localhost:4200 : application  

## dépendance des tests : protractor

    $ sudo npm install -g protractor
    $ sudo npm install -g newman
    
## lancement des tests :

    $ sudo webdriver-manager update
    $ webdriver-manager start
    $ protractor protractorConf.js  // tests e2e
    
    $ newman run tests/route/route.json  // test unitaire sur les routes


