set /P sensor_no=Enter sensor number: 
echo initializing sensor for id %sensor_no%
d:/zzzProgramming/WebDevelopment/Flask/venv/Scripts/python.exe d:/zzzProgramming/WebDevelopment/Flask/sensor/sensor_web.py %sensor_no%