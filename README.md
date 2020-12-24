# Simple-sensor-manager
Flask + React web app that detects virtual sensors connected to the network and polls their statuses

## Prerequisites
### Software
[Python3](https://www.python.org/downloads/)
### Libraries
The project uses a virtual environment (venv), so every time any python script is called the venv will be activated and run.

If you want to delete the venv and install the modules by yourself, here's what you can do:

Python libraries can be installed via console/terminal with 'pip install <package_name>' on Windows and with 'pip3 install <package_name>' on Linux.

pip install flask
pip install requests

(some of them might be missing)

## Usage
1) Launch /app/app.py  This will initialise the web server.
2) Then run the desired sensors with /sensor/sensor_web.bat (for Windows)    You'll be prompted to enter the sensor number, which can be 1, 2, 3, etc.
3) Finally, go to localhost:5000/ and you should see the home page, with the loaded sensors updating every 500ms

## Modification
This project was made using 

If you want to modify the React components, be sure to run /app/static/js/watch_jsx.bat in the console (for Windows). This will automatically transpile any modified files inside the /app/static/js/jsx folder with [Babel](https://babeljs.io/)

On the other hand, the scss files automatic compilation is done through a Visual Studio plugin called [Live Sass Compiler](https://github.com/ritwickdey/vscode-live-sass-compiler)

All other files can me modified without any need of an addiotional method.

### Running the app without the need for sensors
The server has an additional endpoint (/data/fast) that replies with randomly generated data.

In order to use it, modify the url fetch attribute inside the update method in the file /app/static/js/jsx/sensor.jsx . Changing it from fetch("http://localhost:5000/data") to fetch("http://localhost:5000/data/fast") will do the trick.

After the change, you should see 4 sensors updating on the front end.