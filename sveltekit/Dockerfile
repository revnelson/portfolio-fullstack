FROM node:18

LABEL Developer="Michael Nelson"

WORKDIR /usr/src/app

# Copy over `package.json` and lock files to optimize the build process
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "yarn.lock", "./"]
# Install Node modules
RUN yarn

# Copy over rest of the project files
COPY . .

RUN yarn build

# # Delete source code files that were used to build the app that are no longer needed
# RUN rm -rf src/ static/ docker-compose.yml
RUN ls

# Expose port 5174 for SvelteKit
EXPOSE 5174

ENV PORT=5174

CMD ["node", "build"]