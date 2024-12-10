
// import React, { useState } from 'react';
// import { Text, View, StyleSheet, Pressable, TouchableOpacity, ScrollView } from "react-native";
// import { Link } from 'expo-router';
// import { AntDesign } from '@expo/vector-icons';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { Image } from 'react-native';
// import MapSearch from './MapSearch'; // Keeping your existing MapSearch component

// const HomeSearchFilter= ()=> {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [selectedTags, setSelectedTags] = useState([]); // Manage selected items here

//   const toggleTag = (tag:any) => {
//     // Add or remove tag from the selected list
//     if (selectedTags.some((item) => item.name === tag.name)) {
//       setSelectedTags(selectedTags.filter((item) => item.name !== tag.name));
//     } else {
//       setSelectedTags([...selectedTags, tag]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Link href="/homesearch" asChild>
//           <Pressable style={styles.backButton}>
//             <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
//           </Pressable>
//         </Link>

//         <View style={styles.searchinputcontainer}>
//           <Pressable
//             style={styles.inputContainer}
//             onPress={() => setIsDropdownVisible(!isDropdownVisible)}

//           >
//             <ScrollView
//             //  horizontal
//               contentContainerStyle={styles.selectedTagsScrollContainer}
//               showsHorizontalScrollIndicator={true}
//               style={styles.scrollContainer}
//               nestedScrollEnabled={true} // Allow nested scrolling
//             >
//               <View style={styles.placeholderContainer}>
//               {selectedTags.map((tag, index) => (
//                 <View key={index} style={styles.selectedTag}>
//                   <Text style={styles.selectedTagText}>{tag.name}</Text>
//                   <TouchableOpacity
//                     onPress={() => toggleTag(tag)}
//                     hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
//                   >
//                     <MaterialIcons name="cancel" size={16} color="#3366CC" />
//                   </TouchableOpacity>
//                 </View>
//               ))}
//               </View>
//             </ScrollView>

//             {selectedTags.length === 0 && (
//               <View>
//                 <View style={styles.placeholderContainer}>
//                   <Text style={styles.placeholder}>Enter City, Zip or School</Text>
//                 </View>

//                 {/* <View style={styles.filterimage}>
//                 <Image source={require('../assets/images/homesearchicon/search-filter.png')} style={styles.resetfilter}/>
//               </View> */}
//             </View>
//             )}
//           </Pressable>
//         </View>
//       </View>

//       {isDropdownVisible && (
//         <MapSearch
//           selectedTags={selectedTags}
//           toggleTag={toggleTag} // Pass toggleTag to handle selection
//         />
//       )}
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   scrollContainer: {
//     width: "100%",  // Make sure it takes the full width of the container
//   },
//   selectedTagsScrollContainer: {
//     flexDirection: "row", // Arrange tags horizontally
//     alignItems: "center",
//     paddingVertical: 8,  // Adjust vertical spacing if needed
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//   },
//   filterimage: {
//     borderColor: '#EAEAEA',
//     borderWidth: 2,
//     borderRadius: 10,
//     padding: 5,
//     width:32,
//     height:32,
//   },
//   resetfilter:{
//     width:22,
//     height:22,
//   },
//   searchinputcontainer: {
//     width: 300,
//     height: 40,
//     marginLeft: 13,
//     borderColor: '#EAEAEA',
//     justifyContent: 'center',
//     // borderWidth:1,

//   },
//   placeholderContainer:{
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     // padding: 8,
//     overflowX:'scroll',

//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFFFFF',
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//     width: '100%',
//     height: 132,
//     marginBottom: 16,
//   },
//   backButton: {
//     backgroundColor: '#3366CC',
//     width: 40,
//     height: 40,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputContainer: {
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 8,
//     minHeight: 50,
//     padding: 8,
//     justifyContent: 'center',
//   },
//   selectedTagsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'nowrap',
//   },
//   selectedTag: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#EEEEEE',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     marginVertical: 4,
//     borderRadius: 4,
//     marginRight: 8,
//   },
//   selectedTagText: {
//     color: '#3366CC',
//     fontSize: 15,
//   },
//   // placeholderContainer: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   // },
//   placeholder: {
//     fontSize: 16,
//     color: '#AEAEAE',
//     flex: 1,
//   },
// });

// export default HomeSearchFilter
