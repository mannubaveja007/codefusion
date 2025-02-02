# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for npm dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on (default port 3000)
EXPOSE 5001

# Command to run your app
CMD ["node", "server.js"]  # Or replace with the entry point of your app (e.g., app.js)
