const webdriverio = require("webdriverio");
const fs = require('fs');
const iosOptions = require("../../helpers/caps").iosWebOptions;
const app = require("../../helpers/apps").iosTestApp;
const assert = require("chai").assert;

describe("Create Safari session", function() {
  it("should create and destroy IOS Safari session", async function() {
    let client = webdriverio.remote(iosOptions);

    return client
      .init()
      .url("https://courseware.uuabc.com/Lesson35-GivingDirections1111/resource/images/item/post_item_23.jpg")
      .title(function(result) {
        assert.equal(result.value, "");
      })
      .end();
  });
});
