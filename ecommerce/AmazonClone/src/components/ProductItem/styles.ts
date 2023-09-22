/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        marginVertical: 5,
    },
    imgcontainer: {
        flex: 2,
    },
    image: {
        height: 150,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    details: {
        padding: 10,
        flex: 3,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    },
    price: {
        fontWeight: 'bold',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    oldprice: {
        marginLeft: 3,
        fontSize: 12,
        textDecorationLine: 'line-through',
    },
})