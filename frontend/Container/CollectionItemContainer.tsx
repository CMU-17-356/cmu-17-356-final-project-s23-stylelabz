import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RenderHtml from 'react-native-render-html';

const CollectionItem = (props: any) => {
    const { width } = useWindowDimensions();
    const { route } = props
    const {params: data} = route;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri: data.imgLink}} style={styles.image} resizeMode='contain'/>
            <Text>{data.ageGroup}</Text>
            <Text>{data.brand}</Text>
            <Text>{data.category}</Text>
            <Text>{data.color}</Text>
            <RenderHtml
                contentWidth={width}
                source={{html: data.description}}
            />
        </ScrollView>
    );
};

export default CollectionItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        height: 400,
        width:300
    }
});
