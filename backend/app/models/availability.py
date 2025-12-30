from app.config.database import db

class Availability(db.Model):
    __tablename__ = "availability"

    id = db.Column(db.Integer, primary_key=True)

    vendor_id = db.Column(db.Integer, db.ForeignKey("vendors.id"), nullable=False)

    date = db.Column(db.Date, nullable=False)
    is_available = db.Column(db.Boolean, default=True)
