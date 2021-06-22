---
layout: articulo
id: 002
title: Páginas web estáticas, ¿cuándo es mejor usarlas?
description: Las páginas web estáticas tienen muchas ventajas en comparación a las páginas dinámicas. Y no es por animaciones. Aquí te explico más el tema.
category: Páginas Web
tags: [páginas web, páginas estáticas]
h1: Páginas web estáticas, la mejor opción en la mayoría de los casos
hero: articulos/002/wordpress.svg
altheader: ícono de WordPress para páginas web
imgtitle-header: WordPress para páginas web
autor: Julian Andres Franco Bedoya
copyright: Julian Andres Franco Bedoya
excerpt_separator: <!-- excerpt -->
referencias:
  - Íconos descargados de www.flaticon.com: https://www.flaticon.com/authors/eucalyp
date: 21-06-2021
---
{{page.description}}

<!-- excerpt -->

* Do not remove this line (it will not be displayed)
{:toc}

Cuando se trata de desarrollar un sitio web lo primero que debes considerar es cómo lo quieres construir, como un sitio web estático o como un sitio web dinámico. Pero, ¿qué hace que un sitio web sea categorizado “estático” o “dinámico”?

Te invito que me acompañes en este comparativo para que conozcas cómo distinguir las diferencias entre estos dos tipos de páginas web y que puedas decidir cuál es el que te conviene según tu necesidad.

Pero antes de entrar en detalles de cada uno de estos tipos de sitios web, primero debes entender cómo funciona la comunicación en Internet cuando queremos ver una página web.

Comunicación entre servidores y navegadores web
Para entender la comunicación más básica que ocurre en Internet, debemos saber que en ella están involucrados un servidor web, como IIS, Apache o NGINX, que contiene los archivos HTML, CSS y JavaScript de las páginas web, y un cliente, el navegador (Chrome, Firefox, Edge).

El servidor web y el cliente se comunican a través de los protocolos HTTP (Hypertext Transfer Protocol), el protocolo de Transferencia de Hipertexto y la versión segura HTTPS (HyperText Transfer Protocol Secure), una serie de reglas que permiten la transferencia de información a través de archivos en la Internet. La diferencia principal entre HTTP y HTTPS, es que, con este último, la comunicación entre el servidor y el cliente es cifrada permitiendo que la transmisión de los datos sea segura, brindando mayor integridad y confidencialidad a los mismos.

La comunicación entre ellos inicia cuando el usuario, a través del navegador, ingresa la dirección de un sitio web (conocida como la URL del inglés Uniform Resource Locator ó LRU que se refiere al Localizador de Recursos Uniforme en español), generando una petición al servidor web para encontrar los archivos de dicha página en dónde están alojados (HTTP request). Luego, el servidor web responde a la petición y devuelve los archivos del sitio web (HTTP response). La respuesta llega al navegador como una copia en formato HTML de la página web, y es en este momento cuando el usuario puede verla en su pantalla.

Qué es una página web estática
Lo primero que debemos entender es ¿a qué nos referimos con la palabra estática en el contexto de una página web?, y no es más que aquello que en el ámbito del código fuente del sitio web se encuentra fijo, no se mueve ni cambia de ninguna manera. Cuando hablamos de “estático” también podemos referirnos a que la página web tiene un número fijo de página, es decir, que tal como fue diseñada y almacenada en el servidor web, así mismo la recibe el navegador y la ve el usuario, como un número fijo de páginas HTML.

Una página web estática está compuesta por archivos HTML individuales por cada página que son pre-generados y presentados al usuario a través del navegador de la misma forma.

Como una página web estática básica está compuesta por elementos como títulos, cuadros de textos, etiquetas, imágenes y otros elementos multimedia, un usuario solo puede interactuar con una página web estática a través de lo que permiten los elementos HTML, por ejemplo haciendo clic en enlaces, botones o rellenando formularios como el clásico formulario de subscripción.

No son tan complejos técnicamente como un sitio web dinámico, pero tampoco son tan versátiles y efectivos cuando se trata de entregar funcionalidad. En pocas palabras, en una página web estática, verás la misma información, diseño y contenido cada vez que la visites, a menos que alguien aplique cambios al código fuente de forma manual.

Si quisieras crear una página web estática solo necesitas un editor de texto como el Bloc de notas y saber de HTML y CSS, no es necesario utilizar entornos de desarrollo complejos.

