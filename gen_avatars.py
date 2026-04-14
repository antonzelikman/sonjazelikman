import asyncio
import os
import base64
from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration

API_KEY = "sk-emergent-e4346330c9dD541C2B"
OUT_DIR = "/app/frontend/public/avatars"

# Now we have detailed Sonja reference:
# - Light-medium brown wavy hair (shoulder length, lighter when young)
# - Fair skin with warm undertone
# - Round soft face, full cheeks
# - Full lips, gap between front teeth when smiling big
# - Natural arched eyebrows, warm expressive eyes
# - Slim build, age-appropriate
# From Barcelona beach photo: she looks free, joyful, outdoorsy
# From London Eye photo: she looks polished, confident, around 13-14

SONJA = (
    "Editorial portrait of a real teenage girl named Sonja: "
    "she has light-medium brown wavy shoulder-length hair, "
    "fair skin with warm undertone, round soft face with full cheeks, "
    "full lips with natural gap between front teeth visible in gentle smile, "
    "natural arched eyebrows, warm expressive eyes. "
    "60% realistic true photographic likeness — 40% neon stylized editorial. "
    "She MUST remain recognizable as herself. NOT a generic AI face. "
    "Premium fashion editorial style, soft confident expression. "
    "Dark neon luxury atmosphere, background deep #080810. "
    "Pink, cyan and violet neon light reflections softly on her skin. "
    "Subtle sparkle light particles floating around her. "
    "Multiple soft glow rim lights creating halo effect. "
    "Cinematic key light on face for clarity and depth. "
    "NOT cartoon, NOT fantasy, NOT anime, NOT over-makeup. "
    "Portrait orientation, face and upper body composition."
)

CITIES = [
    {
        "slug": "paris_v2",
        "prompt": (
            f"{SONJA} "
            "Setting: Age 13, Paris at night. "
            "The Eiffel Tower is softly glowing in blurred golden rose light far behind her, "
            "Parisian cobblestone street atmosphere. "
            "She is wearing a chic dark outfit. "
            "Elegant, slightly mysterious Parisian night mood. "
            "Pink neon warm glow dominates her face from left."
        ),
    },
    {
        "slug": "istanbul_v2",
        "prompt": (
            f"{SONJA} "
            "Setting: Age 14, Istanbul at golden dusk. "
            "Mosque silhouettes and minarets blurred in distance behind her, "
            "warm Bosphorus water glow on horizon. "
            "Deep rich warm color palette transitioning to night — gold, deep teal, rust. "
            "Cyan and gold neon reflections on her face from street lights. "
            "Mysterious, introspective, beautiful."
        ),
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
            print(f"  Saved: {path} ({len(images[0])//1024}KB)")
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
    for city in CITIES:
        slug, ok = await generate_one(gen, city)
        results.append((slug, ok))
        await asyncio.sleep(3)
    print("\n=== RESULTS ===")
    for slug, ok in results:
        print(f"  {slug}: {'OK' if ok else 'FAILED'}")

if __name__ == "__main__":
    asyncio.run(main())
