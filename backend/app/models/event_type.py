from app.config.database import db

class EventType(db.Model):
    __tablename__ = "event_types"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

    services = db.relationship("Service", backref="event_type", lazy=True)
