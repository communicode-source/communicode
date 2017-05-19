#!/bin/bash
rm -rf dist/ deploy/
npm run bundle
mkdir -p deploy
cp -R dist deploy
cp assets/* deploy/dist/assets/
cp app.yaml deploy/
cd deploy/
gcloud app deploy app.yaml
