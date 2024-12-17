import { StyleSheet, View, Text } from 'react-native'
import React, { Children, useState } from 'react'
import { List } from 'react-native-paper';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  titleStyle?: object;
  style?: object;
}

const CustomAccordion: React.FC<AccordionProps> = ({ title, children, titleStyle, style }) => {
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
            icon={expanded ? "minus" : "plus"}
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
      borderColor: "#EAEAEA",
    },
    title: {
      color: "#000000",
      fontSize: 17, 
    },
   
  });

  export default CustomAccordion;
  
