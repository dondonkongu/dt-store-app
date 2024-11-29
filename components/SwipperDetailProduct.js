import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')


const SwipperDetailProduct = ({img}) => {

  const renderPagination = (index,total) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{total}</Text>
        </Text>
      </View>
    )
  }

    return (
      <Swiper
      style={styles.wrapper}
      renderPagination={renderPagination}
      loop={false}
  
>
        {img.map((item, index) => (
        <View style={styles.slide} key={item.id}>
          <Image
            style={styles.image}
            source={{ uri: item.url }}
            resizeMode="cover"
          />
        </View>
      ))}
       
    </Swiper>
    )
}

export default SwipperDetailProduct

const styles = StyleSheet.create({
    wrapper: {height: 600},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        flex: 1
    },
    paginationStyle: {
        position: 'absolute',
        backgroundColor:'#fff',
        padding:5,        
        borderRadius:5,
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: '#000',
        fontSize: 15
    }

})