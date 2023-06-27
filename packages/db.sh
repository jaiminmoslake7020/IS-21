./server/node_modules/.bin/typeorm --v
# ../node_modules/.bin/typeorm schema:drop --dataSource=./../mydb.sqlite
# ts-node --transpile-only ../commands/seed.ts
# ./node_modules/.bin/typeorm schema:sync --dataSource=./mydb.sqlite
./server/node_modules/.bin/typeorm init --name server-app --database sqlite --module esm --express

