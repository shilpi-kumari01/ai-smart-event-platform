from app.config.database import db

class Service(db.Model):
    __tablename__ = "services"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text)

    price = db.Column(db.Float, nullable=False)

    vendor_id = db.Column(db.Integer, db.ForeignKey("vendors.id"), nullable=False)
    event_type_id = db.Column(db.Integer, db.ForeignKey("event_types.id"))

    is_active = db.Column(db.Boolean, default=True)

    bookings = db.relationship("Booking", backref="service", lazy=True)
