from flask import Flask, render_template, request, redirect, Response, make_response, jsonify

import json
app = Flask(__name__)
x = 0
y = 0
@app.route('/test', methods = ['POST'])
def index(): 
    data = json.loads(request.get_data().decode("utf8"))
    print("Data ", data)
    return "Your test, ser"
@app.route('/<path:the_path>')
def all_other_routes(the_path):
    return app.send_static_file(the_path)
if __name__ == '__main__':
    app.run(debug=True)
