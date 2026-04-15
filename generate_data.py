import json
import urllib.request
import urllib.parse
import time

components = [
    # 1. Sensores - de temperatura
    {"cat": "Sensores", "type": "Sensores de temperatura", "name": "Termopar", "query": "Thermocouple"},
    {"cat": "Sensores", "type": "Sensores de temperatura", "name": "RTD (PT100, PT1000)", "query": "Resistance temperature detector"},
    {"cat": "Sensores", "type": "Sensores de temperatura", "name": "Termistor (NTC, PTC)", "query": "Thermistor"},
    {"cat": "Sensores", "type": "Sensores de temperatura", "name": "Sensor digital (DS18B20)", "query": "1-Wire"},
    # 1. Sensores - de humedad
    {"cat": "Sensores", "type": "Sensores de humedad", "name": "Capacitivo / Resistivo", "query": "Hygrometer"},
    {"cat": "Sensores", "type": "Sensores de humedad", "name": "Módulo DHT11/DHT22", "query": "DHT11"},
    # 1. Sensores - de presión
    {"cat": "Sensores", "type": "Sensores de presión", "name": "Piezorresistivos / Capacitivos", "query": "Pressure sensor"},
    # 1. Sensores - de proximidad
    {"cat": "Sensores", "type": "Sensores de proximidad", "name": "Inductivo / Capacitivo", "query": "Proximity sensor"},
    {"cat": "Sensores", "type": "Sensores de proximidad", "name": "Ultrasónico (HC-SR04)", "query": "Ultrasonic transducer"},
    {"cat": "Sensores", "type": "Sensores de proximidad", "name": "Infrarrojo (PIR)", "query": "Passive infrared sensor"},
    # 1. Sensores - ópticos
    {"cat": "Sensores", "type": "Sensores ópticos", "name": "Fotorresistencia (LDR)", "query": "Photoresistor"},
    {"cat": "Sensores", "type": "Sensores ópticos", "name": "Fotodiodo / Fototransistor", "query": "Photodiode"},
    {"cat": "Sensores", "type": "Sensores ópticos", "name": "Sensor de color", "query": "Colorimeter"},
    # Encoders
    {"cat": "Sensores", "type": "Encoders", "name": "Encoder Incremental / Absoluto", "query": "Rotary encoder"},
    
    # 2. Actuadores
    {"cat": "Actuadores", "type": "Motores DC", "name": "Motor con escobillas", "query": "Brushed DC electric motor"},
    {"cat": "Actuadores", "type": "Motores DC", "name": "Motor sin escobillas (BLDC)", "query": "Brushless DC electric motor"},
    {"cat": "Actuadores", "type": "Motores DC", "name": "Servomotor", "query": "Servomotor"},
    {"cat": "Actuadores", "type": "Motores DC", "name": "Motor paso a paso", "query": "Stepper motor"},
    {"cat": "Actuadores", "type": "Solenoides", "name": "Solenoide Lineal/Rotatorio", "query": "Solenoid"},
    {"cat": "Actuadores", "type": "Relés", "name": "Relé Electromecánico", "query": "Relay"},
    {"cat": "Actuadores", "type": "Relés", "name": "Relé de estado sólido (SSR)", "query": "Solid-state relay"},
    {"cat": "Actuadores", "type": "Válvulas", "name": "Electroválvula (Solenoide)", "query": "Solenoid valve"},
    {"cat": "Actuadores", "type": "Piezoeléctricos", "name": "Actuador Piezoeléctrico", "query": "Piezoelectric motor"},

    # 3. Controladores y Procesadores
    {"cat": "Controladores", "type": "Microcontroladores", "name": "Arduino (ATmega328P)", "query": "Arduino Uno"},
    {"cat": "Controladores", "type": "Microcontroladores", "name": "ESP32 / ESP8266", "query": "ESP32"},
    {"cat": "Controladores", "type": "Microcontroladores", "name": "STM32", "query": "STM32"},
    {"cat": "Controladores", "type": "PLCs", "name": "PLC Compacto / Modular", "query": "Programmable logic controller"},
    {"cat": "Controladores", "type": "Sistemas Embebidos", "name": "Raspberry Pi", "query": "Raspberry Pi"},
    {"cat": "Controladores", "type": "Sistemas Embebidos", "name": "Jetson Nano / BeagleBone", "query": "Nvidia Jetson"},
    {"cat": "Controladores", "type": "Controladores de Motor", "name": "Drivers DC / Paso a paso", "query": "Motor controller"},
    
    # 4. Comunicación
    {"cat": "Comunicación", "type": "Módulos Inalámbricos", "name": "Módulo WiFi / Bluetooth", "query": "Bluetooth"},
    {"cat": "Comunicación", "type": "Módulos Inalámbricos", "name": "LoRa / LoRaWAN", "query": "LoRa"},
    {"cat": "Comunicación", "type": "Módulos Inalámbricos", "name": "Zigbee", "query": "Zigbee"},
    {"cat": "Comunicación", "type": "Transceptores", "name": "RS-232 / RS-485", "query": "RS-485"},
    {"cat": "Comunicación", "type": "Transceptores", "name": "CAN Bus / Ethernet", "query": "CAN bus"},
    {"cat": "Comunicación", "type": "RFID/NFC", "name": "Rector RFID / NFC", "query": "Radio-frequency identification"},
    {"cat": "Comunicación", "type": "GSM/GPRS/LTE", "name": "Módulo SIM800L / SIM900", "query": "GSM"},
    
    # 5. Componentes Electrónicos Básicos
    {"cat": "Componentes Básicos", "type": "Transistores", "name": "BJT (NPN, PNP)", "query": "Bipolar junction transistor"},
    {"cat": "Componentes Básicos", "type": "Transistores", "name": "MOSFET / IGBT", "query": "MOSFET"},
    {"cat": "Componentes Básicos", "type": "Circuitos Integrados", "name": "Amplificador Operacional", "query": "Operational amplifier"},
    {"cat": "Componentes Básicos", "type": "Circuitos Integrados", "name": "Regulador de voltaje", "query": "Voltage regulator"},
    {"cat": "Componentes Básicos", "type": "Circuitos Integrados", "name": "Temporizador 555", "query": "555 timer IC"},
    {"cat": "Componentes Básicos", "type": "Optoelectrónica", "name": "LEDs / Displays", "query": "Light-emitting diode"},
    {"cat": "Componentes Básicos", "type": "Optoelectrónica", "name": "Optoacoplador", "query": "Opto-isolator"},
    {"cat": "Componentes Básicos", "type": "Componentes Pasivos", "name": "Resistencia", "query": "Resistor"},
    {"cat": "Componentes Básicos", "type": "Componentes Pasivos", "name": "Capacitor", "query": "Capacitor"},
    {"cat": "Componentes Básicos", "type": "Componentes Pasivos", "name": "Inductor", "query": "Inductor"}
]

