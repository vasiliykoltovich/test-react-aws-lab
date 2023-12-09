FROM node:19.6.0-alpine
# Create app directory
WORKDIR /lab-aws-react-docker-mongo-api/
# Install app dependencies
COPY package*.json /lab-aws-react-docker-mongo-api/

RUN npm install
# Copy app source code
COPY . /lab-aws-react-docker-mongo-api/

#Expose port and start application
EXPOSE 8080
CMD [ "npm", "start" ]