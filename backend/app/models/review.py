from datetime import datetime
from app.config.database import db

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)

    rating = db.Column(db.Integer, nullable=False)  # 1–5
    comment = db.Column(db.Text)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    vendor_id = db.Column(db.Integer, db.ForeignKey("vendors.id"), nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
