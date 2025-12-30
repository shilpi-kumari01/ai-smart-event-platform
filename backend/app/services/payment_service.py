from app.models.payment import Payment
from app.models.booking import Booking
from app.config.database import db

def process_payment(user, data):
    payment = Payment(
        booking_id=data.get("booking_id"),
        amount=data.get("amount"),
        method=data.get("method"),
        status="success"
    )
    booking = Booking.query.get(data.get("booking_id"))
    booking.status = "confirmed"

    db.session.add(payment)
    db.session.commit()
    return {
        "payment_id": payment.id,
        "status": "Payment Successful"
    }
