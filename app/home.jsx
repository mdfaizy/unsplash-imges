// import { useEffect, useState } from 'react';
// import { getAuth, signOut } from "firebase/auth";
// import { View, Text, TextInput, FlatList, ActivityIndicator, Pressable, Image, Button, StyleSheet, Alert } from 'react-native';
// import { db } from '../firebase';
// import { fetchImages } from '../constants/api';
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { useRouter } from "expo-router";
// const HomeScreen = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1); 
//   const [totalPages, setTotalPages] = useState(1); 
//   const [searchHistory, setSearchHistory] = useState([]);
//   const imagesPerPage = 10;
//   const auth = getAuth(); 
//   const router = useRouter();
//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         Alert.alert("Success", "You have been logged out.");
//         router.push("/");
//       })
//       .catch((error) => {
//         Alert.alert("Error", error.message);
//       });
//   };

//   const fetchAndStoreSearchHistory = async (query) => {
//     await addDoc(collection(db, "searchHistory"), {
//       query,
//       timestamp: new Date(),
//     });
//     loadSearchHistory();
//   };

//   const loadSearchHistory = async () => {
//     const querySnapshot = await getDocs(collection(db, "searchHistory"));
//     const history = querySnapshot.docs.map(doc => doc.data().query);
//     setSearchHistory(history);
//   };

