# Stage 1: Build the React application
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory and install dependencies
COPY package*.json ./
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:alpine

# Copy the build output to replace the default Nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container has started
CMD ["nginx", "-g", "daemon off;"]