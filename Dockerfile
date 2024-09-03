# Base image
FROM node

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock (if exists)
COPY package*.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Command to start the development server
CMD ["yarn", "start:dev"]