//   const loadImages = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchImages(page, searchQuery, imagesPerPage);
//       setImages(data.results);
//       setTotalPages(Math.ceil(data.total / imagesPerPage)); 
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim() === '') {
//       Alert.alert('Error', 'Please enter a valid search term.');
//       return;
//     }
//     setImages([]);
//     setPage(1);
//     fetchAndStoreSearchHistory(searchQuery);
//     loadImages();
//   };

//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(page + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   useEffect(() => {
//     if (searchQuery) {
//       loadImages();
//     }
//   }, [page]);

//   return (
//     <View style={styles.container}>
//       <View>
//         <Pressable onPress={handleLogout} style={styles.logoutButton}>
//           <Text style={styles.logoutButtonText}>Log Out</Text>
//         </Pressable>
//       </View>
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search for images"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           onSubmitEditing={handleSearch}
//           style={styles.searchInput}
//         />
//         <Pressable onPress={handleSearch} style={styles.submitButton}>
//           <Text style={styles.submitButtonText}>Submit</Text>
//         </Pressable>
//       </View>
//       <FlatList
//         data={images}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: item.urls.small }} style={styles.image} />
//           </View>
//         )}
//       />
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       <View style={styles.paginationContainer}>
//         <Button title="Previous" onPress={handlePreviousPage} disabled={page === 1} />
//         <Text style={styles.pageInfo}>Page {page} of {totalPages}</Text>
//         <Button title="Next" onPress={handleNextPage} disabled={page === totalPages} />
//       </View>
//       <Text style={styles.historyTitle}>Search History:</Text>
//       {searchHistory.map((query, index) => (
//         <Text key={index} onPress={() => setSearchQuery(query)} style={styles.historyItem}>
//           {query}
//         </Text>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop:40,
//     backgroundColor: '#fff',
//   },
//   logoutButton: {
//     backgroundColor: '#ff5c5c',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//   },
//   submitButton: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     marginLeft: 10,
//     borderRadius: 5,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   imageContainer: {
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//   },
//   paginationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   pageInfo: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   historyTitle: {
//     marginTop: 20,
//     fontWeight: 'bold',
//   },
//   historyItem: {
//     color: '#007bff',
//     marginTop: 5,
//   },
// });

// export default HomeScreen;




// import { useEffect, useState } from 'react';
// import { getAuth, signOut } from "firebase/auth";
// import { View, Text, TextInput, FlatList, ActivityIndicator, Pressable, Image, Button, StyleSheet, Alert } from 'react-native';
// import { db } from '../firebase';
// import { fetchImages } from '../constants/api';
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { useRouter } from "expo-router";

// const HomeScreen = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1); 
//   const [totalPages, setTotalPages] = useState(1); 
//   const [searchHistory, setSearchHistory] = useState([]);
//   const imagesPerPage = 10;
//   const auth = getAuth(); 
//   const router = useRouter();

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         Alert.alert("Success", "You have been logged out.");
//         router.push("/");
//       })
//       .catch((error) => {
//         Alert.alert("Error", error.message);
//       });
//   };

//   // Store search query to Firebase and reload history
//   const fetchAndStoreSearchHistory = async (query) => {
//     try {
//       await addDoc(collection(db, "searchHistory"), {
//         query,
//         timestamp: new Date(),
//       });
//       loadSearchHistory();
//     } catch (error) {
//       console.error("Error storing search history: ", error);
//     }
//   };

//   // Load search history from Firebase
//   const loadSearchHistory = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "searchHistory"));
//       const history = querySnapshot.docs.map(doc => doc.data().query);
//       setSearchHistory(history);
//     } catch (error) {
//       console.error("Error loading search history: ", error);
//     }
//   };

//   // Load images based on the search query and page number
//   const loadImages = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchImages(page, searchQuery, imagesPerPage);
//       setImages(data.results);
//       setTotalPages(Math.ceil(data.total / imagesPerPage)); 
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim() === '') {
//       Alert.alert('Error', 'Please enter a valid search term.');
//       return;
//     }
//     setImages([]); // Clear existing images for the new search
//     setPage(1); // Reset to the first page
//     fetchAndStoreSearchHistory(searchQuery); // Store the search query
//     loadImages(); // Load images based on the search
//   };

//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(page + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   // Load search history and images (if search query exists) on component mount
//   useEffect(() => {
//     loadSearchHistory(); // Fetch search history on mount
//   }, []);

//   useEffect(() => {
//     if (searchQuery) {
//       loadImages();
//     }
//   }, [page]);

//   return (
//     <View style={styles.container}>
//       <View>
//         <Pressable onPress={handleLogout} style={styles.logoutButton}>
//           <Text style={styles.logoutButtonText}>Log Out</Text>
//         </Pressable>
//       </View>
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search for images"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           onSubmitEditing={handleSearch}
//           style={styles.searchInput}
//         />
//         <Pressable onPress={handleSearch} style={styles.submitButton}>
//           <Text style={styles.submitButtonText}>Submit</Text>
//         </Pressable>
//       </View>
//       <FlatList
//         data={images}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: item.urls.small }} style={styles.image} />
//           </View>
//         )}
//       />
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       <View style={styles.paginationContainer}>
//         <Button title="Previous" onPress={handlePreviousPage} disabled={page === 1} />
//         <Text style={styles.pageInfo}>Page {page} of {totalPages}</Text>
//         <Button title="Next" onPress={handleNextPage} disabled={page === totalPages} />
//       </View>
//       <Text style={styles.historyTitle}>Search History:</Text>
//       {searchHistory.map((query, index) => (
//         <Text key={index} onPress={() => setSearchQuery(query)} style={styles.historyItem}>
//           {query}
//         </Text>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop: 40,
//     backgroundColor: '#fff',
//   },
//   logoutButton: {
//     backgroundColor: '#ff5c5c',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//   },
//   submitButton: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     marginLeft: 10,
//     borderRadius: 5,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   imageContainer: {
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//   },
//   paginationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   pageInfo: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   historyTitle: {
//     marginTop: 20,
//     fontWeight: 'bold',
//   },
//   historyItem: {
//     color: '#007bff',
//     marginTop: 5,
//   },
// });

// export default HomeScreen;














import { useEffect, useState, useRef } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { View, Text, TextInput, FlatList, ActivityIndicator, Pressable, Animated, StyleSheet, Alert } from 'react-native';
import { db } from '../firebase';
import { fetchImages } from '../constants/api';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const [searchHistory, setSearchHistory] = useState([]);
  const imagesPerPage = 10;
  const auth = getAuth(); 
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;  // To track scroll position

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert("Success", "You have been logged out.");
        router.push("/");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  const fetchAndStoreSearchHistory = async (query) => {
    await addDoc(collection(db, "searchHistory"), {
      query,
      timestamp: new Date(),
    });
    loadSearchHistory();
  };

  const loadSearchHistory = async () => {
    const querySnapshot = await getDocs(collection(db, "searchHistory"));
    const history = querySnapshot.docs.map(doc => doc.data().query);
    setSearchHistory(history);
  };

  const loadImages = async () => {
    setLoading(true);
    try {
      const data = await fetchImages(page, searchQuery, imagesPerPage);
      setImages(data.results);
      setTotalPages(Math.ceil(data.total / imagesPerPage)); 
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch images. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      Alert.alert('Error', 'Please enter a valid search term.');
      return;
    }
    setImages([]);
    setPage(1);
    fetchAndStoreSearchHistory(searchQuery);
    loadImages();
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      loadImages();
    }
  }, [page]);

  const renderImageItem = ({ item, index }) => {
    const inputRange = [
      -1, 
      0, 
      index * 200, 
      (index + 2) * 200, // Define when to start and stop animation based on item position
    ];

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, 1, 0],
    });

    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [50, 50, 0, -50],
    });

    return (
      <Animated.View style={[styles.imageContainer, { opacity, transform: [{ translateY }] }]}>
        <Animated.Image source={{ uri: item.urls.small }} style={styles.image} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </Pressable>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for images"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          style={styles.searchInput}
        />
        <Pressable onPress={handleSearch} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </Pressable>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {!loading && images.length === 0 && (
        <Text style={styles.noResultsText}>No results found. Try a different search.</Text>
      )}
      <Animated.FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={renderImageItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
      <View style={styles.paginationContainer}>
        <Pressable onPress={handlePreviousPage} disabled={page === 1} style={styles.paginationButton}>
          <Text>Previous</Text>
        </Pressable>
        <Text style={styles.pageInfo}>Page {page} of {totalPages}</Text>
        <Pressable onPress={handleNextPage} disabled={page === totalPages} style={styles.paginationButton}>
          <Text>Next</Text>
        </Pressable>
      </View>
      <Text style={styles.historyTitle}>Search History:</Text>
      {searchHistory.map((query, index) => (
        <Text key={index} onPress={() => setSearchQuery(query)} style={styles.historyItem}>
          {query}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  logoutButton: {
    backgroundColor: '#ff5c5c',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    marginLeft: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  paginationButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  pageInfo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyTitle: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  historyItem: {
    color: '#007bff',
    marginTop: 5,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
});

export default HomeScreen;