Ventajas de una página web estática
Entre las ventajas de una página web estática podemos mencionar:

 El coste inicial de una página web estática puede ser mucho menor que al de una dinámica.
Por su naturaleza estática, la complejidad y tiempo de desarrollo es menor porque no requiere del uso de lenguajes de programación o bases de datos, y por ende su coste monetario es más bajo.
 Son muy flexibles cuando se trata del diseño.
Dado a su naturaleza independiente, cada página puede tener un diseño diferente. No es necesario un solo diseño para múltiples tipos de contenido, lo que en los sitios web dinámicos se le conoce como plantillas (templates).
 Los tiempos de carga son muy rápidos.
Ya que los sitios web estáticos son construidos previamente. No implica ejecución de scripts o secuencias de comandos complejas, bases de datos ni análisis de contenido a través de lenguajes de plantillas, etc.
Sin embargo, con la revolución del Jamstack, los generadores de sitios web estáticos como Jekyll, GatsbyJS o Eleventy, y los Headless CMS como Netlify CMS, Siteleaf o Forestry, y además la incorporación de CDN (Content Delivery Network en inglés) para gestionar los recursos multimedia, se puede generar un aumento en el coste de carga de una página web estática dependiendo de sus características.
Desventajas de una página web estática
Algunas desventajas de elegir una página web estática son:

 Una página web estática puede ser más difícil de actualizar.
Para usuarios no técnicos, una vez la página es creada, hacer pequeños ajustes en el contenido puede representar un desafío a menos que estén familiarizados con HTML, CSS y el código del sitio web en general. Si no es así, es posible que deban pedirle al desarrollador que la creó originalmente, que realice los cambios que necesitan.
 Agregar contenido a la página web o realizar actualizaciones puede incurrir en costos adicionales.
Esto puede verse como una consecuencia de la desventaja anterior. Es decir que, con el tiempo, el mantenimiento de un sitio estático puede generar costos de mantenimiento continuo que podrían evitarse si tuvieras una página web dinámica.
 Agregar nuevas páginas o funcionalidades a una web estática puede ser más difícil que hacerlo para una web dinámica.
Por ejemplo, si creas una página web para promocionar productos de tecnología, cada vez que quieras agregar un producto, como un nuevo televisor o un nuevo portátil, tendrías que crear una nueva página específicamente para ese producto, lo que puede llevar mucho tiempo además del costo que puede llevar este proceso.
Ejemplos de páginas web estáticas
Un ejemplo sencillo de cómo es una página web estática, es el siguiente:

<head>
<title>Ejemplo página web estática</title>
</head>
<body>
La fecha de hoy es Enero 1, 2020
</body>
</html>
Aquí, la fecha está escrita directamente en el código de la página (estática) y cada vez que se recargue la página, dirá lo mismo, Enero 1, 2020 … la única forma de que cambie es si alguien actualiza el código y escribe otra fecha o aplica alguna instrucción que la haga dinámica para que la fecha sea diferente cada vez que carga.

Algunos ejemplos de sitios web estáticos:

https://million-devs.netlify.com
https://www.imuniapp.com
https://marvlm.github.io/tdd-infographic/
Imagen 0 en Páginas web estáticas vs páginas web dinámicas
Qué es una página web dinámica
La palabra dinámica se refiere a elementos que cambian continuamente, son interactivos y funcionales, en lugar de ser simplemente informativos. Por supuesto, eso requiere utilizar más que solo código HTML y CSS.

En comparación con las páginas web estáticas, que son mayoritariamente informativas, una página web dinámica incluye aspectos que se caracterizan por la interactividad y la funcionalidad, por ejemplo, los usuarios pueden interactuar con la información que se presenta en la página gracias a las instrucciones creadas a través de los lenguajes de programación y la base de datos sobre la que está construida.

Los sitios web dinámicos basan su comportamiento y funcionalidad en dos tipos de programación, front-end (del lado del cliente) y back-end (del lado del servidor). Las instrucciones del lado del cliente es código JavaScript que se ejecuta en el navegador. Mientras que las instrucciones que se ejecutan del lado del servidor son instrucciones escritas en lenguajes de scripting o programación, como ASP.Net, PHP, Python, etc. y que son ejecutadas para crear lo que el usuario ha solicitado en su interacción con la página.

