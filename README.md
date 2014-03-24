kvissmester-frontend
====================

Frontend for kvissmesteren.

1. Installer ruby og compass:
```
# trengs for å serve koden under utvikling
brew install ruby # mac
sudo apt-get install ruby # ubuntu
# https://www.ruby-lang.org/ eller sjekk her
gem install compass # en liten sak for å kjøre
```

2. Installer node:
```
brew install node # mac
sudo apt-get install node # ubuntu
# http://nodejs.org eller sjekk her
```

3. Installer noen node-ting globalt:
```
npm install -g grunt-cli bower # må kanskje bruke sudo
```

4. Sjekk ut koden fra repo:
```
git clone https://github.com/tobiast/kvissmesterFrontend.git
cd kvissmesterFrontend
```

5. Installer grunt lokalt:
```
npm install grunt --save-dev # må kanskje bruke sudo
npm install
```

6. Installer bower components:
```
bower install
```

7. Kjør opp sever:
```
grunt serve
```

Gå til http://localhost:9000/#/scoreboard
