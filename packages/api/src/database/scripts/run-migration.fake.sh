#!/bin/bash

set -e

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

npm run build

npm run typeorm -- migration:run -d $DATABASE_CONFIG_FILE_PATH --fake