Una vez ejecutadas las instrucciones en el servidor, un nuevo HTTP response se envía al navegador del usuario para mostrarle lo que ha solicitado. El resultado final es el mismo que en un sitio web estático: una página HTML que el usuario ve desde el navegador.

Por resumir, una página web dinámica puede ser más compleja cuando hablamos de su diseño y desarrollo, pero también es más versátil cuando se trata de la funcionalidad que ofrece.

Ventajas de una página web dinámica
Entre las ventajas de una página web dinámica están:

 Puede gestionar información a través de bases de datos.
Esto permite que el usuario pueda solicitar información fácilmente de una manera organizada y estructurada dentro de un catálogo, además de crear y mostrar contenido según el tipo de usuario que acceda a la página.
 El contenido se puede gestionar a través de un CMS.
El contenido almacenado en el CMS puede incluir una variedad de archivos, desde el texto hasta las imágenes que se muestran, diseños de página, configuraciones del sitio y más. Esto permite una flexibilidad extrema a la hora de crear el sitio y también permite que varios usuarios puedan manipular el contenido según sea necesario.
 El coste de mantenimiento es menor.
Si la página no necesita cambios en el diseño básico o en la funcionalidad definida al inicio de su desarrollo. Ya que se puede gestionar la información a través de un CMS, existe poco o nada de costes cuando se trata de su mantenimiento.
Desventajas de una página web dinámica
Algunas desventajas de una página web dinámica son:

 Pueden existir limitaciones en el diseño.
Ya que el contenido está principalmente basado en la información contenida en la base de datos y la presentación al usuario se basa en la estructura de la misma. Esto puede hacer que el diseño sea complicado, ya que lo más sencillo es optar por un enfoque único para todas las páginas. Dependiendo del CMS, puede resultar difícil crear varios diseños o plantillas que permitan mostrar diferentes tipos de contenido de diferentes formas.
 Puede involucrar altos costos de construcción iniciales.
Al coste del desarrollo de la página web se le suma el coste del desarrollo de las bases de datos donde se guardará el contenido a mostrar, etc. El desarrollo también puede costar más a medida que se agregan nuevas funcionalidades. Si bien los costos de mantenimiento pueden ser más bajos como fue mencionado en las ventajas, también puede involucrar costos de desarrollo iniciales mucho más altos que al desarrollar una página web estática.
Ejemplos de páginas web dinámicas
Como ya hemos visto, es muy sencillo determinar si una página web es dinámica: por ejemplo, cuando puedes interactuar con ella, o si cada vez que la recargas, puedes ver contenido distinto.

Por lo tanto, la mayoría de las páginas que regularmente visitas es probable que sean dinámicas porque son interactivas. Por ejemplo, una página web dinámica te permite crear un perfil de usuario Facebook.com, comentar una publicación LinkedIn.com, pedir tu cena just-eat.es o hacer una reserva Booking.com.

Siguiendo el ejemplo de la página que muestra una fecha, si queremos convertirla en una página web dinámica, podemos cambiar la fecha escrita textualmente por una función que retorne la fecha actual, de esta forma:

<head>
<title>Página web dinámica</title>
</head>
<body>
La fecha de hoy es <%=Datetime.Now()%>
</body>
</html>
Aquí, cada vez que se recarga la página, se mostrará la fecha y hora actual, es decir será diferente en cada recarga de la página, ya que la instrucción <%=Datetime.Now()%> le indica al servidor que retorne la fecha del momento en que recibe la petición.

Página web dinámica vs estática: Conclusión
En conclusión, si tienes que crear una página web y debes tomar la decisión entre crear una página web estática o una dinámica, debe basar tu decisión principalmente en los objetivos que quieres cumplir con tu página web y los recursos de tiempo y conocimientos que tengas disponibles.




La mayoría de las personas que no poseen conocimientos técnicos de diseño y desarrollo de páginas web, prefieren los sitios web dinámicos porque a través de plataformas CMS como WordPress, Joomla, Drupal o Ghost pueden crear sitios web dinámicos de una forma muy fácil y rápida, a la vez que son más fáciles de mantener a largo plazo.

Si bien es cierto que las páginas web dinámicas ofrecen más posibilidades, pueden ser mucho más complejas de construir y mantener para los usuarios que no tengan conocimientos técnicos y deseen incorporar integraciones que no ofrezcan los CMS; mientras que las páginas web estáticas son algo más limitadas, pero en principio son mucho más simples de crear y mantener si posees conocimientos en HTML y CSS.

