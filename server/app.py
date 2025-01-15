import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_session import Session
from flask_bcrypt import Bcrypt
from config import ApplicationConfig

#configuring app, cors, hashing, and making sure the session doesnt reset between queries
app = Flask(__name__)
app.config.from_object(ApplicationConfig)
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)

CORS(app, supports_credentials=True)
bcrypt = Bcrypt(app)

server_session = Session(app)


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400
    

    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)
    return jsonify({"message": "File uploaded successfully", "filename": file.filename}), 200

if __name__ == '__main__':
    app.run(debug=True)