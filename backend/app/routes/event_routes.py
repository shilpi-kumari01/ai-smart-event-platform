from flask import Blueprint
from app.models.event_type import EventType
from app.utils.response_handler import success_response

event_bp = Blueprint("events", __name__, url_prefix="/api/events")

@event_bp.route("/", methods=["GET"])
def get_event_types():
    events = EventType.query.all()
    data = [{"id": e.id, "name": e.name} for e in events]
    return success_response(data)
