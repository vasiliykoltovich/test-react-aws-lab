# Use an official Node.js runtime as the base image
FROM node:latest
# Set the working directory within the container
WORKDIR /lab-aws-react-docker-mongo-ui/

# Copy package.json and package-lock.json to the container
COPY package*.json /lab-aws-react-docker-mongo-ui/

# Install dependencies
RUN npm install 
ENV REACT_APP_TEXT_MESSAGE "Hello team  - greetings!!!"

# Copy the rest of the application code to the container
COPY . /lab-aws-react-docker-mongo-ui/

RUN chmod a+x /lab-aws-react-docker-mongo-ui/node_modules/react-scripts/bin
RUN chmod a+x /lab-aws-react-docker-mongo-ui/node_modules/.bin/react-scripts
RUN npm run build

# Command to run after container will be started
CMD ["npm", "start", "--open", "false"]

# Open port 3000 for container 
EXPOSE 3000
