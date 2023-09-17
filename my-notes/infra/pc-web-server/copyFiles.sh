#!/bin/bash

PORT=5000

function free_web_port() {
    echo "Killing process on port $PORT"
    lsof -ti :$PORT | xargs kill -9
}

free_web_port

INDEXHTML=../pc-web-server/build/index.html
PACKAGEJSON=../pc-web-server/package.json
if test -f "$INDEXHTML"; then
    echo "build folder exists. Remove it before copy"
    rmdir build
else
    echo "Creating directory pc-web-server/build"
    mkdir -p ../pc-web-server
    mkdir -p ../pc-web-server/build
fi

if [ -f "$PACKAGEJSON" ]; then
    echo "Server is running, only need to replace build folder."
    cp -r build ../pc-web-server
    echo "Copy build folder finished."
else 
    echo "$PACKAGEJSON does not exist. Need to copy all files and start server."
    cp -rf ./* ../pc-web-server

    echo "Running npm install"
    npm install
fi

echo "Starting node server.js"
node server.js &
echo "Server is running now"
