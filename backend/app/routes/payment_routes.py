from flask import Blueprint, request
from app.services.payment_service import process_payment
from app.middleware.auth_middleware import token_required
from app.utils.response_handler import success_response

payment_bp = Blueprint("payment", __name__, url_prefix="/api/payments")

@payment_bp.route("/pay", methods=["POST"])
@token_required
def pay(current_user):
    return success_response(
        process_payment(current_user, request.json),
        "Payment processed"
    )
