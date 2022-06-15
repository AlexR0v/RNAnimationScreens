import { Loading }                                                         from '@/ui'
import React, { FC, useEffect, useRef, useState }                          from 'react'
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { GALLERY_API_KEY }                                                 from 'react-native-dotenv'

const API_URL = 'https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=100'
const IMAGE_SIZE = 80
const SPACING = 10

const { width, height } = Dimensions.get('window')

const fetchImages = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `${GALLERY_API_KEY}`
      }
    })
    const { photos } = await response.json()
    return photos
  } catch (e) {
    console.log(e)
  }
}

interface IGallery {

}

const Gallery: FC<IGallery> = () => {

  const [images, setImages] = useState<any[] | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImages()
      setImages(data)
    }
    fetchData()
  }, [])

  const topRef = useRef<FlatList>(null)
  const thumbRef = useRef<FlatList>(null)

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index)
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true
    })
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - (width / 2 - IMAGE_SIZE / 2),
        animated: true
      })
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true
      })
    }
  }

  if (!images) {
    return <Loading size={70} />
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <FlatList
        ref={topRef}
        keyExtractor={item => item.id.toString()}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={evt => {
          scrollToActiveIndex(Math.round(evt.nativeEvent.contentOffset.x / width))
        }}
        renderItem={({ item }) => (
          <View style={{ width, height }}>
            <Image
              source={{ uri: item.src.portrait }}
              style={StyleSheet.absoluteFillObject}
            />
          </View>
        )}
      />
      <FlatList
        ref={thumbRef}
        keyExtractor={item => item.id.toString()}
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ position: 'absolute', bottom: IMAGE_SIZE }}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
            <Image
              source={{ uri: item.src.portrait }}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: 12,
                marginRight: SPACING,
                borderWidth: 2,
                borderColor: activeIndex === index ? '#ffffff' : 'transparent'
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Gallery


