import { View, Image, FlatList, Linking, StyleSheet } from "react-native";



function ShowDistrictArea(getEczaneListe) {

    return <View style={styles.showArea}>

        {getEczaneListe.length == 0 ? <View style={styles.bosView}>
            <Image
                source={require('../assets/eczane.png')}
            />
        </View>
            :
            <FlatList data={getEczaneListe.data}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    var latitudeMap = item.latitude
                    var longitudeMap = item.longitude
                    var phoneNumber = item.Telefon


                    return <View style={styles.eczaneAlani}>

                        <View style={styles.eczaneAdiAlani}>
                            <Text style={styles.eczaneAdi}>{item.EczaneAdi}</Text>
                        </View>

                        <View style={styles.eczaneAdresiAlani}>
                            <Text style={styles.eczaneAdresi}>{item.Adresi}</Text>
                        </View>

                        <View style={styles.eczaneAdresiAlani}>
                            <Text onPress={() => Linking.openURL(`tel:${phoneNumber}`)} style={styles.eczaneTelefon}>{item.Telefon}</Text>
                        </View>

                        <View style={styles.eczaneKonumuAlani}>
                            {
                            //Google MAPS GEO ücretlendirme istediği için map özelliği yorum satırına atıldı, APIKEY alındığı vakit sorunsuz çalışmaktadır.
                            /*<MapView
                                    onPress={(e) => {
                                        Linking.openURL('https://www.google.com/maps/dir//' + latitudeMap + ',' + longitudeMap);
                                    }}
                                    provider={PROVIDER_GOOGLE}
                                    style={styles.map}
                                    region={{
                                        latitude: latitudeMap,
                                        longitude: longitudeMap,
                                        latitudeDelta: 0.01,
                                        longitudeDelta: 0.01,
                                    }}>
                                    <Marker coordinate={{
                                        latitude: latitudeMap,
                                        longitude: longitudeMap,
                                        latitudeDelta: 0.01,
                                        longitudeDelta: 0.01,
                                    }} />
                                </MapView>*/}
                        </View>

                    </View>
                }}
            />}
    </View>



}

export default ShowDistrictArea;

const styles = StyleSheet.create({
    showArea: {
        backgroundColor: '#c4161c',
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 15,
        overflow: "visible",
        zIndex: 0,
    },
    titleText: {
        fontSize: 32,
        marginVertical: 15,
        color: '#000'
    },

    cityArea: {
        marginHorizontal: 50,
        overflow: "visible"
    },
    cityPicker: {
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        zIndex: 1000,

    },



    eczaneAlani: {

        flexDirection: 'column',
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 10,
        zIndex: 1,

    },

    eczaneAdi: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    eczaneAdresi: {
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 15,

    },
    eczaneTelefon: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,

    },
    eczaneKonumuAlani: {

        backgroundColor: 'black',
        height: 200,

    },

    map: {
        height: 200,

    },

    bosView: {
        justifyContent: 'center',
        alignItems: 'center',

    }
})