# Use an official node runtime as a parent image
FROM node:latest

WORKDIR /app/frontend/

# Install dependencies

# Add rest of the client code
COPY . /app/frontend/
RUN npm config set unsafe-perm true
RUN npm install

EXPOSE 3000

CMD npm start
