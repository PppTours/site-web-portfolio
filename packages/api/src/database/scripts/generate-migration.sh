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

output=$(npm run typeorm -- migration:generate -d $DATABASE_CONFIG_FILE_PATH $MIGRATION_FOLDER_PATH/$migration_name | tee)

filename=$(echo "$output" | sed -n 's/.*Migration .\+\/\([^ ]\+\).*/\1/p')

if [[ -z "$filename" ]]; then
  echo "$output"
  echo
  echo "Error: Migration has failed"
  exit 1
else
  fullpath="$MIGRATION_FOLDER_PATH/$filename"
  npx eslint $fullpath --fix
  echo "Migration generated: $fullpath"
fi