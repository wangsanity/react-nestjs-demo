#!/bin/bash

PORT=5010

function free_backend_port() {
    echo "Killing process on port $PORT"
    lsof -ti :$PORT | xargs kill -9
}

free_backend_port

MAIN=../my-notes-backend/dist/src/main.js
PACKAGEJSON=../my-notes-backend/package.json
if test -f "$MAIN"; then
    echo "dist folder exists. Remove it before copy"
    rmdir dist
else
    echo "Creating directory my-notes-backend/dist"
    mkdir -p ../my-notes-backend
    mkdir -p ../my-notes-backend/dist
fi

echo "Copy dist folder files."
cp -rf ./* ../my-notes-backend

echo "Run node dist/src/main.js"
node dist/src/main.js &
echo "Done"