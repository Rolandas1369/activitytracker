FROM node
WORKDIR /frontend
COPY package.json /frontend
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
