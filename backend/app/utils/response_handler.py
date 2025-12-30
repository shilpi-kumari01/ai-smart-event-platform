from flask import jsonify

def success_response(data=None, message="Success", status=200):
    response = {
        "success": True,
        "message": message,
        "data": data
    }
    return jsonify(response), status

def error_response(message="Error", status=400):
    response = {
        "success": False,
        "message": message
    }
    return jsonify(response), status
