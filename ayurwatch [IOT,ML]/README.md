AyurWatch is a compact, IoT-based wearable designed to monitor essential health vitals and physical activity in real-time. By leveraging the ESP32 and specialized sensors, it bridges the gap between hardware and cloud analytics, logging health data directly to Google Sheets for easy tracking and historical analysis.


🚀 Key Features
Vital Signs Tracking: Real-time monitoring of heart rate and blood oxygen (SpO2).
Activity Monitoring: Integrated step counting using motion-sensing technology.
Cloud Integration: Automated data logging to Google Sheets via Google Cloud Services (API).
Compact Design: Built on the ESP32 platform for a wearable-friendly form factor.
🛠 Tech Stack
Hardware: * ESP32 Dev Kit: The dual-core processor with integrated Wi-Fi and Bluetooth.
MAX30102: High-sensitivity pulse oximeter and heart-rate sensor.
MPU-6050: 6-axis accelerometer and gyroscope for step detection.
Software:
Language: Embedded C++
IDE: Arduino IDE
Cloud: Google Cloud Platform (Google Sheets API / Apps Script).
📐 System Architecture
Data Acquisition: The MPU-6050 detects movement patterns to calculate steps, while the MAX30102 captures PPG signals from the user's skin.
Processing: The ESP32 processes raw sensor data, filtering noise and calculating heart rate and SpO2 levels.
Transmission: Data is transmitted over Wi-Fi using HTTPS requests.
Storage: The Google Sheets API receives the data payload and appends it to a designated spreadsheet for long-term storage.
🔧 Installation & Setup
Hardware Assembly:
Connect the MAX30102 and MPU-6050 to the ESP32 using the I2C protocol (SDA/SCL pins).
Ensure stable power delivery via the 3.3V pin on the ESP32.
Software Configuration:
Install the necessary libraries in Arduino IDE: Wire.h, MAX30105.h, and MPU6050_tockn.h.
Configure your Wi-Fi SSID and Password in the source code.
Cloud Setup:
Create a Google Cloud Project and enable the Google Sheets API.
Deploy a Google Apps Script to handle incoming POST requests from the ESP32 and write them to your sheet.
📋 Future Improvements
ML Integration: Implement on-device Machine Learning (TinyML) to detect irregular heart patterns or specific gait anomalies.
Battery Optimization: Deep-sleep implementation to extend wearable life.
Mobile App: A dedicated dashboard for visualizing the logged data from Google Sheets.
Note: This project is a prototype intended for educational and monitoring purposes. It is not a certified medical device.
