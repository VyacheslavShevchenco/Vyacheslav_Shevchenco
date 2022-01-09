import test_api from "../t1"
import {expect} from 'chai';
import 'mocha';

test = new test_api();

describe("Uploading file", () => {
    it("Upload", async () => {
        const res = await test.uploadFile();
        expect(res.status).to.equal(200);
    }).timeout(1000);
})

describe("Getting file", () => {
    it("Get", async () => {
        const res = await test.getMetadata();
        expect(res.status).to.equal(200);
    }).timeout(1000);
})

describe("Deleting file", () => {
    it("Delete", async () => {
        const res = await test.deleteFile();
        expect(res.status).to.equal(200);
    }).timeout(1000);
})