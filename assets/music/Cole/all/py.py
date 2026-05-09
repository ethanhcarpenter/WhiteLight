import os

def quick_rename_ext():
    # Get the folder where the script is sitting
    current_dir = os.getcwd()
    
    files_renamed = 0
    
    # Check every file in the folder
    for filename in os.listdir(current_dir):
        # Only target the .mp4 files
        if filename.lower().endswith(".mp4"):
            base = os.path.splitext(filename)[0]
            new_name = base + ".mp3"
            
            # Perform the rename
            try:
                os.rename(filename, new_name)
                print(f"Renamed: {filename} -> {new_name}")
                files_renamed += 1
            except Exception as e:
                print(f"Skipped {filename}: {e}")

    print(f"\nDone! Renamed {files_renamed} files.")

if __name__ == "__main__":
    quick_rename_ext()