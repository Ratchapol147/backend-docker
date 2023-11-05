#### Build App
FROM node:18

# Install required apps
RUN apt-get update && \
    apt-get -y install --no-install-recommends \
    nano curl bash 

# Set time zone
ENV TZ=Asia/Bangkok

ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US.UTF-8

# Change directory so that our commands run inside this new directory
WORKDIR /api

COPY package.json /api
RUN yarn add nodemon -g
RUN yarn install

COPY ./ /api 

# Expose the port the app runs in
EXPOSE 1000 1001

# Serve the app
# CMD ["yarn", "run", "prod"]

