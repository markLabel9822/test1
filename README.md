# version yarn & node support

```
set yarn version 4.xx^ 
set node version 18.xx^^
```

# install yarn

```
yarn install
```

# docker run 
```
Not have docker
install docker or download in local

Have docker 
docker compose up
```
# setting env

```
echo DATABASE_URL= > .env 
copy to file .env : DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"

```

# setting prisma

```
yarn prisma:migrate
yarn prisma:generate
yarn prisma:seed

```

# run 

```
yarn dev

```
