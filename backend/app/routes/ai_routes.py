from flask import Blueprint, request
from app.services.ai_service import (
    generate_event_description,
    estimate_budget,
    recommend_vendors
)
from app.utils.response_handler import success_response

ai_bp = Blueprint("ai", __name__, url_prefix="/api/ai")

@ai_bp.route("/description", methods=["POST"])
def ai_description():
    return success_response(
        generate_event_description(request.json)
    )

@ai_bp.route("/budget", methods=["POST"])
def ai_budget():
    return success_response(
        estimate_budget(request.json)
    )

@ai_bp.route("/recommend-vendors", methods=["POST"])
def ai_recommend():
    return success_response(
        recommend_vendors(request.json)
    )
