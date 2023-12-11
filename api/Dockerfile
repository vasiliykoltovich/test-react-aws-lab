FROM node:19.6.0-alpine
# Create app directory
WORKDIR /app/
# Install app dependencies
COPY package*.json /app/

RUN npm install
# Copy app source code
COPY . /app/

CMD [ "npm", "start" ]