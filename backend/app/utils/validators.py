import re

def validate_email(email):
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern, email)

def validate_password(password):
    return len(password) >= 6

def validate_required_fields(data, fields):
    missing = [f for f in fields if not data.get(f)]
    return missing
