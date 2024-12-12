import { StyleSheet, View, Text } from 'react-native'
import React, { Children, useState } from 'react'
import { List } from 'react-native-paper';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  titleStyle?: object;
  style?: object;
}

const CustomAccordionArrow: React.FC<AccordionProps> = ({ title, children, titleStyle, style }) => {
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
      >
        {children}
      </List.Accordion>
  )
}
const styles = StyleSheet.create({
    accordion: {
      backgroundColor: "#fff",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#EAEAEA",
    },
    title: {
      color: "#000000",
      fontSize: 17, 
    },
   
  });

  export default CustomAccordionArrow;
  