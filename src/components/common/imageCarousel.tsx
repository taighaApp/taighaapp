

import React, { useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window'); // Get the device's screen width

const ManualCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: '1', image: require('../../../assets/images/apple.png') },
    { id: '2', image: require('../../../assets/images/google.png') },
    { id: '3', image: require('../../../assets/images/facebook.png') },
  ];

  const onScroll = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* FlatList for Horizontal Scrolling */}
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={onScroll}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width, // Take the full width of the screen for each slide
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});

export default ManualCarousel;





















// import React, { useEffect, useState } from "react";
// import { View, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
// const { width } = Dimensions.get('window'); // Get screen width


// const ManualCarousel = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const flatListRef = React.useRef<FlatList>(null);

//     const data = [
//         { id: '1', image: require('../../assets/images/apple.png') },
//         { id: '2', image: require('../../assets/images/google.png') },
//         { id: '3', image: require('../../assets/images/facebook.png') },
//       ];

//     //   const onScroll = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
//     //     const slideIndex = Math.round(
//     //       event.nativeEvent.contentOffset.x / width
//     //     );
//     //     setActiveIndex(slideIndex);
//     //   };

//       // Auto-scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (activeIndex + 1) % data.length;
//       flatListRef.current?.scrollToIndex({ index: nextIndex }); // Optional chaining
//       setActiveIndex(nextIndex);
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup
//   }, [activeIndex]);


//     return(
//         <View style={{ flex: 1 }}>
//         <FlatList 
//         ref={flatListRef}
//         data={data}
//         horizontal
//         pagingEnabled
//         onScroll={(event) => {
//             const slideIndex = Math.round(
//               event.nativeEvent.contentOffset.x / width
//             );
//             setActiveIndex(slideIndex);
//           }}
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//         <View style={styles.slide}>
//             <Image source={item.image} style={styles.image} />
//         </View>
//         )}
//         />
//         {/* Pagination */}
//             <View style={styles.pagination}>
//                 {data.map((_, index) => (
//                 <View
//                     key={index}
//                     style={[
//                     styles.dot,
//                     activeIndex === index ? styles.activeDot : styles.inactiveDot,
//                     ]}
//                 />
//                 ))}
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     slide: {
//       width, // Take full width of the screen
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     image: {
//       width: 300,
//       height: 200,
//       resizeMode: 'cover',
//     },
//     pagination: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         position: 'absolute',
//         bottom: 20,
//         width: '100%',
//       },dot: {
//         width: 10,
//         height: 10,
//         borderRadius: 5,
//         margin: 5,
//       },
//       activeDot: {
//         backgroundColor: '#000',
//       },
//       inactiveDot: {
//         backgroundColor: '#ccc',
//       },
//   });

//   export default ManualCarousel;