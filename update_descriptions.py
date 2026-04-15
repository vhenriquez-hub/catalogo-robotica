import json
import re

# Cargamos el archivo data.js actual
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extraemos el json removiendo la declaracion de variable
json_str = content.replace('const componentesData = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

data = json.loads(json_str)

# Diccionario con el contenido nuevo en Español y explicaciones para noobs
nuevos_textos = {
    "Termopar": {
        "desc": "Un termopar es un transductor formado por la unión de dos metales distintos que produce una diferencia de potencial muy pequeña (efecto Seebeck) en función de la diferencia de temperatura entre uno de los extremos, denominado «punto caliente», y el otro, denominado «punto frío». Es ideal para medir temperaturas extremas en entornos industriales, soportando hasta miles de grados Celsius.",
        "desc2": "Son dos alambres de distintos metales unidos en la punta. Al calentarlos, generan un pequeñísimo voltaje. Básicamente, convierten el calor en electricidad para que un robot o máquina sepa a qué temperatura está el ambiente."
    },
    "RTD (PT100, PT1000)": {
        "desc": "Los RTD (Detectores de Temperatura Resistivos) basan su funcionamiento en la variación de la resistencia de un conductor en función de la temperatura. El PT100 y PT1000 están hechos de platino (Pt) y tienen una resistencia de 100 y 1000 ohmios a 0 °C respectivamente. Son extremadamente precisos y lineales comparados con otros sensores.",
        "desc2": "Es un cablecito de platino que cambia su resistencia eléctrica dependiendo de qué tan caliente o frío esté. Como el material es puro, nos da la temperatura exacta casi sin fallar."
    },
    "Termistor (NTC, PTC)": {
        "desc": "Componente electrónico cuya resistencia varía altamente con la temperatura. Los Coeficiente de Temperatura Negativo (NTC) disminuyen su resistencia con el aumento del calor, mientras que los de Coeficiente Positivo (PTC) la aumentan. Se usan para protección de circuitos, control y medición precisa en rangos acotados (-50 a 150 °C).",
        "desc2": "Una resistencia mágica. Si es NTC, cuanto más la calientas, más fácil deja pasar la electricidad; si es PTC, ocurre al revés."
    },
    "Sensor digital (DS18B20)": {
        "desc": "El DS18B20 es un sensor de temperatura digital de alta precisión que utiliza el protocolo 1-Wire (un solo cable de datos más tierra) de Dallas Semiconductor. Cuenta con resolución configurable de 9 a 12 bits, e integra conversor analógico-digital (ADC). Cada sensor tiene un código de 64 bits único que permite conectar decenas en la misma línea.",
        "desc2": "Un termómetro súper inteligente que habla en lenguaje digital. Solo necesita un cable para enviar los datos y puedes conectar varios en ese mismo cable sin que se crucen las señales."
    },
    "Capacitivo / Resistivo": {
        "desc": "Los sensores de humedad capacitivos emplean una película polimérica o de óxido metálico cuyo valor de capacitancia cambia al absorber agua. Los resistivos miden cómo varía la resistencia eléctrica de un polímero higroscópico. Ambos requieren compensación de temperatura para obtener la humedad relativa real.",
        "desc2": "Un pequeño cuadrito que detecta cuánta agua flota en el aire. Funciona atrapando pequeñitas gotas invisibles de humedad, lo que altera su electricidad."
    },
    "Módulo DHT11/DHT22": {
        "desc": "Combina un termistor (para temperatura) y un sensor capacitivo (para humedad) más un chip conversor analógico a digital (ADC) interno de 8 bits (DHT11) o 16 bits (DHT22). Transmite una trama de datos en serie con un protocolo digital propio de un cable, entregando los valores procesados digitalmente.",
        "desc2": "Es un sensor 'todo en uno' muy común para aprender a hacer estaciones del clima. Te dice la humedad y la temperatura directamente sin que tengas que hacer matemáticas difíciles."
    },
    "Piezorresistivos / Capacitivos": {
        "desc": "Los sensores piezorresistivos varían su resistencia eléctrica bajo presión gracias al efecto piezorresistivo en mallas de silicio o galgas extensiométricas. Los sensores capacitivos identifican el movimiento de un diafragma bajo la presión alterando la capacitancia de un circuito.",
        "desc2": "Son detectores de presión. Como presionar un resorte y que una computadora interprete qué tan fuerte se ha aplastado."
    },
    "Inductivo / Capacitivo": {
        "desc": "Los sensores inductivos generan un campo electromagnético de alta frecuencia; cuando un objeto metálico se acerca altera este campo (corrientes de Foucault). Los capacitivos generan un campo electrostático; detectan la proximidad tanto de metales como plásticos basándose en la constante dieléctrica del material introducido en la zona sensible.",
        "desc2": "Detectores de cercanía sincontacto. El inductivo reacciona si le acercas un metal (como una moneda p un robot); el capacitivo detecta también otras cosas como plástico y líquidos."
    },
    "Ultrasónico (HC-SR04)": {
        "desc": "Sensor de distancia de tiempo-de-vuelo (ToF). Emite un pulso de ultrasonido (Trigger) a 40 kHz y calcula el tiempo que tarda la onda en rebotar en un objeto y regresar al micrófono receptor (Echo). Utilizando la velocidad del sonido (~343 m/s) determina la distancia con una alta fiabilidad para objetivos perpendiculares.",
        "desc2": "Son como los ojos de un murciélago. Gritan un ultrasonido inaudible, escuchan el eco, y calculan cuántos centímetros faltan para chocar contra algo."
    },
    "Infrarrojo (PIR)": {
        "desc": "Sensor Infrarrojo Pasivo. No emite ninguna luz, sino que detecta la radiación infrarroja distante (calor térmico corporal) usando cristales piroeléctricos. A través de un lente Fresnel que divide el área de detección en zonas, capta la diferencia de irradiación cuando entra un cuerpo humano.",
        "desc2": "El típico sensor de las alarmas de casas o luces de pasillo. Solo se encienden si ven calor humano moviéndose cerca."
    },
    "Fotorresistencia (LDR)": {
        "desc": "Resistencia Dependiente de la Luz (LDR) fabricada comúnmente de Sulfuro de Cadmio (CdS). Es un semiconductor de alta resistencia que en la oscuridad (resistividad en MΩ) se comporta como aislante, y en la luz, los fotones proveen energía a los electrones reduciendo drásticamente su resistencia (resistividad en Ω o KΩ).",
        "desc2": "Es una pieza que se vuelve más fácil de atravesar por la electricidad cuanta más luz la ilumina. Perfecta para encender luces de calle al anochecer."
    },
    "Fotodiodo / Fototransistor": {
        "desc": "Detectores de luz basados en semiconductores (uniones PN/PIN). El fotodiodo genera pares electrón-hueco al ser incidido por luz provocando corriente (modelo fotovoltaico/fotoconductivo). El fototransistor añade una fase de amplificación mediante la ganancia intrínseca de su base óptica.",
        "desc2": "Funcionan parecido a un panel solar pequeño pero súper sensible; entregan corrientes más grandes y veloces cuanta más luz detectan."
    },
    "Sensor de color": {
        "desc": "Normalmente incluye un arreglo de fotodiodos recubiertos con filtros de color RGB integrados y emisores LED blancos. Los fotodiodos miden el rebote e intensidad de cada canal de espectro de color independientemente, logrando distinguir tonalidades muy precisas comunicadas por I2C.",
        "desc2": "Actúa iluminando algo con luz blanca, luego mide qué colores se rebotan. Así, le puede decir al robot si está parado en un bloque rojo o en uno azul."
    },
    "Encoder Incremental / Absoluto": {
        "desc": "Los encoders son codificadores rotativos que controlan movimientos. Un encoder incremental usa discos ranurados ópticos o magnéticos, enviando un pulso cuadrado (cuadratura) relativo cada vez que gira. Un absoluto da el ángulo exacto gracias a un codificación de disco en binario Grey o de patrón unívoco.",
        "desc2": "Aparato que se acopla a la rueda de un motor. Le chiva a la computadora cuántas vueltas EXACTAS ha dado la rueda, así el motor no se pasa de frenazo."
    },
    "Motor con escobillas": {
        "desc": "El motor eléctrico de corriente continua clásico. Posee un estátor magnético y un rotor bobinado que invierte mágneticamente su polaridad rotativamente a través del contacto por fricción mecánica en sus delgas con carbones o 'escobillas'.",
        "desc2": "El clásico motor de juguete que funciona poniéndole una pila. Es fácil de usar, barato, pero las 'escobillas' de adentro se gastan un poco con los años."
    },
    "Motor sin escobillas (BLDC)": {
        "desc": "Motor de Corriente Continua Sin Escobillas (Brushless DC). Las bobinas están inmóviles en el estátor y los imanes permanentes van en el rotor. Requiere un Controlador Electrónico de Velocidad (ESC) complejo para conmutar las fases electromagnéticas de manera secuencial basada en sensores Hall internos.",
        "desc2": "Motores modernos, utilizados en drones o monopatines rápidos. No hay desgaste por roce, tienen muchísima más fuerza y duran muchísimo más."
    },
    "Servomotor": {
        "desc": "Sistema auto-regulado. Consiste de un motor (usualmente DC), una reductora de engranajes y un circuito con un potenciómetro. Recibe Pulsos Modulados (PWM); la duración del pulso dicta el giro angular, y buscará mantenerse firmemente empujado contra la perturbación (torque holding).",
        "desc2": "Un motorcito muy obediente que puede girar hacia un ángulo exacto, por ejemplo 'ponte a 90 grados', y puede sujetar el brazo robótico ahí trabado."
    },
    "Motor paso a paso": {
        "desc": "Motor sin escobillas cuyo rotor rota discretamente en ángulos fijos (pasos). Mediante energización secuencial de bobinas divididas transversalmente mediante un driver de corriente polarizado. Pueden detener el tiro o moverse micrometros pero no giran a velocidades altísimas sin sufrir pérdidas de torque.",
        "desc2": "Este motor no gira todo loco, gira pasito a pasito milimétricos (ej. 200 pasos hacen 1 revolución). Muy típico en impresoras 3D."
    },
    "Solenoide Lineal/Rotatorio": {
        "desc": "Actuador compuesto por una bobina electromagnética cilíndrica enrollada sobre una armadura (núcleo) ferromagnética móvil. Al aplicar la corriente, el campo magnético absorbe repentinamente al núcleo en su centro generando un golpe rectilíneo o percutor rotatorio inmediato.",
        "desc2": "Al enchufarle electricidad, es como un electroimán y atrae un tubo metálico bruscamente que empuja mecanismos. Como el seguro eléctrico que abre tu coche (clac, clac)."
    },
    "Relé Electromecánico": {
        "desc": "Interruptor electromagnético donde una bobina pequeña (5V-12V) aísla de interrupción el canal de carga de alto voltaje. Energizando la bobina un inducido metálico atrae los contactos primarios NO/NC (Normalmente Abiertos o Cerrados) interrumpiendo fluidos de gran potencia de corriente trifásica o DC.",
        "desc2": "Un interruptor gigante que es 'presionado' a distancia. Usas unos 5 voltios minúsculos para decirle al relé que deje pasar la corriente inmensa (220v) y no matarte en el intento de encender grandes cosas."
    },
    "Relé de estado sólido (SSR)": {
        "desc": "Switch transistorizado sin resortes que utiliza elementos semiconductores de potencia como Triacs o MOSFETs, y frecuentemente acople optoaislado. Conmuta cientos de amperios silenciosamente con velocidades increíblemente elevadas, no genera chispazos ni sufre degeneración.",
        "desc2": "Un relé igual que el anterior, pero digital. No hace 'click' ni salta chispita adentro porque no tiene partes mecánicas móviles de roce."
    },
    "Electroválvula (Solenoide)": {
        "desc": "Válvula de control direccional pilotada por una bobina tipo solenoide que gobierna el cierre u apertura o paso fluido de líneas hidráulicas (aceites, líquidos) o neumáticas (aire comprimido, gases). Vienen en formatos normalmente abiertas y normalmente cerradas, como válvulas bi o tri-direccionales.",
        "desc2": "Es una llave de paso normal, como la del jardín, ¡pero la abres y la cierras a distancia aplicándole corriente! Se usa mucho en riegos y fábricas embotelladoras."
    },
    "Actuador Piezoeléctrico": {
        "desc": "Se valen del principio inverso de la deformación piezoeléctrica: transforman tensión eléctrica suministrada a cristales cerámicos de Titanato Circonato de Plomo (PZT) en expansión milimétrica lineal, consiguiendo respuestas sub-microsegundos, de bajísima carrera macro, pero con una fuerza desmesurada en un empaque denso.",
        "desc2": "Cerámicas que cambian poquititito de tamaño cuando se les aplica corriente eléctrica. Útiles en cosas muy raras microscópicas o máquinas de precisión exagerada."
    },
    "Arduino (ATmega328P)": {
        "desc": "Es una plataforma abierta, dotada del SoC microcontrolador de arquitectura interna Harvard AVR ATmega328p de 8-bits a 16MHz y núcleo RISC, provee una abstracción inmensa de los registros bare-metal mediante C++ permitiendo rápidas iteraciones con soporte de ADC de 10bits, contadores digitales PWM y un UART emulado USB.",
        "desc2": "El cerebro más utilizado del mundo para empezar robótica. Es una tarjetita azul donde le escribes un código y puedes conectar luces y sensores para que todo cobre vida."
    },
    "ESP32 / ESP8266": {
        "desc": "Potentísimos SoCs de bajo costo manufacturados por Espressif con arquitectura Tensilica Xtensa de 32 bits y radio WiFiy BLE hardware intraborda. Capacidad superior de 240MHz y abundantes puertos ADC internos de más profundidad, DAC y RAM masiva. Base fundamental para el IoT.",
        "desc2": "Es una versión hiper vitaminada de Arduino que de regalo trae Wifi y Bluetooth, y que permite conectar a la red o al internet a casi cualquier objeto que quieras volver inteligente."
    },
    "STM32": {
        "desc": "La familia de ARM microcontroladores Cortex M de 32 bits de STMicroelectronics es un exponente semi-empresarial ineludible por su equilibrio potencia/arquitectura periférica. Integra interfaces avanzados USB host, sub-sistemas DMA (Digital memory arrays), interfaces LCD y bus nativo CAN embebido en silicio.",
        "desc2": "Es el hermano mayor industrial de microcontroladores. Si en tu trabajo requieres confiabilidad impecable o hacer cosas matemáticas dificilísimas a gran velocidad, lo mejor es usarlo en lugar de Arduino."
    },
    "PLC Compacto / Modular": {
        "desc": "Controladores Lógico-Programables robustos (ej: LOGO, S7-1200, Omron). Operativos sobre lenguaje normalizado (Listado Instrucciones, Diagrama Lógica escalera Ladder, o texto Estructurado) con diseño para el suelo de fábrica con voltajes industriales elevados, aislamientos por octoacopladores para la I/O, sin bujes OS.",
        "desc2": "La vieja confiable en fábricas enormes. Computadores que están construidos como ladrillos donde no entra polvo y no se funden; sirven para controlar cintas y válvulas que nunca paran de funcionar en industrias gigantes."
    },
    "Raspberry Pi": {
        "desc": "Es una SBC (Computadora de una sola placa) con un SOC microcontrolador Broadcom BCM que aloja CPU de arquitectura ARM (multicore superior a 1Ghz) y GPU combinada compartiendo memoria RAM que acoge instalaciones completas SOs amoldados POSIX / Linux, soportando redes, Bluetooth y GPIO integrados.",
        "desc2": "Es, literlamente, un computador funcional que cabe en la palma de la mano al que le puedes poner Windows, Linux, teclado, pantalla, solo que viene expuesto por debajo."
    },
    "Jetson Nano / BeagleBone": {
        "desc": "Hardware micro-embebido focalizado. BeagleBone ofrece puertos de altísima cadencia nativas en tiempo real. La línea NVDIA Jetson Nano ofrece computación acelerada paralelizada CUDA y núcleos Tensor de GPU (Graphical Processing Units 128 Maxwell Core) a fin de efectuar inferencia tensorial Deep Learning a baja escalada energética al filo de la red.",
        "desc2": "La Nvidia Jetson es como la Raspberry PI, pero construida especialmente para albergar Inteligencia Artificial por dentro y reconocer cámaras, perritos, y la calle velozmente consumiendo poco."
    },
    "Drivers DC / Paso a paso": {
        "desc": "Bancos y puentes en H semi conductores integrados (como L298N) de modulación lógica y amplificación de fuerza/potencia y gestión térmica para dar abasto a un pulso que el micro-controlador demanda que por sus escasos mA destruiría las puertas algorítmicas, suministrando voltajes de potencia directos desde baterías.",
        "desc2": "Los 'músculos espinales'. El chip del cerebrito (un arduino minúsculo) no tiene fuerza eléctrica suficiente para que un motor gire. El driver recibe la orden del micro, y luego le da el golpe de poder brusco a los motores."
    },
    "Módulo WiFi / Bluetooth": {
        "desc": "Transeptores IC para conectividad IP (IEEE 802.11) o PAN (Personal Area Network/BLE) donde por medio de una API abstracta como los clásicos comandos 'AT' del UART el dispositivo anfitrión maneja un sub-procesador dedicado a cifrados de pila radio red WPA e IP, como HC05 Bluetooth y el tradicional SoC ESP8266 AT en factor standalone form.",
        "desc2": "Pequeños cuadrados que le pones a cacharros antiguos o arduinos pequeños que otorgan el super-poder de conectarse a internet e incluso manejarlos desde el celular."
    },
    "LoRa / LoRaWAN": {
        "desc": "Long Range Modulation usando espectro en expansión propietario (CSS, Chirp Spread Spectrum) para telecomunicaciones LPWAN, por debajo sub-GigaHertz (433MHz-915Hz variando región ISM). Envían paquetes ínfimos (bytes minúsculos) pero alcanzando rangos inmersos sobre decenas de Kilómetros burlando densa oclusión forestal y urbana.",
        "desc2": "Como un WiFi pero larguísimo. Útil si quieres que un robot o sensor en medio de una montaña transmita señales sin tener celular, funciona porque manda textos cortitos que viajan incluso hasta decenas de kilómetros con una antenita pequeña."
    },
    "Zigbee": {
        "desc": "Norma y Stack WPAN operante usualmente en 2.4Ghz y normado por IEEE 802.15.4 diseñado especialmente topologías de redes Mesh o AdHoc. Cada componente nodo se traslada a los siguientes permitiendo una resiliencia formidable para el SmartHome donde docenas de luces son todas ruteadoras entre la red total sin caer la malla nunca.",
        "desc2": "Una red tipo tela de araña: usada intensivamente en los sistemas de casa inteligentes por Alexa, donde si un foco se quiebra, la señal automáticamente busca rebotar usando los demás focos vivos."
    },
    "RS-232 / RS-485": {
        "desc": "Estandares de comunicaciones seriales y asincrónicas industriales en la transmisión simplex a duplex. RS-232 oscila entre transiciones de voltajes unipolares elevados (±12v) siendo susceptible al degradado del ruido corto. El RS-485 provee una topología robustisíma balanceada diferencial bi-polar admitiendo más de 4,000 mil pies libres de ruido con más nodos.",
        "desc2": "Es un cable que lleva información 'a lo antigüita'. RS-485 sigue usándose masivamente hoy en fábricas porque al viajar de par en par anula todas las interferencias pesadas generadas por chispas robóticas."
    },
    "CAN Bus / Ethernet": {
        "desc": "El Controller Area Netowrk es un protocolo estándar broadcast y multi-maestro por prioridades del sistema automotor OBD robustísimo anti-ruido con detección CRC implícita. Cursa los subsistemas sin que exista un centralizador lógico a diferencia TCP Ethernet CSMA/CD determinístico.",
        "desc2": "Básicamente la red de tu coche; permite que el sensor del pedal asigne prioridades urgentes a la computadora sin que haya atascos o retardos extra."
    },
    "Rector RFID / NFC": {
        "desc": "Radio Frequency Identification opera enviando señales electromagnéticas AC al aire para energizar una tarjeta o token tag inerte, provocando modulación resonante regresando ID unique. El NFC usa principio físico gemelo optimizando corto-alcance (5 cm) para seguridad P2P de transacciones criptográficas bancarias.",
        "desc2": "Las maquinas o puertas que abres apoyando tu tarjetita o celular en lugar de usar llaves. Leen chips que ni siquiera usan baterías y funcionan por puro magnetismo."
    },
    "Módulo SIM800L / SIM900": {
        "desc": "Circuitos integrados de telecomunicaciones de banda base GSM y GPRS celulares (2G en deprecación actual de redes telcos pasándose a CAT-M, NB-IoT de LTE 4G), interactúa por comandos serigrafiados AT en UART facilitando envío SMS y GPRS TCP a módems satélites para el IoT global de localización robótica telemétrica.",
        "desc2": "Sirve para ponerle un número de teléfono físico al robot colocándole a una tarjeta plástica o chip SIM. Puede enviar SMSs, llamar e usar datos GPRS móviles."
    },
    "BJT (NPN, PNP)": {
        "desc": "Transistores bipolares compuestos semiconductivamente por uniones P-N formados como capa controlable (base). Típicamente controlan la ganancia en base con flujos de corriente minoritarios que escalan la avalancha de recolección en los terminales (emisor / colector). Operan predominantemente modulados por corriente.",
        "desc2": "El invento que cambió el mundo. Es un bloque pequeñísimo; funciona inyectándole una gota minúscula de electricidad en medio y destapa el conducto dejando pasar una gran cantidad."
    },
    "MOSFET / IGBT": {
        "desc": "El MOSFET emplea un diélectrico encapsulado de óxido aislando el umbral de tensión de conmutación sin consumir corrientes de gate haciendolo altamente eficiente y calóricos minimizados en frecuencias. IGBT mezcla una compuerta MOSFET frontal y un salto de potencia bipolar, predominando inversor motores de potencias pesadas de tracción sin pérdidas colaterales.",
        "desc2": "Los transistores modernos favoritos. A diferencia del viejo, estos no consumen casi electricidad cuando se activan; son tan eficientes que los encuentras millones de veces dentro de tu teléfono y PC."
    },
    "Amplificador Operacional": {
        "desc": "Circuitos integrados monolíticos (ej. 741) análogos formados por transistores y etapas diferenciales. Efectúan ganancia diferencial V infinitamente elevada en lazo abierto. Realimenta señales a las entradas invirtiendo sus topologías para filtrar de bajo paso y sumadores-integradores sin precedentes en electrónica pasiva.",
        "desc2": "Un pequeño cerebro matemático de cables que hace lo que quieras con el sonido y voltaje: por decir, amplifica señales débiles, resta, suma niveles y te filtra ruidos e interferencia del sonido."
    },
    "Regulador de voltaje": {
        "desc": "Sistema de estado sólido como el chip 7805 de serie emisor tipo LDO o reguladores dinámicos tipo Switch de topología StepDown y Buck/Boost que proveen estabilización regulante (Line In Vs. Out). Mantiene inmutable la DC final ante amplias perturbaciones del sistema en entrada de tensiones por el Ripple.",
        "desc2": "Las baterías suben y bajan de energía constantemente mermándose poco a poco. Esto purifica y recorta la carga, si tienes picos inestables esto entregará 5v perfectos de su otro extremo, pase lo que pase."
    },
    "Temporizador 555": {
        "desc": "Dispositivo integrado análogo y digital masificado (IC-555) legendario dotado en comparadores y arreglos FlipFlops multi propuesto por control preciso temporal, permitiendo configuraciones mono-astable (un retardo pulsante), y astable (oscila trenes infinitos oscilante para relojería).",
        "desc2": "El chip barato de los años viejos más utilizado. Útil para hacer un estroboscopio simple, de tal forma que algo parpadee 'X' veces o retrase el encendido con gran precisión."
    },
    "LEDs / Displays": {
        "desc": "Diodos de emisión de fotón que funcionan forzando el empuje a sus recombinaciones hueco electrón disipando gap lumínico sin perdidas calóricas excesivas, con uniones semi dotadas de Gallium según longitudes coloreadas. Multiplexándolos componen grandes segmentos matriciales matricados LCD pasivos y emisivo OLED y arreglos matrices anódicos.",
        "desc2": "Diodo Lámpare. Pequeñas luces con las que se iluminan números y pantallas desde calculadoras y TVs que se encienden al instante al darles muy poco voltaje y que durarán toda un avida viva útil."
    },
    "Optoacoplador": {
        "desc": "Consiste por encapsulado con un fotoluminiscente en serie ópticamente apuntado a un transistor interno. Sirve de barrera de asilado térmico y eléctrico galvánico que traspasa pulsaciones comunicativas sin compartir circuitos evitando letales retornos (back EMF). Permite el mando del PWM.",
        "desc2": "Un puente con luces adentro. Transmite la electricidad entre la computadora y la alta energía usando un destello de luz, así, si un corto circuito masivo revienta un motor, el chip no recibe ese cortocircuito por obviedad."
    },
    "Resistencia": {
        "desc": "Dispositivos de carbones fijos que proveen oposición impuesta linear Ohmica pura. Modera caudales de intensidades. Es una pieza puramente resistiva para limitación pasiva I=(V/R). Son fabricadas por mezclas e impregnaciones con códigos visuales tolerantes seriales.",
        "desc2": "Es como poner una cañería más delgada para el agua, y frena la corriente de la electricidad, sin importar lo que el sistema pida, de tal manera que las luces no quemen por voltaje extra."
    },
    "Capacitor": {
        "desc": "Los capacitores (o de tipo condensadores electrolíticos o dieléctricas placas cerámicos aislados conformes Mylar) retienen momentáneamente energía potencial E en forma capacitiva con gradiente campos Eléctricos polarizados, acopladores en filtros frecuenciales bypass para AC oscilantes suprimiendo ruido.",
        "desc2": "Pequeñas despensas de energía. Absorben corriente rápido y se llenan en instantes como un tanque minímo de energía, devolviéndola en el circuito velozmente cuanta algo falla por 1 milisegundo en la bateria para dar mayor estabilidad."
    },
    "Inductor": {
        "desc": "Bobinado reactivo pasivo enrollado de cobre puro aislado en el núcleo ferrosos (Choke). Resistente inercial magnética reactivo que detiene transitoriamente rápidos incrementantes variaciones di/dt en la línea por inducción magnética oponiéndose por Ley fundamental de Lenz, base de todos los generadores y conmutaciones.",
        "desc2": "Enrollado de cable para que haga magia. En contraste con los capacitores, retienen momentáneamente el poder pero frenan corrientes para que motores y filtros suban de poco a poco y sin chispazos de daño."
    }
}

for item in data:
    nombre = item["nombre"]
    if nombre in nuevos_textos:
        # Reemplazar la traduccion y expander el descricpion
        item["descripcion"] = nuevos_textos[nombre]["desc"]
        # Aniadir el descripcion coloquial (desc2)
        item["descripcion2"] = nuevos_textos[nombre]["desc2"]
    else:
        # Fallback for empty/unmatched names just in case
        item["descripcion"] = "Descripción técnica sobre el funcionamiento general de este componente electrónico robusto y duradero."
        item["descripcion2"] = "Un dispositivo que hace cosas electrónicas con facilidad para que aprenda cualquiera."

# Output again
with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const componentesData = ' + json.dumps(data, indent=4, ensure_ascii=False) + ';')

print("Exito. data.js actualizada.")
