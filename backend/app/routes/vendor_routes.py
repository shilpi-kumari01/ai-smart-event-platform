from flask import Blueprint, request
from app.services.vendor_service import (
    create_vendor_profile,
    get_all_vendors,
    get_vendor_details,
)
from app.middleware.auth_middleware import require_auth
from app.utils.response_handler import success_response, error_response

vendor_bp = Blueprint("vendors", __name__, url_prefix="/api/vendors")


@vendor_bp.route("/", methods=["GET"])
def vendors():
    return success(get_all_vendors())


@vendor_bp.route("/<int:vendor_id>", methods=["GET"])
def vendor_detail(vendor_id):
    details = get_vendor_details(vendor_id)
    if not details:
        return error_response("Vendor not found", 404)
    return success_response(details)


@vendor_bp.route("/create", methods=["POST"])
@require_auth
def create_vendor():
    # `require_auth` sets `request.user` to the decoded JWT payload or user object
    current_user = getattr(request, "user", None)

    # Normalize current_user to an object with `id` attribute expected by service
    user_id = None
    if isinstance(current_user, dict):
        user_id = current_user.get("id")
    else:
        user_id = getattr(current_user, "id", None)

    class SimpleUser:
        def __init__(self, uid):
            self.id = uid

    user_obj = SimpleUser(user_id)

    result = create_vendor_profile(user_obj, request.json)
    return success_response(result, "Vendor profile created")
