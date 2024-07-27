#!/bin/bash

set -e

migration_name=$1

if [ -z "$migration_name" ]; then
    echo "Error: Migration name is missing"
    exit 1
fi

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

npm run build

npm run typeorm -- migration:create $MIGRATION_FOLDER_PATH/$migration_name