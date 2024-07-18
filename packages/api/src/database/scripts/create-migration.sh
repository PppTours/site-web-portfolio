#!/bin/bash

set -e

generation_name=$1

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

npm run build

npm run typeorm -- migration:create $MIGRATION_FOLDER_PATH/$generation_name