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
RUN npm ci

# # remove potential security issues
# RUN npm audit fix

# copy built SvelteKit app to /app
COPY --from=0 /app/build ./

# Expose port 3000 for SvelteKit
EXPOSE 3000

ENTRYPOINT node index.js
CMD ["-r dotenv/config"]