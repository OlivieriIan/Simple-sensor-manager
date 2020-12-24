from flask import (Flask, jsonify)
import logging # Disable GET/POST messages in console
import os, sys
import random

app = Flask(__name__)

argv_num = int(sys.argv[1])
if argv_num < 1:
  argv_num = 1
sensor_name = "sensor_{:03d}".format(argv_num)
server_port = 5000 + argv_num

@app.route('/', methods=["GET"])
@app.route('/data', methods=["GET"])
def sensor_data():
  
  sensor = {
    "name":sensor_name,
    "data": {
        "arg01": random.randint(00,10),
        "arg05": random.randint(10,20),
        "arg06": random.randint(20,30),
        "arg17": random.randint(30,40),
        "arg31": random.randint(40,50)
        
      }
  }  
  return jsonify(sensor)

if __name__ == "__main__":
  # Disable .. "GET /status HTTP/1.1" 200 ... logs
  print("Launching Flask Server")
  log = logging.getLogger("werkzeug")
  log.disabled = True
  app.secret_key = os.urandom(12)
  app.run(debug=True, host="localhost", port=server_port, threaded=False, processes=1)