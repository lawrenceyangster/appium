const path = require("path");

const iosCaps = {
  platformName: "iOS",
  automationName: "XCUITest",
  deviceName: process.env.IOS_DEVICE_NAME || "iPhone 8 plus",
  platformVersion: process.env.IOS_PLATFORM_VERSION || "12.1.4",
  app: undefined, // Will be added in tests
  xcodeOrgId: "FR3SC3EULN",
  xcodeSigningId: "iPhone Developer: Haiyan He (6LTM3V5X6G)",
  udid:"ebcb6e8eedee1183aed3802da4f3f41c06b68cb3"

};

const iosWebCaps = {
  platformName: "iOS",
  automationName: "XCUITest",
  deviceName: process.env.IOS_DEVICE_NAME || "iPhone 8 plus",
  platformVersion: process.env.IOS_PLATFORM_VERSION || "12.1.4",
  browserName: "Safari",
  xcodeOrgId: "FR3SC3EULN",
  xcodeSigningId: "iPhone Developer: Haiyan He (6LTM3V5X6G)",
  udid:"ebcb6e8eedee1183aed3802da4f3f41c06b68cb3",
  safariInitialUrl:"about:blank",
  startIWDP:false
};

// Leave the Android platformVersion blank and set deviceName to a random string (Android deviceName is ignored by Appium but is still required)
// If we're using SauceLabs, set the Android deviceName and platformVersion to the latest supported SauceLabs device and version
const DEFAULT_ANDROID_DEVICE_NAME = process.env.SAUCE
  ? "Android GoogleAPI Emulator"
  : "My Android Device";
const DEFAULT_ANDROID_PLATFORM_VERSION = process.env.SAUCE ? "7.1" : null;

const androidCaps = {
  platformName: "Android",
  automationName: "UiAutomator2",
  deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
  platformVersion:
    process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
  app: undefined // Will be added in tests
};

const androidWebCaps = {
  platformName: "Android",
  automationName: "UiAutomator2",
  deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
  platformVersion:
    process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
  browserName: "chrome"
};

const serverConfig = {
  host: process.env.APPIUM_HOST || "localhost",
  port: process.env.APPIUM_PORT || 4723,
  logLevel: "verbose"
};

const androidOptions = Object.assign(
  {
    desiredCapabilities: androidCaps
  },
  serverConfig
);

const iosOptions = Object.assign(
  {
    desiredCapabilities: iosCaps
  },
  serverConfig
);

const androidWebOptions = Object.assign(
  {
    desiredCapabilities: androidWebCaps
  },
  serverConfig
);

const iosWebOptions = Object.assign(
  {
    desiredCapabilities: iosWebCaps
  },
  serverConfig
);

module.exports = {
  androidOptions,
  iosOptions,
  androidWebOptions,
  iosWebOptions
};
