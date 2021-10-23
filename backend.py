from flask import Flask, json, request,jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__) #creating the Flask class object 
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'  
s1 = 0
s2 = 0
s3 = 0
s4 = 0
s5 = 0
s6 = 0

@cross_origin
@app.route('/trigger',methods=['POST']) #decorator drfines the   
def trigger():  
    global s1
    global s2
    global s3
    global s4
    global s5
    global s6
    data = request.json
    sid = data["sid"]
    if sid == 1:
        s1 = 1
    elif sid == 2:
        s2 = 1
    elif sid == 3:
        s3 = 1
    elif sid == 4:
        s4 = 1
    elif sid == 5:
        s5 = 1
    elif sid == 6:
        s6 = 1
    return jsonify({"added":"True"})

@cross_origin
@app.route('/gettrigger',methods=['GET']) #decorator drfines the   
def gettrigger():  
    global s1
    global s2
    global s3
    global s4
    global s5
    global s6
    return jsonify({"s1":s1,"s2":s2,"s3":s3,"s4":s4,"s5":s5,"s6":s6})

@cross_origin
@app.route('/clear',methods=['GET']) #decorator drfines the   
def clear():  
    global s1
    global s2
    global s3
    global s4
    global s5
    global s6
    s1 = 0
    s2 = 0
    s3 = 0
    s4 = 0
    s5 = 0
    s6 = 0
    return jsonify({"s1":s1,"s2":s2,"s3":s3,"s4":s4,"s5":s5,"s6":s6})

if __name__ == "__main__":
    app.run(host="0.0.0.0")