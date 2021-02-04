---
title: TFGs
path: "/tfgs"
tags: ["tfg"]
excerpt: TFGs
---

# Desarrollo de test robóticos automáticos en entorno de simulación
Keywords: ROS2, testing, simulador, gazebo, webots, robocup

## Descripción
Se pretende desarrollar una plataforma para que se realicen test automáticos en el simulador. Por ejemplo, en un escenario similar a la robocup@AtHome el robot podría seguir a una persona e ir calculando la distancia a ella. Cada vez que modificamos / mejoramos el algoritmo de seguimiento este test se ejecuta en background y al finalizar nos da el resultado.

Esto ayudaría a la detección de bugs, mejoraría el desarrollo y la escalabilidad del código y haría que el software desarrollado fuera más robusto.

En este trabajo se obtendrán conocimientos del funcionamiento de ROS2, se programará en diferentes lenguajes como python y c++ y, lo más importante, se desarrollará una metodología de trabajo basada en test de código y test de funcionamiento que dotarán al alumno de las capacidades de desarrollo de software demandadas por el ámbito científico e industrial.

## Tecnologías que se usarán
* ROS2
* Python
* C++
* Gazebo/Webots
* Turtlebot3/TIAGo

## Tutores
Jonatan Ginés Clavero y Manuel Fernandez Carmona.

<br> 

====== 

<br>

# Construcción y despliegue del robot Reachy
Keywords: Impresion3D, electrónica, ROS2, robot social, diseño 3D

