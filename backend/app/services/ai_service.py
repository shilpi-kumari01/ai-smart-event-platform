def generate_event_description(data):
    event = data.get("event_type")
    audience = data.get("audience")

    return {
        "description": f"A professionally managed {event} designed for {audience}. Includes vendors, logistics, and seamless coordination."
    }

def estimate_budget(data):
    guests = int(data.get("guests", 100))
    base_cost = guests * 500
    return {
        "estimated_budget": base_cost
    }

def recommend_vendors(data):
    event = data.get("event_type")
    return {
        "recommended_vendors": [
            f"{event} Catering Services",
            f"{event} Decoration Experts",
            f"{event} Sound & Lighting"
        ]
    }
