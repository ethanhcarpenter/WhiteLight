from PIL import Image
import os

# Load the screenshot
img = Image.open("./assets/img/thumbnails/uncut.png")
width, height = img.size

# Define the grid parameters (approximate based on TikTok's layout)
# You may need to tweak these slightly depending on the exact resolution
cols = 4
rows = 5
margin_top = 330    # Space above the first row (header/profile)
margin_left = 240   # Space to the left of the grid (sidebar)
margin_right = 10   # Space on the right edge
margin_bottom = 210  # Space at the bottom

# Calculate the area where the videos live
grid_width = width - margin_left - margin_right
grid_height = height - margin_top - margin_bottom

thumb_w = grid_width // cols
thumb_h = grid_height // rows

# Create output directory
os.makedirs("thumbnails", exist_ok=True)

count = 1
for r in range(rows):
    for c in range(cols):
        # Define the box to crop: (left, top, right, bottom)
        left = margin_left + (c * thumb_w)
        top = margin_top + (r * thumb_h)
        right = left + thumb_w
        bottom = top + thumb_h
        
        # Crop and save
        tile = img.crop((left, top, right, bottom))
        tile.save(f"thumbnails/try_{count}.png")
        
        print(f"Saved thumbnail {count}")
        count += 1

print("Done! Check the 'thumbnails' folder.")