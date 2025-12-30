from functools import wraps
from flask import jsonify, g

def role_required(allowed_roles):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            if g.role not in allowed_roles:
                return jsonify({
                    "message": "Access denied for this role"
                }), 403
            return f(*args, **kwargs)
        return wrapper
    return decorator

# common role helpers
admin_required = role_required(['admin'])
vendor_required = role_required(['vendor'])
