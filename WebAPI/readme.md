Refer to this API: https://www.dropbox.com/developers/documentation/http/documentation
Create scenario 
  - Upload
  - GetFileMetadata
  - Delete file ;
run test:
npm install
npm install mocha-teamcity-reporter
npm run mocha --no-timeouts --reporter mochawesome
