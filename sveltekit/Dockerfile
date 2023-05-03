# stage build
FROM node:18

WORKDIR /app

COPY . .

RUN rm -rf '$houdini' .svelte-kit

# clean install all dependencies
RUN npm ci

# remove potential security issues
RUN npm audit fix

# build SvelteKit app
RUN npm run build

# stage run
FROM node:18

WORKDIR /app

# copy dependency list
COPY --from=0 /app/package*.json ./

# clean install dependencies, no devDependencies, no prepare script
RUN npm ci --production --ignore-scripts

# remove potential security issues
RUN npm audit fix

# copy built SvelteKit app to /app
COPY --from=0 /app/build ./

# Expose port 5174 for SvelteKit
ARG PORT
EXPOSE ${PORT}

ENTRYPOINT node index.js
CMD ["-r dotenv/config"]