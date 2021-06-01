# Use an official node runtime as a parent image
FROM node:latest
RUN chown -Rh $user:$user /frontend

USER $user

WORKDIR /app/frontend/
RUN ls -la
# Install dependencies

# Add rest of the client code
COPY . /app/frontend/
RUN npm install

EXPOSE 3000

CMD npm start
