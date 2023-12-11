# Use an official Node.js runtime as the base image
FROM node:latest as build-stage
# Set the working directory within the container
WORKDIR /app/

# Copy package.json and package-lock.json to the container
COPY package*.json /app/

# Install dependencies
RUN npm install
RUN npm install

# Copy the rest of the application code to the container
COPY . /app/

RUN chmod a+x /app/node_modules/react-scripts/bin
RUN chmod a+x /app/node_modules/.bin/react-scripts
RUN npm run build


## Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/  /usr/share/nginx/html
## Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx/nginx.conf /etc/nginx/nginx.conf


# Open port 3000 for container 
EXPOSE 3000