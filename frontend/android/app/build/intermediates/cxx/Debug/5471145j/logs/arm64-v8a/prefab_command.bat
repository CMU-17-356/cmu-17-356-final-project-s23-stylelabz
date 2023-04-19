@echo off
"C:\\Program Files\\Java\\jdk-11.0.17\\bin\\java" ^
  --class-path ^
  "C:\\Users\\User\\.gradle\\caches\\modules-2\\files-2.1\\com.google.prefab\\cli\\2.0.0\\f2702b5ca13df54e3ca92f29d6b403fb6285d8df\\cli-2.0.0-all.jar" ^
  com.google.prefab.cli.AppKt ^
  --build-system ^
  cmake ^
  --platform ^
  android ^
  --abi ^
  arm64-v8a ^
  --os-version ^
  21 ^
  --stl ^
  c++_shared ^
  --ndk-version ^
  23 ^
  --output ^
  "C:\\Users\\User\\17356\\cmu-17-356-final-project-s23-stylelabz\\frontend\\android\\app\\.cxx\\Debug\\5471145j\\prefab\\arm64-v8a\\prefab-configure" ^
  "C:\\Users\\User\\.gradle\\caches\\transforms-3\\e130ab6804e166a1486f733ffc21e975\\transformed\\jetified-react-android-0.71.6-debug\\prefab" ^
  "C:\\Users\\User\\.gradle\\caches\\transforms-3\\4223004ae9355336a9d95bfd0b9550ed\\transformed\\jetified-fbjni-0.3.0\\prefab" ^
  "C:\\Users\\User\\.gradle\\caches\\transforms-3\\176199b1ccd52fcc577c18b9a3a5a18e\\transformed\\jetified-hermes-android-0.71.6-debug\\prefab"
