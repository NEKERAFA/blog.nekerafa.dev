---
title: ¿Qué es un lenguaje de programación? I
date: 2024-02-29T21:07:58.000Z
modified_date: 2024-03-01T13:37:30.000Z
tags:
  - post
  - castellano
description: En esta entrada intentaré definirlo de la forma más sencilla posible la pregunta de qué es un lenguaje de programación para poder responder si HTML y CSS son lenguajes de programación o no. Primero explicaré un poco de historia y luego me adentraré al mundo de los lenguajes formales.
---

Quería haber publicado esta entrada antes, pero se me está haciendo demasiado extensa, o al menos eso creo, por lo que he preferido dividirla en varias partes. Esto quiere decir que posiblemente en Marzo publique más entradas de lo habitual en función de lo que vaya escribiendo o extendiéndome, así que estad atentos.

Con respecto al tema que quería tratar esta vez, se podría considerar gracioso que una de las cosas por las que existen las redes sociales es para poder comunicarnos de forma más sencilla y expresar nuestra opinión libremente, y que, en vez de avanzar entre diálogos, al final cada cierto tiempo se crean una serie de debate que se repite una y otra y otra vez: Que si los juegos son un tipo de arte, que si los hombres no conocen el papel higiénico después de cagar, que si la producción de nuestra fuerza de trabajo siempre crea una plusvalía al empresario que ni por asomo se equipara a lo que nos pagan… Un sin fin de cosas que, sin embargo, de lo único que podemos estar segures al finalizar el día es que siempre habrá alguien que nos lleve la contraria. Pues uno de estos temas que tanto se repiten con respecto a la informática es si HTML y CSS son lenguajes de programación o no. En este ámbito mucha gente ha escrito y divagado mucho, poniendo ejemplos cada vez más y más enrevesados para terminar diciendo o un sí o un no. En esta entrada me gustaría poner mi granito de arena intentando hacerlo de la forma más gallega que tenemos (que la gente que ya haya leído el título se podrá hacer una idea), que es averiguar primeramente algo que sostenga la pregunta, y es saber qué es un lenguaje de programación. Bueno, intentaré definirlo de la forma más sencilla posible, pero para eso me voy a tener que apoyar primero en ciertas matemáticas. Y antes de que empieces a sudar frío por ver ecuaciones, vamos a empezar con algo que no tiene nada que ver con los números, o bueno, de cierta forma si. Así que vamos a ver un poco de historia.

Si nos tenemos que remontar al primer concepto de algoritmo, tenemos que recurrir a Ada Lovelance a principios del siglo XIX. Se puede decir que fue la primera ingeniera informática, ya que describió las bases de cómo definir en lenguaje natural pequeños programas destinados para ser ejecutados en máquinas mecánicas que realizaba Charles Babbage para procesar diferentes cálculos complejos, como diferenciales. Por otra parte, para las primeras computadoras electrónicas programables nos tenemos que remontar a pleno siglo XX, y es que se empezaron a construir con fines destinados para su uso en guerras. De aquí tenemos un matemático (Alan Turing) intentando romper los códigos criptográficos de los mensajes nazis con el dispositivo Bombe, que posteriormente su trabajo serviría para crear la computadora Colossus en Inglaterra; y, por otro lado, en Estados Unidos teníamos a varios grupos de mujeres ensamblando, programando y ejecutando computadoras como ENIAC para estudiar la viabilidad de armas termonucleares o lanzamientos parabólicos de proyectiles. Sí, se podría decir que el nacimiento de la informática siempre ha ido de la mano del enorme trabajo realizado por mujeres debido al ego de muchos hombres de relegarlo a un trabajo como si fuera solo de secretaria. Pero bueno, decir que, aparte de que muchos de estos aparatos estaban destinados para una sola tarea, los que sí eran reprogramables solo se limitaban a poder recibir diferentes entradas mediante un panel con actuadores o la lectura mediante tarjetas perforadas, mientras que otros necesitaban cambiar líneas y cables en su estructura interna para poder hacer diferentes cosas.

Después de la Segunda Guerra Mundial, y en medio de la Guerra Fría entre EE.UU. y la URSS, los computadores fueron ganando más potencia y prestaciones. Debido a que cada vez se complicaba más cosa, la gente a cargo de los mismos empezó a utilizar reglas mnemotécnicas para simplificar la reprogramación. Fue así como nació el lenguaje ensamblador, pero presentaba varios problemas. Esto es debido a su concepción, ya que es un lenguaje muy dependiente de cada máquina, o incluso de la persona o grupo de operarios de la máquina. Podía representar desde la forma de conexión de los distintos sistemas lógicos a valores que poner en cada uno de los componentes del procesador, tanto de forma física (cuando se tenía un panel), como binaria (con respecto a los primeros circuitos integrados). Esto no hacía que fuera ni portable entre distintas máquinas, ni pudiera representar algoritmos más abstractos.

