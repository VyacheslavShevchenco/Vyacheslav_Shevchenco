Refer to this API: https://www.dropbox.com/developers/documentation/http/documentation
Create scenario 
  - Upload
  - GetFileMetadata
  - Delete file ;
run test:
(lines 1)npm install
(lines 2)npm install mocha-teamcity-reporter
(lines 3)npm run mocha --no-timeouts --reporter mochawesome
