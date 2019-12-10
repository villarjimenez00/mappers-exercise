
## Starter code
el archivo src/data.js contiene un array con 250 películas. Este es un ejemplo de la información que contiene el array: 

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":9.3
}
```

A lo largo de las siguientes iteraciones deberás aplicar los métodos funcionales visto en clase (y quizás otros)


### Tests
Ohhh yeah! Test. 

Recuerda, ve a la carpeta test y ejecuta el archivo `SpecRunner.html` en el navegador. 
Si te resulta más cómodo, puedes comentar los test que aun no estés realizando e ir descomentándolos como prefieras

### Iteración 1: ordenar por año.
Necesitamos ordenar las películas en orden ascendente por año. Crea una función `orderByYear()` que recive como parametro un array y devuelva un _array ordenado_

Si dos películas tienen el mismo año, deberán ordenarse alfabeticamente por su título. 

__Cuidado con modificar el array original!__


### Iteración 2. ¿Es Steven Spielberg el mejor?

Crea una función`howManyMovies()` que reciba un array como parámetro y filtre el array para obtener sólo las películas de __drama__ en las cuales __Steven Spielerg__ es el director


### Iteración 3: orden alfabético. 
Otra forma de ordenar un array es por orden alfabético con respecto al titulo. 
Sin embargo, en este caso solo se deberá imprimir el título de las __20 primeras películas__ que encuentre

Crea una funcion `orderAlphabetically()` que reciba un array y devuelva un array con 20 títulos. 

### Iteración 4

En este caso queremos conocer la media de la puntuación (rate) de todos ellos e imprimirla en consola. 

Crea una funcion `ratesAverage()` que reciba un array y devuelva el resultado. 

El número devuelto deberá de estar redonado a 2 decimales

### Iteración 5. Películas de drama. 

Crea una función `dramaMoviesRate()` que reciba un array como parámetro para obtener la media de la puntuación de todas las películas de drama. 


De nuevo, redondeea a 2 decimales.

### BONUS: Media de las mejores películas por año

Encuentra qué año obtuvo la mejor media de puntuación. 
Crea una función `bestYearAvg()` que reciba un array y devuelva la respuesta de cual es el año en el que se obtuvo la mejor media de puntuación. 


