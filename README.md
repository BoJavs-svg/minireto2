# minireto2
Mini-reto 2: Sushi's Sushi

## Descripción
Esta es una pagina web para ordenar sushi. Tiene una API que se conecta a una base de datos y maneja los pedidos y los carristos de los usuarios. La documentación de la API se encuentra en el archivo `SwaggerAPI.yaml` y se puede ver en [Swagger](https://editor.swagger.io/), tambien fue descargada como pdf y se encuentra en `APISwagger.pdf` para su facil visualización.
La carpeta users contiene la app en react que se encarga de manejar la interfaz de usuario, esta se conecta a la API en el index.js. 

## Instalación
Para instalar el proyecto se debe clonar el repositorio y luego instalar las dependencias de la API y de la app de react. Para esto se debe correr el siguiente comando en la carpeta raiz del proyecto:
```
npm install
```
Luego se debe correr el siguiente comando en la carpeta users:
```
npm install
```
## Ejecución

Para correr el proyecto se debe correr el siguiente comando en la carpeta user del proyecto:
Esto lo correra de manera local 
```
npm start
```
Tambien se puede ver la app hosteada en vercel en el siguiente link: [Sushi's Sushi](`https://test-ten-nu-72.vercel.app/`)

## Uso
Para usar la app se debe crear un carrito en la pagina. Luego se puede agregar sushi al carrito y se puede ver el carrito. En esta pagina se puede editar el carrito y se puede hacer el pedido. 
## Licencia
[MIT](https://choosealicense.com/licenses/mit/)



