rm -r dist
cd ./client
npm run build
mv dist ../
cd ..
gcloud app deploy