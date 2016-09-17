![zoomit](https://cloud.githubusercontent.com/assets/16921957/18571719/3f9fc41a-7b7a-11e6-9c88-b034bf24d43a.png)

Entre más cerca mejor. Haz que tus usuarios vean con detalle la grandeza de tus servicios o productos haciendo zoom sobre ellos de la forma más fácil.

## Uso
La implementación de zoomIt trata de ser lo más sencilla posible para evitar código extra o alargamiento inecesario en el peso de los archivos.

Lo único que se debe hacer, es agregar el atributo **zoomit** dentro de la etiqueta del objeto sobre el que deseas hacer zoom.
```html
	<img src="myimage.png" zoomit>

	<div class="galyrian" zoomit></div>

	<figure zoomit></figure>
```

## Descarga
### Versión de Producción
Si lo que buscas es simplemente utilizar zoomIt en tu proyecto, la versión de Producción es la indicada.

Tan sólo descárgala desde [aquí](https://raw.githubusercontent.com/EdGraVill/zoomIt/master/zoomIt/production/zoomIt-prod-0.3.0.min.js).
O en el repositorio de este proyecto, siguiendo la ruta: `./zoomIt/production/`

[zoomIt-prod-0.3.0.js](https://raw.githubusercontent.com/EdGraVill/zoomIt/master/zoomIt/production/zoomIt-prod-0.3.0.min.js)
### Versión de Desarrollo
Si buscas 'tunear' y/o ayudar a mejorar zoomIt, te invitamos a descargar la versión de desarrollo.

Tan sólo descárgala desde [aquí](https://raw.githubusercontent.com/EdGraVill/zoomIt/master/zoomIt/development/zoomIt-dev-0.3.0.js).
O en el repositorio de este proyecto, siguiendo la ruta: `./zoomIt/development/`

[zoomIt-dev-0.3.0.js](https://raw.githubusercontent.com/EdGraVill/zoomIt/master/zoomIt/development/zoomIt-dev-0.3.0.js)

## Instalación
### jQuery
Lo primero a tomar en cuenta, es la dependencia de zoomIt de la librería jQuery

Por lo que si en tu proyecto no utilizas jQuery puedes utilizarlo de dos maneras:
* Descargar el archivo
	Y seguir las instrucciones del siguiente [enlace](https://jquery.com/download/).
* Utilizar un CDN
	Tan sólo pegando el siguiente código justo antes del cierre de la etiqueta HEAD:
```html
<head>
	...
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>
```
### zoomIt
Una vez implementado jQuery en nuestro proyecto, es momento de implementar el código de zoomIt, el cual hace toda la magia.

Para hacerlo, hay que descargar el archivo de producción y guardarlo el directorio de nuestro proyecto. (Recomendamos ampliamente crear una carpeta en el root llamada 'js' y guardar zoomIt.js allí).

Posteriormente agregar una etiqueta `<script>` llamando a zoomIt justo antes de terminar la etiqueta BODY:
```html
<body>
	...
	<script type="text/javascript" src="./js/zoomIt-prod-0.3.0.min.js"></script>
</body>
```

## En Futuras Versiones
- Hacer zoom en cualquier elemento del DOM (con Domvas)
- Añadir la funcionalidad para aumentar el zoom en dispositivoso móviles con el gesto del pellizco.
- Buscar si existen imágenes con resoluciones más altas y mostrarlas en la vista de pantalla completa.
- Soporte para max-width, min-width, max-height y min-height.

## Licencia
Desarrollado por Eduardo Grajales [@EdGraVill](https://github.com/EdGraVill) bajo la licencia [GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.html)
