import React, { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface SnackBarProps {
  visible: boolean;
  message: string;
  duration?: number;
  onDismiss: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const SnackBar: React.FC<SnackBarProps> = ({
  visible,
  message,
  duration = 3000,
  onDismiss,
  style,
  textStyle,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(duration),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => onDismiss());
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[styles.container, style, { opacity: animatedValue }]}
    >
      <Text style={[styles.text, textStyle]}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
  text: { color: "white" },
});

export default SnackBar;
