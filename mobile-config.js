App.accessRule('http://*');
App.accessRule('https://*');

App.icons({
  // iOS
  'iphone': 'resources/logo.png',
  'iphone_2x': 'resources/logo.png',
  'iphone_3x': 'resources/logo.png',
  'ipad': 'resources/logo.png',
  'ipad_2x': 'resources/logo.png',

  // Android
  'android_ldpi': 'resources/android/icon-48x48.png',
  'android_mdpi': 'resources/android/icon-48x48.png',
  'android_hdpi': 'resources/android/icon-72x72.png',
  'android_xhdpi': 'resources/android/icon-96x96.png',
  'android_xxhdpi': 'resources/android/icon-96x96.png',
  'android_xxxhdpi': 'resources/android/icon-96x96.png'
});

App.launchScreens({
  // iOS
  'iphone': 'resources/ios/screen-iphone-portrait.png',
  'iphone_2x': 'resources/ios/screen-iphone-portrait-2x.png',
  'iphone5': 'resources/ios/screen-iphone-portrait-568h-2x.png',
  'iphone6': 'resources/ios/screen-iphone-portrait-667h.png',
  'iphone6p_portrait': 'resources/ios/screen-iphone-portrait-736h.png',

  'ipad_portrait': 'resources/ios/screen-ipad-portrait.png',
  'ipad_portrait_2x': 'resources/ios/screen-ipad-portrait-2x.png',

  // Android
  'android_ldpi_portrait': 'resources/android/screen-ldpi-portrait.png',
  'android_mdpi_portrait': 'resources/android/screen-mdpi-portrait.png',
  'android_hdpi_portrait': 'resources/android/screen-hdpi-portrait.png',
  'android_xhdpi_portrait': 'resources/android/screen-xhdpi-portrait.png'
});
