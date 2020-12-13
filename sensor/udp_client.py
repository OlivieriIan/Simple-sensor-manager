import socket
import time

device_name = "device_nnn"

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)

s.bind(("", 5010))
while True:
    data, addr = s.recvfrom(1024)
    if data == b"RQ":
      print("Received message {} from {}".format(data,addr))
      s.sendto("RQ{}".format(device_name).encode(), addr)