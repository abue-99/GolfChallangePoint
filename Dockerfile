# Dockerfile content with updated COPY commands

# ... (other Dockerfile content)

# Update lines 36, 39, and 42 to use explicit full paths
COPY /path/to/source1 /path/to/destination1
COPY /path/to/source2 /path/to/destination2
COPY /path/to/source3 /path/to/destination3

# ... (rest of the Dockerfile content)