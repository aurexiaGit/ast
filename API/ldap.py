import json
from ldap3 import Connection,Server

server=Server("192.168.197.211")
con=Connection(server,"aurexia\\smohamed","Aurexi@SMO_2019",auto_bind=True)
con.search('OU=Utilisateurs,OU=AUREXIA,DC=aurexia,DC=local','(objectclass=person)',attributes=['mail', 'sn', 'givenName'])
data = [ x.entry_to_json() for x in con.entries]

with open('data.json','w') as file:
    json.dump(data, file)