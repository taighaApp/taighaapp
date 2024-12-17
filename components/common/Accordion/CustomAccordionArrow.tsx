import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React, { Children, useState } from 'react'
import { List } from 'react-native-paper';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  titleStyle?: object;
  style?: object;
  leftImageSource?: any;
  leftIcon?: string; 
  rightImageSource?: any;
  rightIcon?: string; 
}

const CustomAccordionArrow: React.FC<AccordionProps> = ({ title, children, titleStyle, style, leftImageSource, leftIcon, rightImageSource, rightIcon }) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);


  return (
      <List.Accordion
        title={title}
        titleStyle={[styles.title, titleStyle]} // Merge title styles
        style={[styles.accordion, style]} // Merge accordion styles
        expanded={expanded}
        onPress={handlePress}
        right={(props) => (
          <List.Icon
            {...props}
            icon={ "chevron-right"}
            style={{ width: 20, height: 20 }}
            color="#3366cc"
          />
        )}
        left={(props) =>
          leftImageSource ? (
            <Image
              source={leftImageSource}
              style={{ width: 24, height: 24, marginRight: 8 }}
              resizeMode="contain"
            />
          ) : leftIcon ? (
            <List.Icon {...props} icon={leftIcon} />
          ) : null
        }
      >
        {children}
      </List.Accordion>

  )
}
const styles = StyleSheet.create({
    accordion: {
      backgroundColor: "#fff",
      borderColor: "#EAEAEA",
    },
    title: {
      color: "#000000",
      fontSize: 17, 
    },
   
  });

  export default CustomAccordionArrow;
  