from datetime import datetime
from app.config.database import db

class Payment(db.Model):
    __tablename__ = "payments"

    id = db.Column(db.Integer, primary_key=True)

    booking_id = db.Column(db.Integer, db.ForeignKey("bookings.id"), nullable=False)

    payment_method = db.Column(db.String(50))  # card / upi / wallet
    payment_status = db.Column(
        db.String(30),
        default="pending"
    )  # pending / success / failed

    transaction_id = db.Column(db.String(200))
    amount = db.Column(db.Float, nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
