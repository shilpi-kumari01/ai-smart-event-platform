from flask import Blueprint, request
from app.services.auth_service import (
    register_user,
    login_user
)
from app.utils.response_handler import success_response, error_response

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    result = register_user(data)
    return success_response(result, "User registered successfully")

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    result = login_user(data)
    return success_response(result, "Login successful")
