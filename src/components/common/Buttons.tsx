import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

// props types declaration
interface ButtonsProps {
    title?: string;
    size?: 'full' | 'half'|'active';
    borderRadius?: number;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fontSize?: number;
    height?: number;
    marginTop?: number;
    marginBottom?: number;
    isTag?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
  }


const Buttons :React.FC<ButtonsProps> = ({
    title = 'Button',
    size = 'half', // 'full' or 'half'
    borderRadius = 8,
    backgroundColor = '#3366cc',
    textColor = '#ffffff',
    borderColor = '#3366cc',
    fontSize = 18,
    height = 50,
    marginTop = 20,
    marginBottom = 20,
    isTag = false, // true for tag-like, false for normal button
    onPress,
  }) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            width: size === 'full' ? '100%' : 170,
            backgroundColor,
            borderRadius,
            borderColor,
            height,
            marginTop,
            marginBottom,
            borderWidth: isTag ? 2 : 0,
          },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor, fontSize }]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 10,
      paddingHorizontal:15,
      alignItems: 'center',
      justifyContent: 'center',
      margin:'auto',
    },
    text: {
      fontWeight: 'bold',
      fontFamily:'LatoBold'
    },
  });
  
  export default Buttons;