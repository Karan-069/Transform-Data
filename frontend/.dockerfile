# Step 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory for the build process
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies (only production dependencies)
RUN npm install --production

# Copy the entire project to the container
COPY . .

# Build the React app in production mode
RUN npm run build

# Step 2: Set up the production server (NGINX)
FROM nginx:alpine

# Copy custom NGINX configuration file from the local machine to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build folder from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow traffic to the web app
EXPOSE 80

# Run NGINX
CMD ["nginx", "-g", "daemon off;"]
