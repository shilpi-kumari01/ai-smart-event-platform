import os
from datetime import timedelta

class BaseConfig:
    """Common configuration"""
    SECRET_KEY = os.getenv("SECRET_KEY", "super-secret-key-change-this")

    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-secret-key-change-this")
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=1)

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Uploads (vendor images, event images etc.)
    UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER", "uploads/")
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16 MB


class DevelopmentConfig(BaseConfig):
    DEBUG = True

    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "sqlite:///eventify_dev.db"
    )


class ProductionConfig(BaseConfig):
    DEBUG = False

    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://user:password@localhost:5432/eventify"
    )


class TestingConfig(BaseConfig):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///test.db"


# Config mapping
config = {
    "development": DevelopmentConfig,
    "production": ProductionConfig,
    "testing": TestingConfig
}