def get_wikimedia_image_and_desc(query):
    try:
        url = f"https://en.wikipedia.org/w/api.php?action=query&prop=pageimages|extracts&format=json&piprop=original&titles={urllib.parse.quote(query)}&exsentences=2&exlimit=1&explaintext=1"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            val = list(pages.values())[0]
            img = val.get('original', {}).get('source', '')
            desc = val.get('extract', 'Descripción técnica no disponible para este componente.')
            
            # If still no image, try fetching fallback
            if not img:
                 img = "https://placehold.co/400x300/e2e8f0/64748b?text=" + urllib.parse.quote(query)
            return img, desc
    except Exception as e:
        print("Error fetching:", query, e)
        return "https://placehold.co/400x300/e2e8f0/64748b?text=Image+Not+Found", "Error retrieving description."

final_data = []

for idx, comp in enumerate(components):
    img, desc = get_wikimedia_image_and_desc(comp["query"])
    comp_data = {
        "id": idx,
        "categoria": comp["cat"],
        "tipo": comp["type"],
        "nombre": comp["name"],
        "imagen": img,
        "descripcion": desc,
        "caracteristicas": "Voltaje de operación y protocolos dependen del fabricante. Componente estándar en robótica industrial y educacional." 
    }
    # Add dummy custom stats based on category
    if comp["cat"] == "Sensores":
         comp_data["caracteristicas"] = "Señal: Analógica/Digital | Voltaje: 3.3V - 5V | Consumo: Bajo (<20mA)."
    elif comp["cat"] == "Actuadores":
         comp_data["caracteristicas"] = "Voltaje: 5V - 24V+ | Consumo: Alto (>500mA) | Señal de control: PWM/Digital."
    elif comp["cat"] == "Controladores":
         comp_data["caracteristicas"] = "Voltaje: 3.3V - 5V | Protocolos: I2C, SPI, UART | Consumo: Medio (50mA - 1A)."
    elif comp["cat"] == "Comunicación":
         comp_data["caracteristicas"] = "Frecuencia: 2.4GHz / dependiente | Protocolos: UART/SPI | Rango: Variable."
         
    final_data.append(comp_data)
    time.sleep(0.1) # small delay

with open("data.js", "w", encoding="utf-8") as f:
    f.write("const componentesData = " + json.dumps(final_data, indent=4, ensure_ascii=False) + ";")
print("Data generated in data.js")
