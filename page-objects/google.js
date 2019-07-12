module.exports = {
  elements: {
    searchBar: {
      selector: '//*[@id="username"]',
      locateStrategy: 'xpath'
    }
  }
}; 


/* Writing commands

var googleCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton');
  }
};

module.exports = {
  commands: [googleCommands],
  url: 'https://google.com',  //This line is necessary
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submitButton: {
      selector: 'input[name=btnK]'
    }
  }
};

*/


/* video 4

module.exports = {
    url: 'https://google.com',
    elements: {
      searchBar: {
        selector: 'input[type=text]'
      },
      submit: {
        selector: '//*[@id="tsf"]/div[2]/div/div[3]/center/input[1]',
        locateStrategy: 'xpath'
      }
    }
  };
  
  */














































  
/*

NightwatchAPI {
  capabilities: 
   { acceptInsecureCerts: false,
     acceptSslCerts: false,
     applicationCacheEnabled: false,
     browserConnectionEnabled: false,
     browserName: 'chrome',
     chrome: 
      { chromedriverVersion: '2.46.628411 (3324f4c8be9ff2f70a05a30ebc72ffb013e1a71e)',
        userDataDir: '/var/folders/wp/c6g2wsvd3132py2n_q5s_vrjkshswb/T/.org.chromium.Chromium.2SC1Cw' },
     cssSelectorsEnabled: true,
     databaseEnabled: false,
     'goog:chromeOptions': { debuggerAddress: 'localhost:50949' },
     handlesAlerts: true,
     hasTouchScreen: false,
     javascriptEnabled: true,
     locationContextEnabled: true,
     mobileEmulationEnabled: false,
     nativeEvents: true,
     networkConnectionEnabled: false,
     pageLoadStrategy: 'normal',
     platform: 'Mac OS X',
     proxy: {},
     rotatable: false,
     setWindowRect: true,
     strictFileInteractability: false,
     takesHeapSnapshot: true,
     takesScreenshot: true,
     timeouts: { implicit: 0, pageLoad: 300000, script: 30000 },
     unexpectedAlertBehaviour: 'ignore',
     version: '72.0.3626.121',
     webStorageEnabled: true,
     'webdriver.remote.sessionid': '743e858db598d742c74508014f45927a' },
  currentTest: null,
  desiredCapabilities: null,
  sessionId: '743e858db598d742c74508014f45927a',
  options: 
   { custom_assertions_path: null,
     custom_commands_path: null,
     default_reporter: 'junit',
     desiredCapabilities: { browserName: 'chrome', acceptSslCerts: true, platform: 'ANY' },
     detailed_output: true,
     disable_colors: false,
     dotenv: {},
     end_session_on_fail: true,
     exclude: null,
     filter: null,
     globals: 
      { abortOnAssertionFailure: true,
        waitForConditionPollInterval: 500,
        waitForConditionTimeout: 5000,
        throwOnMultipleElementsReturned: false,
        suppressWarningsOnMultipleElementsReturned: false,
        asyncHookTimeout: 10000,
        unitTestsTimeout: 2000,
        customReporterCallbackTimeout: 20000,
        retryAssertionTimeout: 1000,
        reporter: [Function: reporter] },
     globals_path: null,
     launch_url: 'http://localhost',
     live_output: false,
     log_screenshot_data: false,
     output: true,
     output_folder: 'reports',
     page_objects_path: [ 'page-objects' ],
     parallel_mode: false,
     parallel_process_delay: 10,
     persist_globals: false,
     report_prefix: '',
     screenshots: { enabled: true, path: 'screenshot', on_error: true },
     selenium: 
      { start_process: true,
        cli_args: [Object],
        server_path: 'bin/selenium-server-standalone-3.141.59.jar',
        log_path: '',
        port: 4444,
        check_process_delay: 500,
        version2: true },
     selenium_host: 'localhost',
     selenium_port: 4444,
     silent: true,
     skip_testcases_on_fail: true,
     skipgroup: '',
     skiptags: '',
     src_folders: [ 'tests' ],
     start_session: true,
     sync_test_names: true,
     testWorkersEnabled: false,
     test_runner: { type: 'default', options: {} },
     test_workers: false,
     unit_tests_mode: false,
     use_xpath: false,
     webdriver: 
      { start_process: true,
        cli_args: [Object],
        server_path: 'bin/selenium-server-standalone-3.141.59.jar',
        log_path: '',
        use_legacy_jsonwire: undefined,
        check_process_delay: 500,
        host: 'localhost',
        port: 4444,
        ssl: false,
        proxy: undefined,
        timeout_options: [Object],
        default_path_prefix: '/wd/hub',
        username: undefined,
        access_key: undefined },
     screenshotsPath: 'screenshot' },
  globals: 
   { abortOnAssertionFailure: true,
     waitForConditionPollInterval: 500,
     waitForConditionTimeout: 5000,
     throwOnMultipleElementsReturned: false,
     suppressWarningsOnMultipleElementsReturned: false,
     asyncHookTimeout: 10000,
     unitTestsTimeout: 2000,
     customReporterCallbackTimeout: 20000,
     retryAssertionTimeout: 1000,
     reporter: [Function: reporter] },
  launchUrl: 'http://localhost',
  launch_url: 'http://localhost',
  screenshotsPath: 'screenshot',
  Keys: 
   { NULL: '',
     CANCEL: '',
     HELP: '',
     BACK_SPACE: '',
     TAB: '',
     CLEAR: '',
     RETURN: '',
     ENTER: '',
     SHIFT: '',
     CONTROL: '',
     ALT: '',
     PAUSE: '',
     ESCAPE: '',
     SPACE: '',
     PAGEUP: '',
     PAGEDOWN: '',
     END: '',
     HOME: '',
     LEFT_ARROW: '',
     UP_ARROW: '',
     RIGHT_ARROW: '',
     DOWN_ARROW: '',
     ARROW_LEFT: '',
     ARROW_UP: '',
     ARROW_RIGHT: '',
     ARROW_DOWN: '',
     INSERT: '',
     DELETE: '',
     SEMICOLON: '',
     EQUALS: '',
     NUMPAD0: '',
     NUMPAD1: '',
     NUMPAD2: '',
     NUMPAD3: '',
     NUMPAD4: '',
     NUMPAD5: '',
     NUMPAD6: '',
     NUMPAD7: '',
     NUMPAD8: '',
     NUMPAD9: '',
     MULTIPLY: '',
     ADD: '',
     SEPARATOR: '',
     SUBTRACT: '',
     DECIMAL: '',
     DIVIDE: '',
     F1: '',
     F2: '',
     F3: '',
     F4: '',
     F5: '',
     F6: '',
     F7: '',
     F8: '',
     F9: '',
     F10: '',
     F11: '',
     F12: '',
     COMMAND: '',
     META: '' },
  page: { google: [Function] },
  assert: 
   { fail: [Function: bound assertFn],
     AssertionError: [Function: bound assertFn],
     ok: [Function: bound assertFn],
     equal: [Function: bound assertFn],
     notEqual: [Function: bound assertFn],
     deepEqual: [Function: bound assertFn],
     notDeepEqual: [Function: bound assertFn],
     deepStrictEqual: [Function: bound assertFn],
     notDeepStrictEqual: [Function: bound assertFn],
     strictEqual: [Function: bound assertFn],
     notStrictEqual: [Function: bound assertFn],
     throws: [Function: bound assertFn],
     rejects: [Function: bound assertFn],
     doesNotThrow: [Function: bound assertFn],
     doesNotReject: [Function: bound assertFn],
     ifError: [Function: bound assertFn],
     strict: [Function: bound assertFn],
     attributeContains: [Function: bound commandFn],
     attributeEquals: [Function: bound commandFn],
     containsText: [Function: bound commandFn],
     cssClassNotPresent: [Function: bound commandFn],
     cssClassPresent: [Function: bound commandFn],
     cssProperty: [Function: bound commandFn],
     elementNotPresent: [Function: bound commandFn],
     elementPresent: [Function: bound commandFn],
     hidden: [Function: bound commandFn],
     title: [Function: bound commandFn],
     titleContains: [Function: bound commandFn],
     urlContains: [Function: bound commandFn],
     urlEquals: [Function: bound commandFn],
     value: [Function: bound commandFn],
     valueContains: [Function: bound commandFn],
     visible: [Function: bound commandFn] },
  verify: 
   { fail: [Function: bound assertFn],
     AssertionError: [Function: bound assertFn],
     ok: [Function: bound assertFn],
     equal: [Function: bound assertFn],
     notEqual: [Function: bound assertFn],
     deepEqual: [Function: bound assertFn],
     notDeepEqual: [Function: bound assertFn],
     deepStrictEqual: [Function: bound assertFn],
     notDeepStrictEqual: [Function: bound assertFn],
     strictEqual: [Function: bound assertFn],
     notStrictEqual: [Function: bound assertFn],
     throws: [Function: bound assertFn],
     rejects: [Function: bound assertFn],
     doesNotThrow: [Function: bound assertFn],
     doesNotReject: [Function: bound assertFn],
     ifError: [Function: bound assertFn],
     strict: [Function: bound assertFn],
     attributeContains: [Function: bound commandFn],
     attributeEquals: [Function: bound commandFn],
     containsText: [Function: bound commandFn],
     cssClassNotPresent: [Function: bound commandFn],
     cssClassPresent: [Function: bound commandFn],
     cssProperty: [Function: bound commandFn],
     elementNotPresent: [Function: bound commandFn],
     elementPresent: [Function: bound commandFn],
     hidden: [Function: bound commandFn],
     title: [Function: bound commandFn],
     titleContains: [Function: bound commandFn],
     urlContains: [Function: bound commandFn],
     urlEquals: [Function: bound commandFn],
     value: [Function: bound commandFn],
     valueContains: [Function: bound commandFn],
     visible: [Function: bound commandFn] },
  session: [Function: queuedCommandFn],
  sessions: [Function: queuedCommandFn],
  timeouts: [Function: queuedCommandFn],
  timeoutsAsyncScript: [Function: queuedCommandFn],
  timeoutsImplicitWait: [Function: queuedCommandFn],
  status: [Function: queuedCommandFn],
  sessionLog: [Function: queuedCommandFn],
  sessionLogTypes: [Function: queuedCommandFn],
  url: [Function: queuedCommandFn],
  back: [Function: queuedCommandFn],
  forward: [Function: queuedCommandFn],
  refresh: [Function: queuedCommandFn],
  title: [Function: queuedCommandFn],
  window: [Function: queuedCommandFn],
  windowHandle: [Function: queuedCommandFn],
  windowHandles: [Function: queuedCommandFn],
  windowMaximize: [Function: queuedCommandFn],
  windowPosition: [Function: queuedCommandFn],
  windowSize: [Function: queuedCommandFn],
  frame: [Function: queuedCommandFn],
  frameParent: [Function: queuedCommandFn],
  element: [Function: queuedCommandFn],
  elements: [Function: queuedCommandFn],
  elementIdEquals: [Function: queuedCommandFn],
  elementIdElement: [Function: queuedCommandFn],
  elementIdElements: [Function: queuedCommandFn],
  elementActive: [Function: queuedCommandFn],
  elementIdAttribute: [Function: queuedCommandFn],
  elementIdCssProperty: [Function: queuedCommandFn],
  elementIdClear: [Function: queuedCommandFn],
  elementIdClick: [Function: queuedCommandFn],
  elementIdDisplayed: [Function: queuedCommandFn],
  elementIdEnabled: [Function: queuedCommandFn],
  elementIdLocationInView: [Function: queuedCommandFn],
  elementIdLocation: [Function: queuedCommandFn],
  elementIdName: [Function: queuedCommandFn],
  elementIdSelected: [Function: queuedCommandFn],
  elementIdSize: [Function: queuedCommandFn],
  elementIdText: [Function: queuedCommandFn],
  elementIdValue: [Function: queuedCommandFn],
  keys: [Function: queuedCommandFn],
  submit: [Function: queuedCommandFn],
  execute: [Function: queuedCommandFn],
  executeAsync: [Function: queuedCommandFn],
  source: [Function: queuedCommandFn],
  cookie: [Function: queuedCommandFn],
  doubleClick: [Function: queuedCommandFn],
  mouseButtonClick: [Function: queuedCommandFn],
  mouseButtonDown: [Function: queuedCommandFn],
  mouseButtonUp: [Function: queuedCommandFn],
  moveTo: [Function: queuedCommandFn],
  acceptAlert: [Function: queuedCommandFn],
  dismissAlert: [Function: queuedCommandFn],
  getAlertText: [Function: queuedCommandFn],
  setAlertText: [Function: queuedCommandFn],
  screenshot: [Function: queuedCommandFn],
  getOrientation: [Function: queuedCommandFn],
  setOrientation: [Function: queuedCommandFn],
  contexts: [Function: queuedCommandFn],
  currentContext: [Function: queuedCommandFn],
  setContext: [Function: queuedCommandFn],
  _baseCommand: [Function: queuedCommandFn],
  _locateStrategy: [Function: queuedCommandFn],
  closeWindow: [Function: queuedCommandFn],
  deleteCookie: [Function: queuedCommandFn],
  deleteCookies: [Function: queuedCommandFn],
  end: [Function: queuedCommandFn],
  getCookie: [Function: queuedCommandFn],
  getCookies: [Function: queuedCommandFn],
  getLog: [Function: queuedCommandFn],
  getLogTypes: [Function: queuedCommandFn],
  getTitle: [Function: queuedCommandFn],
  init: [Function: queuedCommandFn],
  injectScript: [Function: queuedCommandFn],
  isLogAvailable: [Function: queuedCommandFn],
  maximizeWindow: [Function: queuedCommandFn],
  pause: [Function: queuedCommandFn],
  perform: [Function: queuedCommandFn],
  resizeWindow: [Function: queuedCommandFn],
  saveScreenshot: [Function: queuedCommandFn],
  setCookie: [Function: queuedCommandFn],
  setWindowPosition: [Function: queuedCommandFn],
  switchWindow: [Function: queuedCommandFn],
  urlHash: [Function: queuedCommandFn],
  useCss: [Function: queuedCommandFn],
  useXpath: [Function: queuedCommandFn],
  _baseElementCommand: [Function: queuedCommandFn],
  _waitFor: [Function: queuedCommandFn],
  _waitForDisplayed: [Function: queuedCommandFn],
  clearValue: [Function: queuedCommandFn],
  click: [Function: queuedCommandFn],
  getAttribute: [Function: queuedCommandFn],
  getCssProperty: [Function: queuedCommandFn],
  getElementSize: [Function: queuedCommandFn],
  getLocation: [Function: queuedCommandFn],
  getLocationInView: [Function: queuedCommandFn],
  getTagName: [Function: queuedCommandFn],
  getText: [Function: queuedCommandFn],
  getValue: [Function: queuedCommandFn],
  isVisible: [Function: queuedCommandFn],
  moveToElement: [Function: queuedCommandFn],
  setValue: [Function: queuedCommandFn],
  sendKeys: [Function: queuedCommandFn],
  submitForm: [Function: queuedCommandFn],
  waitForElementNotPresent: [Function: queuedCommandFn],
  waitForElementNotVisible: [Function: queuedCommandFn],
  waitForElementPresent: [Function: queuedCommandFn],
  waitForElementVisible: [Function: queuedCommandFn],
  expect: 
   { cookie: [Function],
     element: [Function],
     elements: [Function],
     title: [Function],
     url: [Function] },
  catch: [Function],
  then: [Function] }



  */