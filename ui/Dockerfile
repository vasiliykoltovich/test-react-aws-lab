# Use an official Node.js runtime as the base image
FROM node:latest as build-stage
# Set the working directory within the container
WORKDIR /lab-aws-react-docker-mongo-ui/

# Copy package.json and package-lock.json to the container
COPY package*.json /lab-aws-react-docker-mongo-ui/

# Install dependencies
RUN npm install

ENV REACT_APP_TEXT_MESSAGE "Hello team  - greetings!!!"

# Copy the rest of the application code to the container
COPY . /lab-aws-react-docker-mongo-ui/

RUN npm run build

## Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /lab-aws-react-docker-mongo-ui/build/  /usr/share/nginx/html
## Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx/nginx.conf /etc/nginx/nginx.conf

## Command to run after container will be started
#CMD ["npm", "start"]

# Open port 3000 for container 
EXPOSE 3000