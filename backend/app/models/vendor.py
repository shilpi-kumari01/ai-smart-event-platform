from datetime import datetime
from app.config.database import db

class Vendor(db.Model):
    __tablename__ = "vendors"

    id = db.Column(db.Integer, primary_key=True)
    business_name = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    rating = db.Column(db.Float, default=0.0)
    is_verified = db.Column(db.Boolean, default=False)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    services = db.relationship("Service", backref="vendor", lazy=True)
    availability = db.relationship("Availability", backref="vendor", lazy=True)
    reviews = db.relationship("Review", backref="vendor", lazy=True)
