#!/bin/bash
echo I assume you have already bundled and tested the changes
mkdir -p deploy
cp -R dist deploy
cp assets/* deploy/dist/assets/
cp app.yaml deploy/
cd deploy/
gcloud app deploy app.yaml
