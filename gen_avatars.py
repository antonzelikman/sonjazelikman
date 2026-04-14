import asyncio
import os
from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration

API_KEY = "sk-emergent-e4346330c9dD541C2B"
OUT_DIR = "/app/frontend/public/avatars"

SONJA_BASE = (
    "A recognizable teenage girl named Sonja: light-medium brown wavy shoulder-length hair, "
    "fair skin with warm undertone, round soft face with full cheeks, full lips, "
    "natural arched eyebrows, soft but confident expression. "
    "60% realistic 40% stylized editorial portrait. "
    "Dark luxury neon atmosphere, deep dark background (#080810). "
    "Soft pink, cyan, and violet neon light reflections on her face. "
    "Sparkle light particles floating in the air. "
    "Cinematic editorial fashion photography lighting. "
    "Premium editorial quality. "
    "NOT cartoon. NOT generic AI face. She must look like a real teenage girl."
)

CITIES = [
    {
        "slug": "paris",
        "prompt": f"{SONJA_BASE} "
            "Age 13, chic dark outfit. Standing near the Eiffel Tower at night, "
            "tower glowing softly in golden rose light behind her, "
            "Parisian night street atmosphere. "
            "Elegant, quiet, luminous. Pink neon reflections dominate.",
    },
    {
        "slug": "barcelona",
        "prompt": f"{SONJA_BASE} "
            "Age 13, colorful playful energy. Sagrada Familia architecture visible in warm blurred background. "
            "Barcelona warmth — orange and pink golden light, free and joyful expression. "
            "Warm orange and pink neon glows.",
    },
    {
        "slug": "london",
        "prompt": f"{SONJA_BASE} "
            "Age 14, composed and sharp expression. London rainy night, "
            "wet cobblestone street reflections, Big Ben silhouette faintly visible in background. "
            "Cool blue and violet neon tones dominate. "
            "Rain droplets visible in air. Dark cinematic.",
    },
    {
        "slug": "istanbul",
        "prompt": f"{SONJA_BASE} "
            "Age 14, mysterious depth in expression. Istanbul at golden hour into dusk, "
            "mosque silhouettes and minarets in the dark blurred background, Bosphorus water glow. "
            "Cyan and gold neon reflections. Rich deep colors.",
    },
    {
        "slug": "newyork",
        "prompt": f"{SONJA_BASE} "
            "Age 15, big city confidence expression. New York City skyline and Times Square neon signs "
            "blurred in background behind her. "
            "Blue, pink, and white neon reflections all over. "
            "Electric metropolitan energy.",
    },
    {
        "slug": "telaviv",
        "prompt": f"{SONJA_BASE} "
            "Age across childhood to 16, warm and familiar expression, belonging and warmth. "
            "Tel Aviv beach city — warm golden Mediterranean light, city lights and shoreline in background. "
            "Gold and cyan neon glow, warmth and light.",
    },
]

async def generate_one(gen, city):
    print(f"Generating {city['slug']}...")
    try:
        images = await gen.generate_images(
            prompt=city["prompt"],
            model="gpt-image-1",
            number_of_images=1,
        )
        if images:
            path = os.path.join(OUT_DIR, f"{city['slug']}.png")
            with open(path, "wb") as f:
                f.write(images[0])
            print(f"  Saved: {path}")
            return city['slug'], True
        else:
            print(f"  No image returned for {city['slug']}")
            return city['slug'], False
    except Exception as e:
        print(f"  ERROR for {city['slug']}: {e}")
        return city['slug'], False

async def main():
    gen = OpenAIImageGeneration(api_key=API_KEY)
    results = []
    # Generate sequentially to avoid rate limits
    for city in CITIES:
        slug, ok = await generate_one(gen, city)
        results.append((slug, ok))
        await asyncio.sleep(2)
    
    print("\n=== RESULTS ===")
    for slug, ok in results:
        status = "OK" if ok else "FAILED"
        print(f"  {slug}: {status}")

if __name__ == "__main__":
    asyncio.run(main())
