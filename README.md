## React Coding Challenge

### Features available

-   Creation de compte `<END_POINT>/signup`
-   Connexion `<END_POINT>/signin`
-   Email verification
-   CRUD Entrepots
-   Change mode coleur du <strong>Dashboard</strong>

### Requirements

---

-   Node >= 18.12.1
-   NPM or YARN installer

### Run the App

-   Installer les dépendances `npm install` or `yarn install`
-   Créez le fichier `.env` et définissez ces variables à partir de Firebase (SDK setup and configuration) :
```json
REACT_APP_FIRE_APIKEY= 
REACT_APP_FIRE_AUTHDOMAIN=
REACT_APP_FIRE_PROJECTID=
REACT_APP_FIRE_STORAGEBUCKET= 
REACT_APP_FIRE_MESSAGINGSENDERID= 
REACT_APP_FIRE_APPID=
```
-   Et lancez le serveur local `npm start` or `yarn start`

**_NB:_** _Pour ce projet je n'ai pas ignore le fichier .env donc toutes les configs sont a l'interieure_