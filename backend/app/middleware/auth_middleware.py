from functools import wraps
from flask import request, jsonify, g
from ..utils.jwt_helper import decode_token

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get("Authorization")

        if not auth_header:
            return jsonify({"message": "Authorization token missing"}), 401

        try:
            token = auth_header.split(" ")[1]  # Bearer <token>
        except IndexError:
            return jsonify({"message": "Invalid token format"}), 401

        decoded = decode_token(token)

        if not decoded:
            return jsonify({"message": "Token expired or invalid"}), 401

        g.user_id = decoded.get("user_id")
        g.role = decoded.get("role")

        return f(*args, **kwargs)

    return decorated

# backward-compatible alias
token_required = require_auth
