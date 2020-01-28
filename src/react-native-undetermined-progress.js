import React, { useState, useRef, useEffect } from "react";
import { View, Animated } from "react-native";

export function UndeterminedProgress({
  color = "#228be6",
  holderColor = "#f1f3f5",
  height = 4,
  backAndForth = false,
  barMaxWidth = 200,
}) {
  const [progressWidth, setProgressWidth] = useState(0);
  const scale = useRef(new Animated.Value(0));
  const translate = useRef(new Animated.Value(0));

  function animatePositionTo(to) {
    Animated.timing(translate.current, {
      toValue: to,
      useNativeDriver: true,
      duration: 1500,
    }).start(() => {
      if (backAndForth) return animatePositionTo(to === 100 ? 0 : 100);
      translate.current.setValue(0);
      animatePositionTo(100);
    });
  }

  function animateScaleTo(to) {
    Animated.timing(scale.current, {
      toValue: to,
      useNativeDriver: true,
      duration: 1500
    }).start(() => {
      animateScaleTo(to === 1 ? 0.1 : 1);
    });
  }

  useEffect(() => {
    animatePositionTo(100);
    animateScaleTo(1);
    return () => {
      translate.current.stopAnimation();
      translate.current.removeAllListeners();
      scale.current.stopAnimation();
      scale.current.removeAllListeners();
    }
  }, []);

  function handleLayout(event) {
    var { width } = event.nativeEvent.layout;
    setProgressWidth(width);
  }

  const interpolatePosition = translate.current.interpolate({
    inputRange: [0, 100],
    outputRange: [-barMaxWidth, progressWidth]
  });

  return (
    <View onLayout={handleLayout} style={{ width: '100%', backgroundColor: holderColor, height }}>
      <Animated.View style={{ transform: [{ translateX: interpolatePosition }, { scaleX: scale.current }], width: barMaxWidth, height, backgroundColor: color }} />
    </View>
  )
}