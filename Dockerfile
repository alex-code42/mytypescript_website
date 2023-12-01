
# Use the official Node.js LTS image as the base image
FROM node:18.16.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

COPY .env .env


# Expose the port that your Next.js app will run on
EXPOSE 3000

# Specify the command to run your application
CMD ["npm", "run", "dev"]
