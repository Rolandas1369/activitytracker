# The first stage
# Build React static files
FROM node:14.15-alpine as build

WORKDIR /app/frontend
COPY ./frontend/package.json ./
RUN yarn install
COPY ./frontend/ ./
RUN yarn run build
RUN rm -r node_modules

# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
