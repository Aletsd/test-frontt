# amTest
Evalución frontend


## Features

- New UX/UI, mobile and desktop (responsive design)
- It has a webpack, to deploy the application
- Has bootstrap react, for agile development

## UX/UI Directives
Due the nature of the website, you'll have many kind of containers inside it.

- Mobile dedicated container: These containers are used in mobile experience only.
- Desktop dedicated container: These containers are used for desktop experience.
- Shared containers: These containers are used in desktop and mobile experiences.

### Stack 

Within the project is running express, babel, webpack, react-bootstrrap, scss, among other technologies

## Development Directives

### Project install in any environment
You must have installed in your environment NodeJS, NPM, webpack-cli, nodemon, babel/cli, 
```
npm install
```

### Deploy for development
Ready for development? Open 3 different consoles and run on each of the following commands

- Compile webpack and update whenever changes occur

```
npm run watch  
```

- Raise the server
```
npm run start
```
- Api fake
```
npx json-server --watch hp-gryffindor.json --port 3002
```
The compilation will generate a dummy server and make hot loading of all your
changes. Don't forget to commit them at the end of the day.
### Deploy for production

```
After that, upload the dist folder to the assigned folder with FTP server.
No upload necessary if repo is configured directly in server, but you must focus your Apache/nginx/IIS server to the **dist** folder.


## Credits

##### Developed by Alexis Harol Velasco Ruiz


 ¿Qué es lo que más te gustó de tu desarrollo? Me gusta crear interfaces a parttir de un diseño, como darle vida y funcionalidad
 Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué
más hubieras hecho? Hubiera creado los endpointt en express y los hubiera consumido, para dejar un crud completo, incluyendo el backend
 Descríbenos un pain point o bug con el que te hayas encontrado
y como lo solucionaste: Todos los registros, traen la misma casa (house), aunque en mi codigo si considere las 4 casas, en caso de que reciba otros registros