## Descripción
En este trabajo abordaremos la construcción de una versión simplificada del robot [Reachy](https://www.pollen-robotics.com/). En esta versión simplificada se construirá el torso y la cabeza, por lo que se conseguirá un robot social muy expresivo con el que mantener una conversación y que pueda ser usado como asistente en el hogar o en docencia. Por ser una versión simplificada del robot Reachy, será necesaria la modificación de alguna de sus partes para adecuarlas a las impresoras de la escuela, además de explorar la inclusión de un sensor RGBD. Tras su construcción, se dotará al robot de un controlador (Rpi4) y se hará el despliegue del software para conseguir un robot totalmente funcional. **Trabajo recomendado para un alumno que ya haya construido antes un robot**.

En este trabajo se potenciarán las habilidades del alumno para construir un robot modular modelando y modificando piezas 3D, controlando las tolerancias en la impresión y realizando una construcción en espiral de las piezas responsable. Se profundizará en la interpretación y materialización de esquemas electrónicos complejos y su integración con el controlador para así dotar de capacidades de alto nivel a este robot en el futuro.  científico e industrial.

## Tecnologías que se usarán
* ROS/ROS2
* Python
* Autocad/ freecad/ blender/ fusion360
* Impresion 3D FDM
* Electrónica.

## Tutores
Jonatan Ginés Clavero y Francisco Martín Rico

<br> 

====== 

<br>

# Construcción de un rover espacial
Keywords: robótica, impresion3D, electrónica, ROS2

## Descripción
El objetivo de este TFG es la construcción de una versión educativa de un robot con suspensión tipo rocker-bogie y modelo kinemático Ackermann, como los Mars explorer Curiosity y Perseverance. Se tomará como base el robot [Sawppy](https://github.com/Roger-random/Sawppy_Rover). Además del montaje se busca implementar un driver básico de ROS2 que proporcione odometría y responda a comandos de movimiento, basándose en el trabajo de [Rhys Mainwaring](https://github.com/srmainwaring/curio https://newscrewdriver.com/category/projects/sawppy-the-rover/) para su desarrollo. **Este proyecto requiere de experiencia previa en la construcción de robots y en ROS**.

El proyectando adquirirá aquí conocimientos avanzados sobre la construcción de robots: impresión 3D para el desarrollo del chasis, diseño electrónico para los controladores de los servos y gestión de la bateria, programación de controladores en ROS, dando cabida a futuras expansiones. 

## Tecnologías que se usarán
* C++
* ROS/ROS2
* Python
* Autocad/ freecad/ blender/ fusion360
* Impresion 3D FDM
* Electrónica.

## Tutores
Manuel Fernandez Carmona

<br> 

====== 

<br>

# Desarrollo de un sensor RFID UHF para ROS2
Keywords: electrónica, ROS2, RFID

## Descripción
El proyecto busca desarrollar un lector RFID compatible con ROS2, basado en la placa [SEN14066](https://learn.sparkfun.com/tutorials/simultaneous-rfid-tag-reader-hookup-guide). El resultado final será un dispositivo que disponga de un conector para la antena RFID UHF, una entrada para la alimentación del dispositivo radio y una entrada de datos USB para enviar las lecturas y recibir los comandos y una librería para controlarlo en ROS2.

El alumno adquirirá competencias avanzadas en diseño electrónico, desarrollo en ROS2 y conocimientos aplicados de RFID. El objetivo del proyecto es dar soporte a aplicaciones más avanzadas basadas en sensores RFID

## Tecnologías que se usarán
* C++
* ROS2
* Python
* Electrónica.

## Tutores
Manuel Fernandez Carmona

<br> 

====== 

<br>

# Despliegue y gestión de una red de sensores inalámbrica mediante robots Kobuki en mROS
Keywords: mROS, robótica de enjambres, redes de sensores

## Descripción
El despliegue de redes de sensores inalámbricas es una labor crítica que requiere ajustes periódicos. En este contexto, el uso de robots enjambre de bajo coste puede automatizar el proceso de forma eficiente, reajustando los nodos en función de la calidad o reconfigurándo la topología en base al nivel de batería de los equipos.
Este proyecto busca utilizar micro-ROS en plataformas Kobuki para desplegar una red de sensores inalámbrica de forma autónoma, buscando garantizar el servicio.

Los alumnos adquirirán aquí conocimentos avanzados de redes de sensores, aplicarán conocimientos relacionados con la programación de microcontroladores y trabajarán con ROS2 para crear diferentes comportamientos que gestionen la estructura de la red. 

## Tecnologías que se usarán
* C++
* mROS
* ROS2
* microcontroladores
* redes de sensores inalámbricos

## Tutores
Manuel Fernandez Carmona

<br> 

====== 

<br>

# Recordando invitados, desarrollo de base de datos de características humanas.
Keywords: ROS2, C++, python, deep learning, visión por computador, base de datos, robot social, interacción humano-robot

## Descripción
En este trabajo abordaremos la creación de una memoria sobre características que podamos extraer de los invitados que llegan a nuestra casa/ laboratorio para así usarlas en el futuro para reconocerlos o mantener una mejor interacción con ellos.

Cuando un invitado llega a nuestra casa nos dirá su nombre. Esto es solo el principio, ya que con técnicas de visión por computador y usando herramientas como [face_recognition](https://github.com/ageitgey/face_recognition), entre otras, podremos reconocer su rostro entre las fotografías de los anteriores visitantes, podremos obtener su género, su edad aproximada, su altura, el color de su ropa, etc. Tener toda esta información resulta muy útil para un robot social, ya que facilita y hace más natural la interacción entre un humano y un robot

En este trabajo se potenciarán las habilidades del alumno para integrar componentes y crear nodos ROS2 a partir de elementos no ROS. Además se profundizará / desarrollará el manejo de información en una base de datos, ya sea relacional o no. Se explorará el estado del arte en el campo del reconocimiento de características humanas con deep learning y se realizarán comparaciones entre anteriores trabajos, llegando a crear / entrenar un nuevo modelo si fuera necesario.

## Tecnologías que se usarán
* ROS2
* C++
* Python
* Deep Learning
* Bases de datos
* TIAGo

## Tutores
Jonatan Ginés Clavero y Jose Miguel Guerrero Hernández

<br> 

====== 

<br>

# Navegación social, sistema para atender a personas que reclamen nuestra atención.
Keywords: ROS2, C++, navegación, deep learning, visión por computador, openpose, DialogFlow, robot social, interacción humano-robot

## Descripción
En este trabajo abordaremos el desarrollo de una capacidad de navegación diferente a la habitual, basada solo en evitar obstáculos. El robot podrá navegar por un espacio, siguiendo una ruta de patrullaje por ejemplo, pero si una persona se acerca al robot, le saluda o le llama, el robot debe pararse/ acercarse a esa persona para interactuar con ella.

En este trabajo se potenciarán las habilidades del alumno para integrar componentes y se extenderá el conocimiento sobre la navegación de un robot, en especial el sistema Nav2. Además, se explorará el estado del arte en reconocimiento de gestos, sobre todo teniendo en cuenta que el sistema será funcional en un robot real.

## Tecnologías que se usarán
* ROS2
* C++
* Nav2
* Openpose o similar
* TIAGo/ TB3

## Tutores
Jonatan Ginés Clavero y Francisco Martín Rico

<br> 

====== 

<br>

# Nav2 Controller con Virtual Force Field (VFF)
Keywords: Robótica Móvil, Navegación, ROS2

## Descripción
Nav2 es el software de navegación de robots que, como fue su sucesor move_base, aspira a ser el software de navegación más usado del mundo. Este proyecto profundiza en el conocimiento de la navegación de robots, y su objetivo es implementar el algoritmo VFF en Nav2 para navegación local. Este algoritmo permite seguir la ruta creada por el Planner (zonas de atracción), pero esquivando los obstáculos (zonas de repulsión). Como parte final de este proyecto, se pretende que se contribuya al paquete oficial de Nav2 con este algoritmo.

## Tecnologías que se usarán
* ROS2
* C++
* TIAGo
* Nav2

## Tutores
Francisco Martín Rico

<br> 

====== 

<br>

# Nav2 Planner con A
Keywords: Robótica Móvil, Navegación, ROS2

## Descripción
Nav2 es el software de navegación de robots que, como fue su sucesor move_base, aspira a ser el software de navegación más usado del mundo. Este proyecto profundiza en el conocimiento de la navegación de robots, y su objetivo es implementar el algoritmo A en Nav2 para navegación global. Este algoritmo permite crear rutas desde el origen al destino usando un mapa de costes que indica los obstáculos. En este proyecto queremos que estas rutas también tengan en cuenta factores como el consumo de energía o las horas a las que un entorno está más concurrido de personas.

## Tecnologías que se usarán
* ROS2
* C++
* TIAGo
* Nav2

## Tutores
Francisco Martín Rico

<br> 

====== 

<br>

# Visualizador para PlanSys2
Keywords: AI Planning, ROS2

## Descripción
PlanSys2 es el software de planificación con PDDL, sucesor de ROSPlan, que aspira a ser el framework de planificación de referencia en ROS2. Este software se usará en la competición RoboCup. Este proyecto propone crear un plugin para rqt que implemente una aplicación de gestión y monitorización para PlanSys2.

## Tecnologías que se usarán
* ROS2
* C++
* Interfaces con Qt
* PlanSys2

## Tutores
Francisco Martín Rico

<br> 

====== 

<br>

# Nuevo plan solver para PlanSys2
Keywords: AI Planning, ROS2

## Descripción
PlanSys2 es el software de planificación con PDDL, sucesor de ROSPlan, que aspira a ser el framework de planificación de referencia en ROS2. Este software se usará en la competición RoboCup. Este proyecto propone añadir un plugin para poder usar algún otro plan solver de PDDL, como ya están POPF y TFD.

## Tecnologías que se usarán
* ROS2
* C++
* Interfaces con Qt
* PlanSys2

## Tutores
Francisco Martín Rico

<br> 

====== 

<br>

# Detección 3D de personas con Micro-ROS
Keywords: Percepción, ROS2, Microcontroladores

## Descripción
Micro-ROS es un proyecto europeo cuyo objetivo es hacer funcionar ROS2 en microcontroladores. Este proyecto propone el ensamblaje y configuración de un sistema de percepción 3D de personas con Micro-ROS.

## Tecnologías que se usarán
* ROS2
* mROS
* Deep Learning

## Tutores
Francisco Martín Rico

<br> 

====== 

<br>

# Smart Boxes
Keywords: ROS2, Percepción

## Descripción
Este proyecto propone explorar cómo crear un módulo plug&play que contenga sistemas completos de Navegación o Interacción, de forma que con conectarlo a un robot, el robot ya cuenta con la capacidad que contenga este sistema, con una mínima configuración.

## Tecnologías que se usarán
* ROS2
* Nav2, Dialog, u otra aplicación

## Tutores
Francisco Martín Rico

<br> 

====== 

<br>

# Vehículos autónomos con AutoWare
Keywords: ROS2, Vehículos autónomos

## Descripción
Autoware es el software Open Source para vehículos autónomos en ROS2. Contiene simuladores, algoritmos y herramientas para programar este tipo de vehículos. Este proyecto propone explorar en amplitud este proyecto, y crear algún algoritmo simple de seguimiento de carriles.

## Tecnologías que se usarán
* ROS2
* AutoWare

## Tutores
Francisco Martín Rico

<br> 

====== 

<br>