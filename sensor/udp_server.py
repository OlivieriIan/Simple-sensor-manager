import socket
import time

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1) # Enable broadcasting
s.settimeout(3)
message = b"RQ"
while True:
    s.sendto(message, ('<broadcast>', 5010))
    data, addr = s.recvfrom(1024)
    print("Received reply {} from {}".format(data,addr))
    time.sleep(2)
