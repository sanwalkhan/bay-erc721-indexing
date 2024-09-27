# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Install dependencies
npm ci

# 2. Start a Postgres database container and detach
sqd up

# 3. Build and start the processor
sqd process

# 5. The command above will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).
