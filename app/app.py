from flask import (Flask, render_template, redirect)
import requests
import logging # Disable GET/POST messages in console
import os, sys
import random
import socket

app = Flask(__name__, template_folder="static")

@app.route('/')
def root():
  return redirect("/home", code=302)

@app.route('/home')
@app.route('/configuration')
@app.route('/about')
def index():
  return render_template("./html/home.html")
  
def get_sensor_data(url):
  try:
      response = requests.get(url=url, timeout=0.1)
      response = response.json()
  except:
      response = None

  return response

@app.route('/data')
def data():
  args = dict()
  for i in range(1,10):
    sensor_url = "http://127.0.0.1:5{:03d}/".format(i)
    sensor_data = get_sensor_data(sensor_url)
    if sensor_data is not None:
      sensor_name = sensor_data["name"]
      args[sensor_name] = sensor_data
  
  return args

@app.route('/data/fast')
def data_fast():
  args = dict()
  for i in range(1,5):
      sensor = {
        "name":"sensor_{:03d}".format(i),
        "data": {
            "arg01": random.randint(00,10),
            "arg05": random.randint(10,20),
            "arg06": random.randint(20,30),
            "arg17": random.randint(30,40),
            "arg31": random.randint(40,50)
          }
      }  
      sensor_name = sensor["name"]
      args[sensor_name] = sensor

  return args

@app.errorhandler(404)
def page_not_found(e):
    return redirect("/home", code=302)

def get_ip_address():
  ## getting the hostname by socket.gethostname() method
  hostname = socket.gethostname()
  ## getting the IP address using socket.gethostbyname() method
  ip_address = socket.gethostbyname(hostname)
  ## printing the hostname and ip_address
  print(f"Hostname: {hostname}")
  print(f"IP Address: {ip_address}")

if __name__ == "__main__":
  # Disable .. "GET /status HTTP/1.1" 200 ... logs
  get_ip_address()
  print("Launching Flask Server")
  log = logging.getLogger("werkzeug")
  log.disabled = True
  app.secret_key = os.urandom(12)
  app.run(debug=True, host="localhost", port=5000, threaded=False, processes=1)
  # from livereload import Server
  # server = Server(app.wsgi_app)
  # server.serve(port=5000)

