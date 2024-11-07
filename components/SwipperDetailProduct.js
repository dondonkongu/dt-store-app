import { StyleSheet, Text, View, Image, Dimensions} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const img =[
    {id:1,link:'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/5283b2af-8bb8-4d6d-afc8-a267998edf5f.jpg'},
    {id:2, link:'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/f5316516-74df-44c2-8814-583f32a19cff.jpg'},
    {id:2, link:'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/09c33213-e804-48d3-af45-86d068f8b214.jpg'},
  
  ]

const SwipperDetailProduct = () => {

    const renderPagination = (index, total, context) => {
        return (
          <View style={styles.paginationStyle}>
            <Text style={{ color: 'black' }}>
              <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
          </View>
        )
      }

    return (
        <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
        showsButtons={true}
        nextButton={<Text style={{ color: 'white',fontSize:50, }}>›</Text>}
        prevButton={<Text style={{ color: 'white',fontSize:50, }}>‹</Text>}
      >{img.map((item,index)=>{
        return(
            <View
            key={index}
            style={styles.slide}
           
          >
            <Image style={styles.image} source={{ uri:item.link }} />
          </View>
        )
        }
    )}

        
      
       
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