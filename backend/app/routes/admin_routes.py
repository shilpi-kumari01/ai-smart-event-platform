from flask import Blueprint
from app.services.vendor_service import verify_vendor
from app.middleware.auth_middleware import require_auth
from app.middleware.role_check import admin_required
from app.utils.response_handler import success_response
from flask import g

admin_bp = Blueprint("admin", __name__, url_prefix="/api/admin")


@admin_bp.route("/verify-vendor/<int:vendor_id>", methods=["PUT"])
@require_auth
@admin_required
def approve_vendor(vendor_id):
    # g.user_id and g.role are set by the auth middleware
    verify_vendor(vendor_id)
    return success_response(None, "Vendor verified successfully")