¿Sabes lo que es una página web estática? Te contamos cómo son estas páginas y cuáles son sus principales ventajas y desventajas. ¡Porque sabemos que te fascina el mundo de la programación de aplicaciones web!

Con un curso especializado de programación de aplicaciones web aprenderás todo lo necesario para crear una página web estática. ¿Te interesa dedicarte a este sector con tanto futuro?

 

Desarrollo de aplicaciones web: una profesión con mucha demanda
¿Te imaginas trabajando como desarrollador? Te alegrará saber que este es uno de los perfiles con más oportunidades laborales.

Gracias a la transformación digital de las empresas las opciones para trabajar en el sector de las nuevas tecnologías se han disparado y no paran de crecer. Todas las compañías necesitan desarrolladores para crear sus páginas web, sus aplicaciones móviles, sus tiendas de comercio electrónico, etc. ¿Te apuntas?

 

Salidas profesionales
Algunas de las salidas laborales a las que podrás optar si te formas con un curso de Aplicaciones Web son:

Programador Java.
Desarrollador web.
Desarrollador de aplicaciones en entorno de escritorio.
Desarrollador de aplicaciones en entornos web.
Crear y mantener entornos de aprendizaje virtual.
Crear y mantener una intranet de la empresa.
 

Tipos de desarrollo web: página web estática

¿Qué es una página web estática?
Cuando te formas como desarrollador una de las primeras cosas que aprendes es que existen distintos tipos de aplicaciones web: aplicaciones dinámicas, tienda virtual, portal web app, aplicación web animada, etc.

Uno de los tipos más básicos es la de la página web estática. ¡Veamos en qué consiste!

 

Características de la página web estática
Una página web estática es un documento adaptado a la web que proporciona un contenido fijo a todos los usuarios, es decir, es un sitio de internet que no modifica su contenido para personalizarlo y adaptarlo a cada interacción. Por tanto, son páginas que no se actualizan constantemente. También se conocen como páginas planas.

 

Funciones de las páginas web estáticas
La principal función de una página web estática es presentar una información estable que no es necesario modificar con frecuencia. Por poner un ejemplo claro, se pueden crear páginas web estáticas para informar sobre la dirección de un negocio, para detallar los servicios fijos que ofrece, para contar la historia y la trayectoria de la empresa, etc.

 

Ventajas de las páginas web estáticas
Algunas de las ventajas que ofrecen las aplicaciones web estáticas son:

Funcionan en cualquier servidor.
Tardan poco en cargar.
Gran funcionalidad.
No requieren instalación.
Mejoran el posicionamiento.
Se gasta menos en alojamiento.
No requieren mucho mantenimiento.
Desventajas de las páginas web estáticas
Por otro lado, las desventajas de estas aplicaciones web son:

No tienen muchas funcionalidades.
El proceso de actualización es complejo.
El usuario no puede seleccionar o modificar el contenido o el diseño.
El programador tiene que acceder al servidos donde se aloja la página para realizar cambios.
¿Cómo es el desarrollo de una aplicación web estática?
El desarrollo de una página web estática es mucho más sencillo y más rápido que el de una página web dinámica. Para crearlas, se requieren conocimientos básicos de un lenguaje de programación como HTML. Sin embargo, a la hora de actualizarlas y modificarlas es cuando se complica la cosa.

Las dinámicas están pensadas para ser actualizadas constantemente de forma fácil, pero las estáticas requieren de más tiempo y conocimientos sobre programación para hacer cambios en ellas.

 

Curso Aplicaciones Web: ¿cómo es el de Tokio School?
Si te quieres dedicar a la programación, primero deberás formarte con un curso de especialización. Tokio School tiene para ti su Carrera Profesional de Aplicaciones Web, un curso completo con el que adquirir todos los conocimientos y las habilidades que necesitas para alcanzar tus objetivos.

Esta formación es online a distancia. ¡Te prepararás con la mayor flexibilidad!

Ventajas del curso de Aplicaciones Web de Tokio
¿Quieres saber lo obtendrás con este curso? Algunas de las ventajas que te ofrece Tokio School son las siguientes:

