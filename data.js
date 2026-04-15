const componentesData = [
    {
        "id": 0,
        "categoria": "Sensores",
        "tipo": "Sensores de temperatura",
        "nombre": "Termopar",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Thermocouple0002.jpg",
        "descripcion": "Un termopar es un transductor formado por la unión de dos metales distintos que produce una diferencia de potencial muy pequeña (efecto Seebeck) en función de la diferencia de temperatura entre uno de los extremos, denominado «punto caliente», y el otro, denominado «punto frío». Es ideal para medir temperaturas extremas en entornos industriales, soportando hasta miles de grados Celsius.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Son dos alambres de distintos metales unidos en la punta. Al calentarlos, generan un pequeñísimo voltaje. Básicamente, convierten el calor en electricidad para que un robot o máquina sepa a qué temperatura está el ambiente."
    },
    {
        "id": 1,
        "categoria": "Sensores",
        "tipo": "Sensores de temperatura",
        "nombre": "RTD (PT100, PT1000)",
        "imagen": "https://placehold.co/400x300/e2e8f0/64748b?text=Resistance%20temperature%20detector",
        "descripcion": "Los RTD (Detectores de Temperatura Resistivos) basan su funcionamiento en la variación de la resistencia de un conductor en función de la temperatura. El PT100 y PT1000 están hechos de platino (Pt) y tienen una resistencia de 100 y 1000 ohmios a 0 °C respectivamente. Son extremadamente precisos y lineales comparados con otros sensores.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Es un cablecito de platino que cambia su resistencia eléctrica dependiendo de qué tan caliente o frío esté. Como el material es puro, nos da la temperatura exacta casi sin fallar."
    },
    {
        "id": 2,
        "categoria": "Sensores",
        "tipo": "Sensores de temperatura",
        "nombre": "Termistor (NTC, PTC)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/3b/NTC_bead.jpg",
        "descripcion": "Componente electrónico cuya resistencia varía altamente con la temperatura. Los Coeficiente de Temperatura Negativo (NTC) disminuyen su resistencia con el aumento del calor, mientras que los de Coeficiente Positivo (PTC) la aumentan. Se usan para protección de circuitos, control y medición precisa en rangos acotados (-50 a 150 °C).",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Una resistencia mágica. Si es NTC, cuanto más la calientas, más fácil deja pasar la electricidad; si es PTC, ocurre al revés."
    },
    {
        "id": 3,
        "categoria": "Sensores",
        "tipo": "Sensores de temperatura",
        "nombre": "Sensor digital (DS18B20)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/5/56/I-button.jpg",
        "descripcion": "El DS18B20 es un sensor de temperatura digital de alta precisión que utiliza el protocolo 1-Wire (un solo cable de datos más tierra) de Dallas Semiconductor. Cuenta con resolución configurable de 9 a 12 bits, e integra conversor analógico-digital (ADC). Cada sensor tiene un código de 64 bits único que permite conectar decenas en la misma línea.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Un termómetro súper inteligente que habla en lenguaje digital. Solo necesita un cable para enviar los datos y puedes conectar varios en ese mismo cable sin que se crucen las señales."
    },
    {
        "id": 4,
        "categoria": "Sensores",
        "tipo": "Sensores de humedad",
        "nombre": "Capacitivo / Resistivo",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Haar-Hygrometer.jpg",
        "descripcion": "Los sensores de humedad capacitivos emplean una película polimérica o de óxido metálico cuyo valor de capacitancia cambia al absorber agua. Los resistivos miden cómo varía la resistencia eléctrica de un polímero higroscópico. Ambos requieren compensación de temperatura para obtener la humedad relativa real.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Un pequeño cuadrito que detecta cuánta agua flota en el aire. Funciona atrapando pequeñitas gotas invisibles de humedad, lo que altera su electricidad."
    },
    {
        "id": 5,
        "categoria": "Sensores",
        "tipo": "Sensores de humedad",
        "nombre": "Módulo DHT11/DHT22",
        "imagen": "https://placehold.co/400x300/e2e8f0/64748b?text=DHT11",
        "descripcion": "Combina un termistor (para temperatura) y un sensor capacitivo (para humedad) más un chip conversor analógico a digital (ADC) interno de 8 bits (DHT11) o 16 bits (DHT22). Transmite una trama de datos en serie con un protocolo digital propio de un cable, entregando los valores procesados digitalmente.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Es un sensor 'todo en uno' muy común para aprender a hacer estaciones del clima. Te dice la humedad y la temperatura directamente sin que tengas que hacer matemáticas difíciles."
    },
    {
        "id": 6,
        "categoria": "Sensores",
        "tipo": "Sensores de presión",
        "nombre": "Piezorresistivos / Capacitivos",
        "imagen": "https://placehold.co/400x300/e2e8f0/64748b?text=Pressure%20sensor",
        "descripcion": "Los sensores piezorresistivos varían su resistencia eléctrica bajo presión gracias al efecto piezorresistivo en mallas de silicio o galgas extensiométricas. Los sensores capacitivos identifican el movimiento de un diafragma bajo la presión alterando la capacitancia de un circuito.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Son detectores de presión. Como presionar un resorte y que una computadora interprete qué tan fuerte se ha aplastado."
    },
    {
        "id": 7,
        "categoria": "Sensores",
        "tipo": "Sensores de proximidad",
        "nombre": "Inductivo / Capacitivo",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/2/27/Sharp_GP2Y0A21YK_IR_proximity_sensor_cropped.jpg",
        "descripcion": "Los sensores inductivos generan un campo electromagnético de alta frecuencia; cuando un objeto metálico se acerca altera este campo (corrientes de Foucault). Los capacitivos generan un campo electrostático; detectan la proximidad tanto de metales como plásticos basándose en la constante dieléctrica del material introducido en la zona sensible.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Detectores de cercanía sincontacto. El inductivo reacciona si le acercas un metal (como una moneda p un robot); el capacitivo detecta también otras cosas como plástico y líquidos."
    },
    {
        "id": 8,
        "categoria": "Sensores",
        "tipo": "Sensores de proximidad",
        "nombre": "Ultrasónico (HC-SR04)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/f/f6/A_medical_ultrasound_linear_array_probe%2C_scan_head%2C_transducer.jpg",
        "descripcion": "Sensor de distancia de tiempo-de-vuelo (ToF). Emite un pulso de ultrasonido (Trigger) a 40 kHz y calcula el tiempo que tarda la onda en rebotar en un objeto y regresar al micrófono receptor (Echo). Utilizando la velocidad del sonido (~343 m/s) determina la distancia con una alta fiabilidad para objetivos perpendiculares.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Son como los ojos de un murciélago. Gritan un ultrasonido inaudible, escuchan el eco, y calculan cuántos centímetros faltan para chocar contra algo."
    },
    {
        "id": 9,
        "categoria": "Sensores",
        "tipo": "Sensores de proximidad",
        "nombre": "Infrarrojo (PIR)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Front-Fresnel_type.JPG",
        "descripcion": "Sensor Infrarrojo Pasivo. No emite ninguna luz, sino que detecta la radiación infrarroja distante (calor térmico corporal) usando cristales piroeléctricos. A través de un lente Fresnel que divide el área de detección en zonas, capta la diferencia de irradiación cuando entra un cuerpo humano.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "El típico sensor de las alarmas de casas o luces de pasillo. Solo se encienden si ven calor humano moviéndose cerca."
    },
    {
        "id": 10,
        "categoria": "Sensores",
        "tipo": "Sensores ópticos",
        "nombre": "Fotorresistencia (LDR)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/bb/LDR_1480405_6_7_HDR_Enhancer_1.jpg",
        "descripcion": "Resistencia Dependiente de la Luz (LDR) fabricada comúnmente de Sulfuro de Cadmio (CdS). Es un semiconductor de alta resistencia que en la oscuridad (resistividad en MΩ) se comporta como aislante, y en la luz, los fotones proveen energía a los electrones reduciendo drásticamente su resistencia (resistividad en Ω o KΩ).",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Es una pieza que se vuelve más fácil de atravesar por la electricidad cuanta más luz la ilumina. Perfecta para encender luces de calle al anochecer."
    },
    {
        "id": 11,
        "categoria": "Sensores",
        "tipo": "Sensores ópticos",
        "nombre": "Fotodiodo / Fototransistor",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Fotodio.jpg",
        "descripcion": "Detectores de luz basados en semiconductores (uniones PN/PIN). El fotodiodo genera pares electrón-hueco al ser incidido por luz provocando corriente (modelo fotovoltaico/fotoconductivo). El fototransistor añade una fase de amplificación mediante la ganancia intrínseca de su base óptica.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Funcionan parecido a un panel solar pequeño pero súper sensible; entregan corrientes más grandes y veloces cuanta más luz detectan."
    },
    {
        "id": 12,
        "categoria": "Sensores",
        "tipo": "Sensores ópticos",
        "nombre": "Sensor de color",
        "imagen": "https://placehold.co/400x300/e2e8f0/64748b?text=Colorimeter",
        "descripcion": "Normalmente incluye un arreglo de fotodiodos recubiertos con filtros de color RGB integrados y emisores LED blancos. Los fotodiodos miden el rebote e intensidad de cada canal de espectro de color independientemente, logrando distinguir tonalidades muy precisas comunicadas por I2C.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Actúa iluminando algo con luz blanca, luego mide qué colores se rebotan. Así, le puede decir al robot si está parado en un bloque rojo o en uno azul."
    },
    {
        "id": 13,
        "categoria": "Sensores",
        "tipo": "Encoders",
        "nombre": "Encoder Incremental / Absoluto",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Gray_code_rotary_encoder_13-track_opened.jpg",
        "descripcion": "Los encoders son codificadores rotativos que controlan movimientos. Un encoder incremental usa discos ranurados ópticos o magnéticos, enviando un pulso cuadrado (cuadratura) relativo cada vez que gira. Un absoluto da el ángulo exacto gracias a un codificación de disco en binario Grey o de patrón unívoco.",
        "caracteristicas": "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA).",
        "descripcion2": "Aparato que se acopla a la rueda de un motor. Le chiva a la computadora cuántas vueltas EXACTAS ha dado la rueda, así el motor no se pasa de frenazo."
    },
    {
        "id": 14,
        "categoria": "Actuadores",
        "tipo": "Motores DC",
        "nombre": "Motor con escobillas",
        "imagen": "https://placehold.co/400x300/e2e8f0/64748b?text=Brushed%20DC%20electric%20motor",
        "descripcion": "El motor eléctrico de corriente continua clásico. Posee un estátor magnético y un rotor bobinado que invierte mágneticamente su polaridad rotativamente a través del contacto por fricción mecánica en sus delgas con carbones o 'escobillas'.",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "El clásico motor de juguete que funciona poniéndole una pila. Es fácil de usar, barato, pero las 'escobillas' de adentro se gastan un poco con los años."
    },
    {
        "id": 15,
        "categoria": "Actuadores",
        "tipo": "Motores DC",
        "nombre": "Motor sin escobillas (BLDC)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Floppy_drive_spindle_motor_open.jpg",
        "descripcion": "Motor de Corriente Continua Sin Escobillas (Brushless DC). Las bobinas están inmóviles en el estátor y los imanes permanentes van en el rotor. Requiere un Controlador Electrónico de Velocidad (ESC) complejo para conmutar las fases electromagnéticas de manera secuencial basada en sensores Hall internos.",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "Motores modernos, utilizados en drones o monopatines rápidos. No hay desgaste por roce, tienen muchísima más fuerza y duran muchísimo más."
    },
    {
        "id": 16,
        "categoria": "Actuadores",
        "tipo": "Motores DC",
        "nombre": "Servomotor",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/6/63/3417_09_Servogetriebe.jpg",
        "descripcion": "Sistema auto-regulado. Consiste de un motor (usualmente DC), una reductora de engranajes y un circuito con un potenciómetro. Recibe Pulsos Modulados (PWM); la duración del pulso dicta el giro angular, y buscará mantenerse firmemente empujado contra la perturbación (torque holding).",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "Un motorcito muy obediente que puede girar hacia un ángulo exacto, por ejemplo 'ponte a 90 grados', y puede sujetar el brazo robótico ahí trabado."
    },
    {
        "id": 17,
        "categoria": "Actuadores",
        "tipo": "Motores DC",
        "nombre": "Motor paso a paso",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/6/67/StepperMotor.gif",
        "descripcion": "Motor sin escobillas cuyo rotor rota discretamente en ángulos fijos (pasos). Mediante energización secuencial de bobinas divididas transversalmente mediante un driver de corriente polarizado. Pueden detener el tiro o moverse micrometros pero no giran a velocidades altísimas sin sufrir pérdidas de torque.",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "Este motor no gira todo loco, gira pasito a pasito milimétricos (ej. 200 pasos hacen 1 revolución). Muy típico en impresoras 3D."
    },
    {
        "id": 18,
        "categoria": "Actuadores",
        "tipo": "Solenoides",
        "nombre": "Solenoide Lineal/Rotatorio",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/d/d1/60._%D0%9C%D0%B0%D0%B3%D0%BD%D0%B5%D1%82%D0%BD%D0%BE_%D0%BF%D0%BE%D0%BB%D0%B5_%D0%BD%D0%B0_%D1%81%D0%BE%D0%BB%D0%B5%D0%BD%D0%BE%D0%B8%D0%B4.ogg",
        "descripcion": "Actuador compuesto por una bobina electromagnética cilíndrica enrollada sobre una armadura (núcleo) ferromagnética móvil. Al aplicar la corriente, el campo magnético absorbe repentinamente al núcleo en su centro generando un golpe rectilíneo o percutor rotatorio inmediato.",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "Al enchufarle electricidad, es como un electroimán y atrae un tubo metálico bruscamente que empuja mecanismos. Como el seguro eléctrico que abre tu coche (clac, clac)."
    },
    {
        "id": 19,
        "categoria": "Actuadores",
        "tipo": "Relés",
        "nombre": "Relé Electromecánico",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/38/Delta_Electronics_DPS-350FB_A_-_board_1_-_OEG_SDT-SS-112M_-_case_removed-3045.jpg",
        "descripcion": "Interruptor electromagnético donde una bobina pequeña (5V-12V) aísla de interrupción el canal de carga de alto voltaje. Energizando la bobina un inducido metálico atrae los contactos primarios NO/NC (Normalmente Abiertos o Cerrados) interrumpiendo fluidos de gran potencia de corriente trifásica o DC.",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "Un interruptor gigante que es 'presionado' a distancia. Usas unos 5 voltios minúsculos para decirle al relé que deje pasar la corriente inmensa (220v) y no matarte en el intento de encender grandes cosas."
    },
    {
        "id": 20,
        "categoria": "Actuadores",
        "tipo": "Relés",
        "nombre": "Relé de estado sólido (SSR)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/9/9d/SSR_solid_state_relay.jpg",
        "descripcion": "Switch transistorizado sin resortes que utiliza elementos semiconductores de potencia como Triacs o MOSFETs, y frecuentemente acople optoaislado. Conmuta cientos de amperios silenciosamente con velocidades increíblemente elevadas, no genera chispazos ni sufre degeneración.",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "Un relé igual que el anterior, pero digital. No hace 'click' ni salta chispita adentro porque no tiene partes mecánicas móviles de roce."
    },
    {
        "id": 21,
        "categoria": "Actuadores",
        "tipo": "Válvulas",
        "nombre": "Electroválvula (Solenoide)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/7/72/Solonoid_valves.jpg",
        "descripcion": "Válvula de control direccional pilotada por una bobina tipo solenoide que gobierna el cierre u apertura o paso fluido de líneas hidráulicas (aceites, líquidos) o neumáticas (aire comprimido, gases). Vienen en formatos normalmente abiertas y normalmente cerradas, como válvulas bi o tri-direccionales.",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "Es una llave de paso normal, como la del jardín, ¡pero la abres y la cierras a distancia aplicándole corriente! Se usa mucho en riegos y fábricas embotelladoras."
    },
    {
        "id": 22,
        "categoria": "Actuadores",
        "tipo": "Piezoeléctricos",
        "nombre": "Actuador Piezoeléctrico",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/4/42/Insides_of_a_piezoelectric_motor.JPG",
        "descripcion": "Se valen del principio inverso de la deformación piezoeléctrica: transforman tensión eléctrica suministrada a cristales cerámicos de Titanato Circonato de Plomo (PZT) en expansión milimétrica lineal, consiguiendo respuestas sub-microsegundos, de bajísima carrera macro, pero con una fuerza desmesurada en un empaque denso.",
        "caracteristicas": "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital.",
        "descripcion2": "Cerámicas que cambian poquititito de tamaño cuando se les aplica corriente eléctrica. Útiles en cosas muy raras microscópicas o máquinas de precisión exagerada."
    },
    {
        "id": 23,
        "categoria": "Controladores",
        "tipo": "Microcontroladores",
        "nombre": "Arduino (ATmega328P)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg",
        "descripcion": "Es una plataforma abierta, dotada del SoC microcontrolador de arquitectura interna Harvard AVR ATmega328p de 8-bits a 16MHz y núcleo RISC, provee una abstracción inmensa de los registros bare-metal mediante C++ permitiendo rápidas iteraciones con soporte de ADC de 10bits, contadores digitales PWM y un UART emulado USB.",
        "caracteristicas": "Voltaje: 3.3V - 5V | Protocolos: I2C, SPI, UART | Consumo: Medio (50mA - 1A).",
        "descripcion2": "El cerebro más utilizado del mundo para empezar robótica. Es una tarjetita azul donde le escribes un código y puedes conectar luces y sensores para que todo cobre vida."
    },
    {
        "id": 24,
        "categoria": "Controladores",
        "tipo": "Microcontroladores",
        "nombre": "ESP32 / ESP8266",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/33/Espressif_ESP-WROOM-32_Wi-Fi_%26_Bluetooth_Module.jpg",
        "descripcion": "Potentísimos SoCs de bajo costo manufacturados por Espressif con arquitectura Tensilica Xtensa de 32 bits y radio WiFiy BLE hardware intraborda. Capacidad superior de 240MHz y abundantes puertos ADC internos de más profundidad, DAC y RAM masiva. Base fundamental para el IoT.",
        "caracteristicas": "Voltaje: 3.3V - 5V | Protocolos: I2C, SPI, UART | Consumo: Medio (50mA - 1A).",
        "descripcion2": "Es una versión hiper vitaminada de Arduino que de regalo trae Wifi y Bluetooth, y que permite conectar a la red o al internet a casi cualquier objeto que quieras volver inteligente."
    },
    {
        "id": 25,
        "categoria": "Controladores",
        "tipo": "Microcontroladores",
        "nombre": "STM32",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/4/45/STM32H7B0.jpg",
        "descripcion": "La familia de ARM microcontroladores Cortex M de 32 bits de STMicroelectronics es un exponente semi-empresarial ineludible por su equilibrio potencia/arquitectura periférica. Integra interfaces avanzados USB host, sub-sistemas DMA (Digital memory arrays), interfaces LCD y bus nativo CAN embebido en silicio.",
        "caracteristicas": "Voltaje: 3.3V - 5V | Protocolos: I2C, SPI, UART | Consumo: Medio (50mA - 1A).",
        "descripcion2": "Es el hermano mayor industrial de microcontroladores. Si en tu trabajo requieres confiabilidad impecable o hacer cosas matemáticas dificilísimas a gran velocidad, lo mejor es usarlo en lugar de Arduino."
    },
    {
        "id": 26,
        "categoria": "Controladores",
        "tipo": "PLCs",
        "nombre": "PLC Compacto / Modular",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/d/df/Automate_industriel_WAGO_pour_un_syst%C3%A8me_de_monitoring_en_industrie_pharmaceutique.jpg",
        "descripcion": "Controladores Lógico-Programables robustos (ej: LOGO, S7-1200, Omron). Operativos sobre lenguaje normalizado (Listado Instrucciones, Diagrama Lógica escalera Ladder, o texto Estructurado) con diseño para el suelo de fábrica con voltajes industriales elevados, aislamientos por octoacopladores para la I/O, sin bujes OS.",
        "caracteristicas": "Voltaje: 3.3V - 5V | Protocolos: I2C, SPI, UART | Consumo: Medio (50mA - 1A).",
        "descripcion2": "La vieja confiable en fábricas enormes. Computadores que están construidos como ladrillos donde no entra polvo y no se funden; sirven para controlar cintas y válvulas que nunca paran de funcionar en industrias gigantes."
    },
    {
        "id": 27,
        "categoria": "Controladores",
        "tipo": "Sistemas Embebidos",
        "nombre": "Raspberry Pi",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/7/73/Raspberry_Pi_1%2C_Pi_5%2C_Pi_400%2C_Pico_and_Zero_2_%28cropped%29.jpg",
        "descripcion": "Es una SBC (Computadora de una sola placa) con un SOC microcontrolador Broadcom BCM que aloja CPU de arquitectura ARM (multicore superior a 1Ghz) y GPU combinada compartiendo memoria RAM que acoge instalaciones completas SOs amoldados POSIX / Linux, soportando redes, Bluetooth y GPIO integrados.",
        "caracteristicas": "Voltaje: 3.3V - 5V | Protocolos: I2C, SPI, UART | Consumo: Medio (50mA - 1A).",
        "descripcion2": "Es, literlamente, un computador funcional que cabe en la palma de la mano al que le puedes poner Windows, Linux, teclado, pantalla, solo que viene expuesto por debajo."
    },
    {
        "id": 28,
        "categoria": "Controladores",
        "tipo": "Sistemas Embebidos",
        "nombre": "Jetson Nano / BeagleBone",
        "imagen": "https://placehold.co/400x300/e2e8f0/64748b?text=Nvidia%20Jetson",
        "descripcion": "Hardware micro-embebido focalizado. BeagleBone ofrece puertos de altísima cadencia nativas en tiempo real. La línea NVDIA Jetson Nano ofrece computación acelerada paralelizada CUDA y núcleos Tensor de GPU (Graphical Processing Units 128 Maxwell Core) a fin de efectuar inferencia tensorial Deep Learning a baja escalada energética al filo de la red.",
        "caracteristicas": "Voltaje: 3.3V - 5V | Protocolos: I2C, SPI, UART | Consumo: Medio (50mA - 1A).",
        "descripcion2": "La Nvidia Jetson es como la Raspberry PI, pero construida especialmente para albergar Inteligencia Artificial por dentro y reconocer cámaras, perritos, y la calle velozmente consumiendo poco."
    },
    {
        "id": 29,
        "categoria": "Controladores",
        "tipo": "Controladores de Motor",
        "nombre": "Drivers DC / Paso a paso",
        "imagen": "https://placehold.co/400x300/e2e8f0/64748b?text=Motor%20controller",
        "descripcion": "Bancos y puentes en H semi conductores integrados (como L298N) de modulación lógica y amplificación de fuerza/potencia y gestión térmica para dar abasto a un pulso que el micro-controlador demanda que por sus escasos mA destruiría las puertas algorítmicas, suministrando voltajes de potencia directos desde baterías.",
        "caracteristicas": "Voltaje: 3.3V - 5V | Protocolos: I2C, SPI, UART | Consumo: Medio (50mA - 1A).",
        "descripcion2": "Los 'músculos espinales'. El chip del cerebrito (un arduino minúsculo) no tiene fuerza eléctrica suficiente para que un motor gire. El driver recibe la orden del micro, y luego le da el golpe de poder brusco a los motores."
    },
    {
        "id": 30,
        "categoria": "Comunicación",
        "tipo": "Módulos Inalámbricos",
        "nombre": "Módulo WiFi / Bluetooth",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/7/70/Plantronics_Voyager_Legend.JPG",
        "descripcion": "Transeptores IC para conectividad IP (IEEE 802.11) o PAN (Personal Area Network/BLE) donde por medio de una API abstracta como los clásicos comandos 'AT' del UART el dispositivo anfitrión maneja un sub-procesador dedicado a cifrados de pila radio red WPA e IP, como HC05 Bluetooth y el tradicional SoC ESP8266 AT en factor standalone form.",
        "caracteristicas": "Frecuencia: 2.4GHz / dependiente | Protocolos: UART/SPI | Rango: Variable.",
        "descripcion2": "Pequeños cuadrados que le pones a cacharros antiguos o arduinos pequeños que otorgan el super-poder de conectarse a internet e incluso manejarlos desde el celular."
    },
    {
        "id": 31,
        "categoria": "Comunicación",
        "tipo": "Módulos Inalámbricos",
        "nombre": "LoRa / LoRaWAN",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/5/5a/LoRa_Module_with_antenna_and_SPI_wires_attached.jpg",
        "descripcion": "Long Range Modulation usando espectro en expansión propietario (CSS, Chirp Spread Spectrum) para telecomunicaciones LPWAN, por debajo sub-GigaHertz (433MHz-915Hz variando región ISM). Envían paquetes ínfimos (bytes minúsculos) pero alcanzando rangos inmersos sobre decenas de Kilómetros burlando densa oclusión forestal y urbana.",
        "caracteristicas": "Frecuencia: 2.4GHz / dependiente | Protocolos: UART/SPI | Rango: Variable.",
        "descripcion2": "Como un WiFi pero larguísimo. Útil si quieres que un robot o sensor en medio de una montaña transmita señales sin tener celular, funciona porque manda textos cortitos que viajan incluso hasta decenas de kilómetros con una antenita pequeña."
    },
    {
        "id": 32,
        "categoria": "Comunicación",
        "tipo": "Módulos Inalámbricos",
        "nombre": "Zigbee",
        "imagen": "https://placehold.co/400x300/e2e8f0/64748b?text=Zigbee",
        "descripcion": "Norma y Stack WPAN operante usualmente en 2.4Ghz y normado por IEEE 802.15.4 diseñado especialmente topologías de redes Mesh o AdHoc. Cada componente nodo se traslada a los siguientes permitiendo una resiliencia formidable para el SmartHome donde docenas de luces son todas ruteadoras entre la red total sin caer la malla nunca.",
        "caracteristicas": "Frecuencia: 2.4GHz / dependiente | Protocolos: UART/SPI | Rango: Variable.",
        "descripcion2": "Una red tipo tela de araña: usada intensivamente en los sistemas de casa inteligentes por Alexa, donde si un foco se quiebra, la señal automáticamente busca rebotar usando los demás focos vivos."
    },
    {
        "id": 33,
        "categoria": "Comunicación",
        "tipo": "Transceptores",
        "nombre": "RS-232 / RS-485",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Honeywell_4600g_-_board_1_-_Texas_Instruments_VN08-9677.jpg",
        "descripcion": "Estandares de comunicaciones seriales y asincrónicas industriales en la transmisión simplex a duplex. RS-232 oscila entre transiciones de voltajes unipolares elevados (±12v) siendo susceptible al degradado del ruido corto. El RS-485 provee una topología robustisíma balanceada diferencial bi-polar admitiendo más de 4,000 mil pies libres de ruido con más nodos.",
        "caracteristicas": "Frecuencia: 2.4GHz / dependiente | Protocolos: UART/SPI | Rango: Variable.",
        "descripcion2": "Es un cable que lleva información 'a lo antigüita'. RS-485 sigue usándose masivamente hoy en fábricas porque al viajar de par en par anula todas las interferencias pesadas generadas por chispas robóticas."
    },
    {
        "id": 34,
        "categoria": "Comunicación",
        "tipo": "Transceptores",
        "nombre": "CAN Bus / Ethernet",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/d/d1/CAN_Logo.svg",
        "descripcion": "El Controller Area Netowrk es un protocolo estándar broadcast y multi-maestro por prioridades del sistema automotor OBD robustísimo anti-ruido con detección CRC implícita. Cursa los subsistemas sin que exista un centralizador lógico a diferencia TCP Ethernet CSMA/CD determinístico.",
        "caracteristicas": "Frecuencia: 2.4GHz / dependiente | Protocolos: UART/SPI | Rango: Variable.",
        "descripcion2": "Básicamente la red de tu coche; permite que el sensor del pedal asigne prioridades urgentes a la computadora sin que haya atascos o retardos extra."
    },
    {
        "id": 35,
        "categoria": "Comunicación",
        "tipo": "RFID/NFC",
        "nombre": "Rector RFID / NFC",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/e/e2/RFID_-_Tag_laverie_avec_EPC_imprim%C3%A9.png",
        "descripcion": "Radio Frequency Identification opera enviando señales electromagnéticas AC al aire para energizar una tarjeta o token tag inerte, provocando modulación resonante regresando ID unique. El NFC usa principio físico gemelo optimizando corto-alcance (5 cm) para seguridad P2P de transacciones criptográficas bancarias.",
        "caracteristicas": "Frecuencia: 2.4GHz / dependiente | Protocolos: UART/SPI | Rango: Variable.",
        "descripcion2": "Las maquinas o puertas que abres apoyando tu tarjetita o celular en lugar de usar llaves. Leen chips que ni siquiera usan baterías y funcionan por puro magnetismo."
    },
    {
        "id": 36,
        "categoria": "Comunicación",
        "tipo": "GSM/GPRS/LTE",
        "nombre": "Módulo SIM800L / SIM900",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/5/5d/GSMLogo.svg",
        "descripcion": "Circuitos integrados de telecomunicaciones de banda base GSM y GPRS celulares (2G en deprecación actual de redes telcos pasándose a CAT-M, NB-IoT de LTE 4G), interactúa por comandos serigrafiados AT en UART facilitando envío SMS y GPRS TCP a módems satélites para el IoT global de localización robótica telemétrica.",
        "caracteristicas": "Frecuencia: 2.4GHz / dependiente | Protocolos: UART/SPI | Rango: Variable.",
        "descripcion2": "Sirve para ponerle un número de teléfono físico al robot colocándole a una tarjeta plástica o chip SIM. Puede enviar SMSs, llamar e usar datos GPRS móviles."
    },
    {
        "id": 37,
        "categoria": "Componentes Básicos",
        "tipo": "Transistores",
        "nombre": "BJT (NPN, PNP)",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/2/21/Transistorer_%28cropped%29.jpg",
        "descripcion": "Transistores bipolares compuestos semiconductivamente por uniones P-N formados como capa controlable (base). Típicamente controlan la ganancia en base con flujos de corriente minoritarios que escalan la avalancha de recolección en los terminales (emisor / colector). Operan predominantemente modulados por corriente.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "El invento que cambió el mundo. Es un bloque pequeñísimo; funciona inyectándole una gota minúscula de electricidad en medio y destapa el conducto dejando pasar una gran cantidad."
    },
    {
        "id": 38,
        "categoria": "Componentes Básicos",
        "tipo": "Transistores",
        "nombre": "MOSFET / IGBT",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/4/4f/D2PAK.JPG",
        "descripcion": "El MOSFET emplea un diélectrico encapsulado de óxido aislando el umbral de tensión de conmutación sin consumir corrientes de gate haciendolo altamente eficiente y calóricos minimizados en frecuencias. IGBT mezcla una compuerta MOSFET frontal y un salto de potencia bipolar, predominando inversor motores de potencias pesadas de tracción sin pérdidas colaterales.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "Los transistores modernos favoritos. A diferencia del viejo, estos no consumen casi electricidad cuando se activan; son tan eficientes que los encuentras millones de veces dentro de tu teléfono y PC."
    },
    {
        "id": 39,
        "categoria": "Componentes Básicos",
        "tipo": "Circuitos Integrados",
        "nombre": "Amplificador Operacional",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/4/43/Ua741_opamp.jpg",
        "descripcion": "Circuitos integrados monolíticos (ej. 741) análogos formados por transistores y etapas diferenciales. Efectúan ganancia diferencial V infinitamente elevada en lazo abierto. Realimenta señales a las entradas invirtiendo sus topologías para filtrar de bajo paso y sumadores-integradores sin precedentes en electrónica pasiva.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "Un pequeño cerebro matemático de cables que hace lo que quieras con el sonido y voltaje: por decir, amplifica señales débiles, resta, suma niveles y te filtra ruidos e interferencia del sonido."
    },
    {
        "id": 40,
        "categoria": "Componentes Básicos",
        "tipo": "Circuitos Integrados",
        "nombre": "Regulador de voltaje",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/c/ce/7812_voltage_regulator.jpg",
        "descripcion": "Sistema de estado sólido como el chip 7805 de serie emisor tipo LDO o reguladores dinámicos tipo Switch de topología StepDown y Buck/Boost que proveen estabilización regulante (Line In Vs. Out). Mantiene inmutable la DC final ante amplias perturbaciones del sistema en entrada de tensiones por el Ripple.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "Las baterías suben y bajan de energía constantemente mermándose poco a poco. Esto purifica y recorta la carga, si tienes picos inestables esto entregará 5v perfectos de su otro extremo, pase lo que pase."
    },
    {
        "id": 41,
        "categoria": "Componentes Básicos",
        "tipo": "Circuitos Integrados",
        "nombre": "Temporizador 555",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/2/21/Signetics_NE555N.JPG",
        "descripcion": "Dispositivo integrado análogo y digital masificado (IC-555) legendario dotado en comparadores y arreglos FlipFlops multi propuesto por control preciso temporal, permitiendo configuraciones mono-astable (un retardo pulsante), y astable (oscila trenes infinitos oscilante para relojería).",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "El chip barato de los años viejos más utilizado. Útil para hacer un estroboscopio simple, de tal forma que algo parpadee 'X' veces o retrase el encendido con gran precisión."
    },
    {
        "id": 42,
        "categoria": "Componentes Básicos",
        "tipo": "Optoelectrónica",
        "nombre": "LEDs / Displays",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/c/cb/RBG-LED.jpg",
        "descripcion": "Diodos de emisión de fotón que funcionan forzando el empuje a sus recombinaciones hueco electrón disipando gap lumínico sin perdidas calóricas excesivas, con uniones semi dotadas de Gallium según longitudes coloreadas. Multiplexándolos componen grandes segmentos matriciales matricados LCD pasivos y emisivo OLED y arreglos matrices anódicos.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "Diodo Lámpare. Pequeñas luces con las que se iluminan números y pantallas desde calculadoras y TVs que se encienden al instante al darles muy poco voltaje y que durarán toda un avida viva útil."
    },
    {
        "id": 43,
        "categoria": "Componentes Básicos",
        "tipo": "Optoelectrónica",
        "nombre": "Optoacoplador",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/0/02/Optoisolator_Pinout.svg",
        "descripcion": "Consiste por encapsulado con un fotoluminiscente en serie ópticamente apuntado a un transistor interno. Sirve de barrera de asilado térmico y eléctrico galvánico que traspasa pulsaciones comunicativas sin compartir circuitos evitando letales retornos (back EMF). Permite el mando del PWM.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "Un puente con luces adentro. Transmite la electricidad entre la computadora y la alta energía usando un destello de luz, así, si un corto circuito masivo revienta un motor, el chip no recibe ese cortocircuito por obviedad."
    },
    {
        "id": 44,
        "categoria": "Componentes Básicos",
        "tipo": "Componentes Pasivos",
        "nombre": "Resistencia",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Electronic-Axial-Lead-Resistors-Array.png",
        "descripcion": "Dispositivos de carbones fijos que proveen oposición impuesta linear Ohmica pura. Modera caudales de intensidades. Es una pieza puramente resistiva para limitación pasiva I=(V/R). Son fabricadas por mezclas e impregnaciones con códigos visuales tolerantes seriales.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "Es como poner una cañería más delgada para el agua, y frena la corriente de la electricidad, sin importar lo que el sistema pida, de tal manera que las luces no quemen por voltaje extra."
    },
    {
        "id": 45,
        "categoria": "Componentes Básicos",
        "tipo": "Componentes Pasivos",
        "nombre": "Capacitor",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Capacitors_%287189597135%29.jpg",
        "descripcion": "Los capacitores (o de tipo condensadores electrolíticos o dieléctricas placas cerámicos aislados conformes Mylar) retienen momentáneamente energía potencial E en forma capacitiva con gradiente campos Eléctricos polarizados, acopladores en filtros frecuenciales bypass para AC oscilantes suprimiendo ruido.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "Pequeñas despensas de energía. Absorben corriente rápido y se llenan en instantes como un tanque minímo de energía, devolviéndola en el circuito velozmente cuanta algo falla por 1 milisegundo en la bateria para dar mayor estabilidad."
    },
    {
        "id": 46,
        "categoria": "Componentes Básicos",
        "tipo": "Componentes Pasivos",
        "nombre": "Inductor",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Electronic_component_inductors.jpg",
        "descripcion": "Bobinado reactivo pasivo enrollado de cobre puro aislado en el núcleo ferrosos (Choke). Resistente inercial magnética reactivo que detiene transitoriamente rápidos incrementantes variaciones di/dt en la línea por inducción magnética oponiéndose por Ley fundamental de Lenz, base de todos los generadores y conmutaciones.",
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional.",
        "descripcion2": "Enrollado de cable para que haga magia. En contraste con los capacitores, retienen momentáneamente el poder pero frenan corrientes para que motores y filtros suban de poco a poco y sin chispazos de daño."
    }
];