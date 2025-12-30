from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from app.config.database import db
from app.config.config import config

jwt = JWTManager()

def create_app(env="development"):
    app = Flask(__name__)

    # Load config
    app.config.from_object(config[env])

    # Init extensions
    db.init_app(app)
    jwt.init_app(app)
    CORS(app)

    # Register routes
    from app.routes.auth_routes import auth_bp
    from app.routes.vendor_routes import vendor_bp
    from app.routes.event_routes import event_bp
    from app.routes.booking_routes import booking_bp
    from app.routes.payment_routes import payment_bp
    from app.routes.admin_routes import admin_bp
    from app.routes.ai_routes import ai_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(vendor_bp, url_prefix="/api/vendors")
    app.register_blueprint(event_bp, url_prefix="/api/events")
    app.register_blueprint(booking_bp, url_prefix="/api/bookings")
    app.register_blueprint(payment_bp, url_prefix="/api/payments")
    app.register_blueprint(admin_bp, url_prefix="/api/admin")
    app.register_blueprint(ai_bp, url_prefix="/api/ai")

    @app.route("/")
    def health_check():
        return {"status": "Backend running successfully 🚀"}

    return app