Ya entrados en los 50, empezaron a aparecer los primeros lenguajes de alto nivel, que no son ni más ni menos que los lenguajes de programación tal y como los conocemos a día de hoy: FORTRAN, COBOL, LISP o ALGOL fueron apareciendo sucesivamente para arreglar los problemas de los lenguajes ensambladores. La idea era sencilla, tu escribías tu código en un lenguaje que podía ser más parecido a sentencias en inglés, como FORTRAN, o algo más matemático como pueden ser las funciones, como LISP. Luego, un intérprete lee este código y de aquí pueden pasar varias cosas: que lo pase al lenguaje ensamblador del procesador para luego traducirlo en código máquina, que directamente se traduzca a código máquina, o que lo ejecute sin tener que traducirlo. Este último caso se hacía en BASIC, ya que debido a que no había potencia suficiente, requería que el lenguaje fuera lo más sencillo posible.

Vale, y todo esto está bien, pero ¿en dónde entran las matemáticas? Bueno, pues para eso tenemos que recurrir a Chomsky. Noam Chomsky es un reconocido lingüista que definió una forma de clasificar los lenguajes formales, que es lo que conocemos como la jerarquía de los lenguajes formales o [jerarquía de Chomsky](https://es.wikipedia.org/wiki/Jerarqu%C3%ADa_de_Chomsky). Para entender esto, empecemos definiendo lo primero: un lenguaje formal es un conjunto de símbolos que se relacionan mediante una serie de reglas, que es lo que llamamos gramática.

Un ejemplo de lo anterior lo podemos ver si miramos el lenguaje formal de las palabras que repiten una y otra vez la sílaba `ba`. Lo más básico que podemos definir es nuestro conjunto de símbolos, que en este caso es `b` y `a`. Claro, ahora necesitamos saber cómo relacionar estos símbolos, porque por ejemplo `“ababa”` no es una palabra de este lenguaje ya que la primera `a` rompe la restricción que dijimos antes, igual que `“bab”`, `“abb”`, o incluso la palabra sin ningún carácter, es decir la palabra vacía `“”`. Para saber qué palabras están dentro de nuestra definición, y valga la redundancia, necesitamos definir las relaciones de este lenguaje que nos permiten, dada la palabra, verificar si está dentro o no. Esto lo hacemos con las relaciones que nos construyen lo que conocemos como gramática formal.

Volviendo al ejemplo, podríamos decir que si tenemos la letra `b` seguida de la letra `a`, hemos formado una palabra válida (`“ba”`, o lo que es lo mismo, la palabra con una sílaba `ba`). Podríamos ir un paso más allá y decir que si tenemos `b` y `a` seguidas, podemos volver a juntarlas para tener otra palabra válida como `“baba”`, y así infinitamente construyendo más reglas para la gramática. Pero claro, esto es impracticable, así que vamos a proceder a definir estas relaciones como relaciones matemáticas:

- Podríamos empezar diciendo que nuestra gramática tiene la letra 𝐺.

- Necesitamos que la letra `b` esté seguida de la letra `a`, es decir:
  ```math
  G_1 \rightarrow ba
  ```
  Que se lee como que la regla 𝐺<sub>1</sub> forma la palabra `ba`.

- También puede darse el caso de que queramos repetir esa sílaba, por lo que tenemos que:
  ```math
  G_2 \rightarrow G_1G_1
  ```
  Es decir, 𝐺<sub>2</sub> forma lo que forme la regla 𝐺<sub>1</sub> junto con lo que forme la regla 𝐺<sub>1</sub>.

- Además, queremos que se pueda repetir las veces que queramos, por lo que también tenemos la regla:
  ```math
  G_2 \rightarrow G_2G_1
  ```
  𝐺<sub>2</sub> forma lo que forme la regla 𝐺<sub>2</sub> junto con lo que forme la regla 𝐺<sub>1</sub>.

Normalmente se simplifican un poco las cosas. Por ejemplo, podemos decir que:
```math
G_2 \rightarrow G_1G_1\ |\ G_1G_2
```

(‘|’ significa o una cosa o la otra) o incluso que:
```math
G \rightarrow ba\ |\ baG
```

Cabe destacar que esta gramática que nos acabamos de inventar produce lo que se llama [lenguaje regular](https://es.wikipedia.org/wiki/Lenguaje_regular), que es el conjunto más pequeño de lenguajes formales en la jerarquía de Chomsky (el tipo 3), y tenemos una forma más sencilla aún de definirlos que es mediante [expresiones regulares](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular): indica la secuencia de patrones que cumple con nuestro lenguaje regular. Para el ejemplo que estamos suponiendo sería `(ba)+`, donde ‘+’ representa que se dan una o más ocurrencias del patrón anterior, y como `ba` va en paréntesis, es este conjunto de símbolos en ese orden el que se repite.

Con una expresión regular podemos construir el primer elemento en el que se basan los lenguajes de programación de alto nivel, y es el analizador léxico (*lexer* en inglés). Este componente se encarga de leer caracter a caracter para generar lexemas (*tokens* en inglés), de modo que cada expresión regular se va comprobando por la lista de caracteres que lleva leídos hasta que encuentra una que coincide, y esto hace que se le asigne una etiqueta que corresponde con esa expresión (el *token* que hemos leído). En matemáticas, esta forma de computar es lo que se denomina [autómata con pila](https://es.wikipedia.org/wiki/Aut%C3%B3mata_con_pila), y en su conjunto reconoce lo que llamamos un lenguaje independiente del contexto, que es el tipo 2 de los lenguajes formales en la jerarquía de Chomsky. Como aquí necesitamos saber cuales son los caracteres que ha leído, la gramática se define mediante transiciones de estados.

Para ver todo esto mejor, sigamos con el ejemplo usado para el lenguaje regular. Si lo expandimos, un lenguaje independiente del contexto podría usar la siguiente gramática:

- El conjunto de caracteres sigue siendo `b` y `a`.

- Aquí necesitamos una serie de estados, supongamos 𝑞<sub>0</sub>, 𝑞<sub>1</sub> y 𝑞<sub>2</sub>, donde 𝑞<sub>0</sub> es el estado inicial y 𝑞<sub>2</sub> es el estado final.

- Los valores que guardaremos en la pila serán *UNA* o *VARIAS*.

- Si no hay elementos tanto en la pila como para leer, o no queremos incorporar nuevos elementos a la pila, se simboliza con *ε* (épsilon).

- Con esto, las transiciones se definen esta vez con una función llamada *δ* (delta) que asigna a un estado, un símbolo de la palabra que estamos leyendo y un valor de la pila a un nuevo estado y el valor de nuestra pila al pasar a ese estado. Por ejemplo, las transiciones de una gramática que nos indica si hay una o varias repeticiones de la sílaba `ba` serán:

```math
\begin{split}
& \bullet\quad\delta(q_0, b, \epsilon) = (q_1, \epsilon) \\
& \bullet\quad\delta(q_1, a, \epsilon) = (q_2, \textit{UNA}) \\
& \bullet\quad\delta(q_1, a, \textit{UNA}) = (q_2, \textit{VARIAS}) \\
& \bullet\quad\delta(q_1, a, \textit{VARIAS}) = (q_2, \textit{VARIAS}) \\
& \bullet\quad\delta(q_2, b, \textit{UNA}) = (q_1, \textit{UNA}) \\
& \bullet\quad\delta(q_2, b, \textit{VARIAS}) = (q_1, \textit{VARIAS})
\end{split}
```

Una palabra es válida para este lenguaje si, y sólo si, al realizar las transiciones en los estados al leer la palabra terminamos en un estado final. Si, por ejemplo, tenemos `“aba”`, esta no es una palabra del lenguaje porque, si cogemos la primera letra de nuestra palabra, desde el estado inicial 𝑞<sub>0</sub> no hay una transición que nos permita avanzar al estado final (solo tenemos la transición δ(𝑞<sub>0</sub>, *b*, *ε*)). Además, `“bab”`, tampoco es otra palabra, ya que, aunque si tenemos transiciones, una vez leída la palabra nos encontramos en el estado 𝑞<sub>1</sub>, que no es un estado final. En cambio, para las palabras `“ba”` y `“bababa”`, acabamos siempre en el estado final 𝑞<sub>2</sub> con el valor en nuestra pila de *UNA* y *VARIAS*, respectivamente.

Espero que no hayáis muerto entre tanta explicación matemática, por lo que voy a dejarlo por aquí, que creo que de momento es bastante cantidad de contenido. Aún queda desgranar bastante sobre este tema, y sobre todo responder al tema inicial.

¡Un saludo a todes 😸!
