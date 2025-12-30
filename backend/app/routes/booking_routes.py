from flask import Blueprint, request
from app.services.booking_service import (
    create_booking,
    get_user_bookings
)
from app.middleware.auth_middleware import token_required
from app.utils.response_handler import success_response

booking_bp = Blueprint("booking", __name__, url_prefix="/api/bookings")

@booking_bp.route("/", methods=["POST"])
@token_required
def book_service(current_user):
    return success_response(
        create_booking(current_user, request.json),
        "Booking created"
    )

@booking_bp.route("/my", methods=["GET"])
@token_required
def my_bookings(current_user):
    return success_response(get_user_bookings(current_user.id))
