from app.models.vendor import Vendor
from app.models.service import Service
from app.config.database import db

def create_vendor_profile(user, data):
    vendor = Vendor(
        user_id=user.id,
        business_name=data.get("business_name"),
        location=data.get("location"),
        is_verified=False
    )
    db.session.add(vendor)
    db.session.commit()
    return {"vendor_id": vendor.id}

def get_all_vendors():
    vendors = Vendor.query.filter_by(is_verified=True).all()
    return [
        {
            "id": v.id,
            "name": v.business_name,
            "location": v.location
        }
        for v in vendors
    ]

def get_vendor_details(vendor_id):
    vendor = Vendor.query.get(vendor_id)
    services = Service.query.filter_by(vendor_id=vendor_id).all()
    return {
        "vendor": vendor.business_name,
        "services": [
            {"name": s.name, "price": s.price} for s in services
        ]
    }

def verify_vendor(vendor_id):
    vendor = Vendor.query.get(vendor_id)
    vendor.is_verified = True
    db.session.commit()
