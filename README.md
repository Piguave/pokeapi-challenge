cree un nuevo proyecto con React corriendo este comando:

npx create-react-app mi-nueva-aplicacion
Para inicializar la aplicación con React importe react y react-dom en el archivo raíz de tu aplicación.

import React from 'react';
import ReactDOM from 'react-dom';

ademas se instale las siguientes librerias 
    "axios": "^0.19.2",
    "bootstrap": "^4.4.1",
    "express": "^4.18.2",
    "pg": "^8.8.0",

    los componentes estan compuestos por dos secciones 
    la carpeta pokemmon se encuentra el codigo para obetener informacion de los pokemones y poder listarlos 
    la carpeta layout se encuentran los conponenetes del nav y emcabezado de la pagina 

    en la carpeta server se encuentra la configuracion a la base de datos y codigo fuente 