#### Build App
FROM node:18

# Install required apps
RUN apt-get update 



# Change directory so that our commands run inside this new directory
WORKDIR /app

COPY package.json /app
# RUN npm i

RUN yarn 

# RUN yarn
# COPY ./ /Memo_frontend 

# Expose the port the app runs in
EXPOSE 3000 

# Serve the app
# CMD ["/api/start.sh"]
CMD ["yarn", "start"]
