from flask import Flask
from flask import request, jsonify,Response
import json
import mysql.connector
import bcrypt




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

@app.route('/UpdateUser',methods=['POST'])
def updateuser():
    if(request.method=='POST' and request.is_json):
        is_present_in_db=False
        data=request.get_json()
        email=data["email"]
        user_id=0 
        
        if(email!=""):
            mycursor = mydb.cursor()
            mycursor.execute("SELECT * FROM User where U_mail='{}'".format(email))
            myresult = mycursor.fetchone()
            if(myresult!=None):
                user_id=list(myresult)[0]
                is_present_in_db=True
        
        if(is_present_in_db):
            salt = bcrypt.gensalt()
            hashed = bcrypt.hashpw(str.encode(data["password"]), salt)
            mycursor = mydb.cursor()
            mycursor.execute("UPDATE `AST`.`User` SET `U_password` = '{}' WHERE `U_id` = {};".format(hashed.decode(),user_id))
            mydb.commit()
            response=Response("{'Status':'200','Description':'User updated.'}", status=200, mimetype='application/json')


        else:
            response=Response("{'Status':'403','Description:'User not found.'}", status=403, mimetype='application/json')
    return response

@app.route('/AuthenticateUser',methods=['POST'])
def authenticateuser():
    if(request.method=='POST' and request.is_json):
        data=request.get_json()
        is_authenticated=False
        user_id=0
        email=data["email"]
        password=data["password"]
        
        if(email!=""):
            mycursor = mydb.cursor()
            mycursor.execute("SELECT * FROM User where U_mail='{}'".format(email))
            myresult = mycursor.fetchone()
            if(myresult!=None):
                user_id=list(myresult)[0]
                sql_hash=list(myresult)[3]
                if(bcrypt.checkpw(str.encode(password), str.encode(sql_hash))):
                    is_authenticated=True
        
        response_string="{'Status':'200','Description':'User updated.','is_authenticated':'"+str(is_authenticated).lower()+"'}"
        response=Response(response_string, status=200, mimetype='application/json')
    
    
    return response

@app.route('/ResetAllPassword',methods=['GET'])
def resetallpassword():
    mycursor=mydb.cursor()
    mycursor.execute("SELECT * FROM User ;")
    myresult=mycursor.fetchall()

    for person in myresult:
        thisperson=list(person)
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(str.encode(thisperson[1]+"2021"), salt)
        mycursor = mydb.cursor()
        mycursor.execute("UPDATE `AST`.`User` SET `U_password` = '{}' WHERE `U_id` = {};".format(hashed.decode(),thisperson[0]))
        mydb.commit()
    
    response=Response("{'Status':'200','Description':'All Users Passwords Reinitialised'}", status=200, mimetype='application/json')

    
    return response



@app.route('/CreateUser',methods=['POST'])
def createuser():
    
    
    if(request.method=='POST' and request.is_json):
        is_present_in_db=False
        data=request.get_json()
        email=data["email"]
    

        if(email!=""):
            mycursor = mydb.cursor()
            mycursor.execute("SELECT *  FROM User where U_mail='{}'".format(email))
            myresult = mycursor.fetchone()
            if(myresult!=None):
                print("myresult",list(myresult))

                is_present_in_db=True
        
        if(not is_present_in_db):
            salt = bcrypt.gensalt()
            hashed = bcrypt.hashpw(data["password"], salt)


            response=Response("{'a':'positive'}", status=200, mimetype='application/json')
        else:
            response=Response("{'a':'negative'}", status=403, mimetype='application/json')
        
    return(response)
  


if __name__ == '__main__':
    app.run(debug=True)