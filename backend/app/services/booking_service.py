from app.models.booking import Booking
from app.config.database import db

def create_booking(user, data):
    booking = Booking(
        user_id=user.id,
        vendor_id=data.get("vendor_id"),
        service_id=data.get("service_id"),
        event_date=data.get("event_date"),
        status="pending"
    )
    db.session.add(booking)
    db.session.commit()
    return {"booking_id": booking.id}

def get_user_bookings(user_id):
    bookings = Booking.query.filter_by(user_id=user_id).all()
    return [
        {
            "id": b.id,
            "status": b.status,
            "event_date": b.event_date
        }
        for b in bookings
    ]
