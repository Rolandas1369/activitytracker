# Use an official node runtime as a parent image
FROM node:latest
RUN chown -Rh $user:$user .

USER $user

WORKDIR /app/frontend/

# Install dependencies

# Add rest of the client code
COPY . /app/frontend/
RUN npm install

EXPOSE 3000

CMD npm start
