from datetime import datetime
from app.config.database import db

class Booking(db.Model):
    __tablename__ = "bookings"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey("services.id"), nullable=False)

    event_date = db.Column(db.Date, nullable=False)

    status = db.Column(
        db.String(30),
        default="pending"
    )  # pending / confirmed / cancelled / completed

    total_amount = db.Column(db.Float, nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    payment = db.relationship("Payment", backref="booking", uselist=False)
