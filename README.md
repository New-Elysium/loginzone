# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

I'm giving few instruction to create expo-app in your system.

## via npm

1. -[Expo.dev](https://docs.expo.dev/get-started/create-a-project/)

```bash 
  npx create-expo-app@latest
```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the server
 ```bash
npx expo start
 ```
<!-- 
  "android": "expo start --android",
    "ios": "expo start --ios", -->

4. Start the server on android 

```bash
expo start --android
```

5. Start the server on IOS

   ```bash
    expo start --ios
   ```

5. Use Expo-App 

Download expo app from google play-store and after donwloading login your account.
Scan the QR code and Enjoy the process.


## via yarn

1. [Expo.dev](https://docs.expo.dev/more/create-expo/)

```bash
  yarn create expo-app
```

2. Install dependencies
```bash
  yarn install
```

3. Start the server
```bash
  yarn start android
```

For IOS
```bash
yarn start ios
```

## When you encounter proplem via yarn installation, I find a way to handle it

1. Create expo-app via npx

2. Then use
```bash
yarn init
```
You'll see new Package.json file created copy the old Package.json and paste into new Package.json

3. Install the dependencies 
```bash
yarn add
```
or 

```bash
yarn install
```

4. You have to link with node_modules
```bash
yarn config set nodeLinker node-modules
```

In summary, the command is configuring Yarn to manage dependencies in the way that is compatible with the classic node_modules directory layout.

5. Run command
```bash
yarn
```

6. You'll Find one mode error which is related to AppEntry.js

 Simple Way to fix this

 Go to node_modules --> After scrolling open expo(not deep,find easily)--> open AppEntry.js

 To fix that you need to create App.js or App.tsx 

 That's it.



## Installing nativewind(uses tailwind under the hood)

1. [Follow this docs for easy installtion](https://www.nativewind.dev/quick-starts/expo)



In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.


