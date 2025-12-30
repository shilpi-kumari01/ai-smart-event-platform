from werkzeug.security import generate_password_hash, check_password_hash
from app.models.user import User
from app.config.database import db
from app.utils.jwt_helper import generate_token

def register_user(data):
    user = User(
        name=data.get("name"),
        email=data.get("email"),
        password=generate_password_hash(data.get("password")),
        role=data.get("role", "user")
    )
    db.session.add(user)
    db.session.commit()
    return {"id": user.id, "email": user.email}

def login_user(data):
    user = User.query.filter_by(email=data.get("email")).first()
    if not user or not check_password_hash(user.password, data.get("password")):
        raise ValueError("Invalid credentials")

    token = generate_token(user.id, user.role)
    return {
        "token": token,
        "user": {
            "id": user.id,
            "role": user.role,
            "email": user.email
        }
    }
