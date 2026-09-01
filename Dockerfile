# Step 1: Use lightweight Node.js base image
FROM node:20-alpine

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of your application code
COPY . .

# Step 5: Expose port 3000 inside the container
EXPOSE 3000

# Step 6: Command to start the app
CMD ["npm", "start"]