Flexibilidad: recibirás una formación online con acceso a clases en directo. Esta modalidad de estudio te permite prepararte desde casa y en tus horas libres.
Formación amplia: tendrás la posibilidad de realizar más de 1200 horas de formación.
Seguimiento: contarás con el apoyo de un tutor personal que te guiará en el proceso.
Prácticas: tendrás la oportunidad de realizar entre 60 y 300 horas de prácticas en empresas.
Asesoramiento: recibirás orientación laboral y podrás optar a una bolsa de empleo.
Actividades: tendrás la opción de realizar casos prácticos y un proyecto final. Con estos trabajos podrás demostrar tu evolución.
Titulación: obtendrás un título propio de Tokio School.
Recursos: accederás a recursos audiovisuales y en papel.
Objetivos del curso de Aplicaciones Web
Los objetivos didácticos de la Carrera profesional en Aplicaciones Web de Tokio School son los siguientes:

Que aprendas nuevos lenguajes de programación.
Que sepas desarrollar sitios multiplataforma.
Que aprendas a mantener la arquitectura y funcionalidad de cualquier sitio web.
Que seas capaz de crear aplicaciones web y para móviles.
Programa formativo de la Carrera Profesional en Aplicaciones Web
¡Aprende a programar con Tokio School! Nuestro programa formativo es de calidad y está totalmente actualizado. Gracias a esto podrás adquirir todos los conocimientos que necesitas para dedicarte a este ámbito. El temario consta de los siguientes módulos temáticos:

Módulo 1: HTML5 y CSS3. Estándares de la creación de sitios web.
Módulo 2: Desarrollar con JavaScript.
Módulo 3: Iniciación a Java.
Módulo 4: Java Avanzado.
Por otro lado, este programa contempla la realización de un proyecto final por parte del alumnado e incluye material complementario de formación en idiomas, tan importante para un currículum competitivo.

 

Apúntate al curso de Tokio School y consigue el futuro que deseas
Apúntate a la Carrera Profesional de Aplicaciones Web de Tokio School y podrás entrar en el mercado laboral por una rama con mucha demanda de profesionales. Cada vez son más las empresas que necesitan los servicios de un desarrollador experto. ¡Aprovéchate de esta oportunidad!

Ahora que ya sabes en qué consiste una página web estática, rellena el formulario y podrás empezar a aprender a crear estas aplicaciones web y muchas más. ¡Sácale partido a la revolución digital!

DIFERENCIA ENTRE PÁGINAS WEB ESTÁTICAS Y PÁGINAS WEB DINÁMICAS CON PHP

Vamos a repasar algunos conceptos que ya hemos mencionado y que es importante que queden claros. Las páginas web estáticas o “planas” son aquellas en las que la información se presenta en forma predefinida y sin cambios. No hay manera de que pueda cambiar el contenido de la página.


 

A la información contenida en una página estática se le puede dar un determinado formato de presentación, así como incluirle imágenes, enlaces a otras páginas, animaciones, videos, sonidos, etc. En general, todo se hace a través de etiquetas HTML y esto es lo único que puede ofrecerse a través de este tipo de páginas.

En los inicios de Internet predominaban las páginas estáticas, pero con el paso del tiempo y ante la necesidad de agilizar el manejo de la información, surge un nuevo concepto de páginas web que hoy sobresale y es el más utilizado. Estas son denominadas páginas dinámicas: dentro de la programación dinámica para páginas web hay distintos lenguajes (entre los que cabe destacar PHP, ASP y JSP), siendo php uno de los más usados.

Normalmente, las páginas estáticas están compuestas por código HTML. Cuando la página (archivo) es solicitada por el navegador, el servidor la envía y no realiza ninguna operación más. Todos los visitantes verán el mismo contenido.

Las páginas web dinámicas son aquellas en que la información que presentan se genera a partir de alguna acción o petición del usuario en la página o mediante consultas al contenido de bases de datos que normalmente cambian con frecuencia. Contrariamente a las páginas estáticas, en las que su contenido se encuentra predeterminado, en las dinámicas la información aparece inmediatamente después de una solicitud hecha por el usuario o de una consulta a bases de datos. Una página dinámica permite visualizar la información contenida en una base de datos, así como almacenar y hacer actualizaciones de cierta información en bases de datos a través de formularios donde el usuario introduce contenidos. Piensa por ejemplo en una red social como FaceBook: cuando se escribe en una casilla de texto y se pulsa enter, la información introducida se almacena en una base de datos. Ahora cuando otro usuario entra en FaceBook, esa información introducida por un usuario se le muestra a otro usuario gracias a que se está rescatando de una base de datos. La programación dinámica tiene múltiples aplicaciones, entre las que podemos citar los sistemas de foros (los mensajes, imágenes, etc. se almacenan en bases de datos). Otra aplicación consiste en que el usuario tiene la posibilidad de cambiar a su gusto el diseño y el contenido de una página, por ejemplo la página de inicio personalizada de Google, gracias a que sus opciones se almacenan en una base de datos.

