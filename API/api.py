from flask import Flask
from flask import request, jsonify
import json
import mysql.connector



#Read secret.json file
with open('secret.json', 'r') as myfile:
    data=myfile.read()
secret=json.loads(data)


#MySql Connector
mydb = mysql.connector.connect(
  host=secret["host"],
  user=secret["username"],
  password=secret["password"],
  database=secret["database"]
)








# Flask API
app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/GetUser',methods=['GET'])
def getuser():
    query_parameters=request.args
    input_mail=query_parameters.get("mail")

    mycursor = mydb.cursor()
    mycursor.execute("SELECT *  FROM User where U_mail='{}'".format(input_mail))
    myresult = mycursor.fetchone()

    return(jsonify(myresult))
    


if __name__ == '__main__':
    app.run(debug=True)