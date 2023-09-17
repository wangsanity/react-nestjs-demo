#!/usr/bin/env bash
set -e

echo "create-db.sh: Creating database"
psql -a -b -e -v ON_ERROR_STOP=1 -v POSTGRES_DB="$POSTGRES_DB" -v POSTGRES_USER="$POSTGRES_USER" --username="$POSTGRES_USER" -f /init/create-db.psql

if [[ $? -ne 0 ]]; then
  return;
fi

echo "create-db.sh: Database created"