Queda claro entonces que para la creación de este tipo de páginas dinámicas, además de etiquetas HTML es necesaria la utilización de algún lenguaje de programación que se ejecute del lado del servidor (es decir, que el servidor realice un proceso antes de enviar la información al usuario de modo que a cada usuario le puede enviar distintas informaciones como resultado de ese proceso), así como la existencia de una o varias bases de datos.

Si creamos un sitio web que usa páginas webs dinámicas, estas páginas son procesadas por el servidor antes de ser enviadas al navegador.

Una página .php contiene código PHP que al ser ejecutado generará código HTML. En ese proceso de ejecución de código, pueden hacerse consultas a bases de datos u otros archivos. Además, pueden realizarse cálculos o tomarse decisiones gracias a la potencia de la programación.

El resultado final es que se envía al navegador código HTML, que es generado para cada visitante en particular dependiendo por ejemplo del contenido de la base de datos en ese momento o de las opciones de configuración o solicitudes específicas del usuario. Otras personas podrán obtener diferentes resultados si acceden en un momento en que la base de datos haya cambiado, o si tienen opciones de configuración o realizan una solicitud distinta. Ten en cuenta que aunque la URL nos muestre una extensión .php, lo que recibe el usuario es código HTML. Por ejemplo la URL siguiente: http://www.aprenderaprogramar.com/index.php

Siempre devuelve código HTML. Pero no siempre devuelve el mismo código HTML porque para generar ese código existen procesos en el servidor que hacen que los resultados puedan variar.

¿Cómo reconocer si una web que visitamos es dinámica o estática? En general, es dinámica aquella que puede interactuar con el visitante y/o administrador web, pudiéndose modificar el contenido de la página según el momento u opciones escogidas. Ejemplos de esto son: cuando el usuario puede escribir un comentario, escoger los productos y ponerlos en un carrito de compras, subir archivos o fotografías, etc. En este caso SI se utilizan bases de datos y se requiere programación web dinámica.

Las páginas web dinámicas ofrecen muchas ventajas en comparación con las páginas web estáticas, como una mayor interactividad con el usuario y facilidad para el cambio y actualización de contenidos. A las personas que administran las páginas web (webmasters, programadores, gestores de contenidos), la programación dinámica les permite una reducción en tiempo y costos, así como una mayor facilidad en el mantenimiento de un sitio web.

 

 

RESULTADOS EN BUSCADORES USANDO PÁGINAS WEB DINÁMICAS

Ante todas las ventajas de este tipo de páginas cabe citar una desventaja “histórica” en cuanto a los resultados obtenidos en buscadores como Bing, Google o Yahoo. Hasta hace unos años, los buscadores consideraban que una web dinámica era no indexable (no registrables sus contenidos de cara a búsquedas) debido a que no se podía ofrecer como resultado de un buscador algo que cambiaba con frecuencia. Es frecuente oir el término “URL amigable” en referencia a una dirección web que es sencilla y recuerda un texto simple, por ejemplo:

http://www.aprenderaprogramar.com/cursos/cursophp/paginas-dinamicas-y-estaticas.html

 

Por el contrario, muchas veces se dice que cuando las páginas contienen .php y numerosos parámetros con caracteres como "?", "&" y "=" la URL no es amigable. Por ejemplo:

http://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=57&Itemid=8

 

Esta situación en la actualidad puede considerarse superada: los buscadores se han sofisticado y son capaces de indexar URL´s dinámicas sin problemas. Algunas aplicaciones de software libre como Joomla, Drupal, WordPress, etc. siguen manteniendo sistemas que permiten convertir las URL´s dinámicas en URL´s amigables, pero en general podemos decir que esto es cada vez menos necesario. Desde nuestro punto de vista, es más importante tener una página web con un buen diseño, bien estructurada en cuanto a menús y contenidos, que se actualice con frecuencia y que ofrezca contenidos de calidad, más que tener o no tener URL´s amigables.