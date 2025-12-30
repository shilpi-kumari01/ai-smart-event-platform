import jwt
from datetime import datetime, timedelta
from flask import current_app

def generate_token(user_id, role):
    payload = {
        "user_id": user_id,
        "role": role,
        "exp": datetime.utcnow() + timedelta(hours=24)
    }
    token = jwt.encode(payload, current_app.config["SECRET_KEY"], algorithm="HS256")
    # PyJWT may return bytes on some versions; ensure a clean str without stray newlines
    if isinstance(token, bytes):
        token = token.decode("utf-8")
    return token.strip()

def decode_token(token):
    try:
        decoded = jwt.decode(
            token,
            current_app.config["SECRET_KEY"],
            algorithms=["HS256"]
        )
        return decoded
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None
