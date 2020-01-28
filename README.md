## React Native Undetermined Progress

A React Native undetermined progress bar for your React Native Application

![Showcase of React Native Undetermined Progress](https://github.com/alexvcasillas/react-native-undetermined-progress/blob/master/ios-demo.gif?raw=true)

## Installation

```
npm i @alexvcasillas/react-native-undetermined-progress
```

```
yarn add @alexvcasillas/react-native-undetermined-progress
```

## Usage

```js
import React from "react";
import { View } from "react-native";
import { UndeterminedProgress } from "@alexvcasillas/react-native-undetermined-progress";

function Component() {
  return (
    <View>
      ...
      <UndeterminedProgress />
      ...
    </View>
  )
}
```

The above code will produce the same outcome as the demo screen capture.

## Customization

You can pass a few props to configure the outcome a little:

### color

```js
@type {String}
default "#228be6"
```

This prop will change the color of the animated progress bar.

### holderColor

```js
@type {String}
default "#f1f3f5"
```

This prop will change the color of the background holder for the animated progress bar.

### height

```js
@type {Number}
default 4
```

This prop will control the height of the animated progress bar holder and the bar itself.


### backAndForth

```js
@type {Boolean}
default false
```

This prop will control the undetermined animation type. If setted to true, the progress bar will go back and forth from the
edges of the holder. If setted to false (default behaviour) will keep it running from left to right.

### barMaxWidth

```js
@type {Number}
default 200
```

This prop will control the maximum width that the progress bar could expand to. Don't confuse it with the holder, because the holder will take all the available space and this is refered to the bar that's animated within the holder. Change this if you'd like to expand it to a different amount in the X axis.