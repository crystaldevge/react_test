# Dockerfile

# Base image
FROM node:18-alpine

# Working directory inside the container
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Serve with a static file server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

EXPOSE 3000
