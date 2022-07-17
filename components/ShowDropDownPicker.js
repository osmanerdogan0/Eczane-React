import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState, Component } from 'react';
import ApiFetch from "../src/ApiFetch";
import ShowDistrictArea from './ShowDistrictArea';

function ShowDropDownPicker() {
    //Değişken tanımlamaları başlangıç
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Adana', value: 'adana' },
        { label: 'Adıyaman', value: 'adiyaman' },
        { label: 'Afyonkarahisar', value: 'afyonkarahisar' },
        { label: 'Ağrı', value: 'agri' },
        { label: 'Aksaray', value: 'aksaray' },
        { label: 'Amasya', value: 'amasya' },
        { label: 'Ankara', value: 'ankara' },
        { label: 'Antalya', value: 'antalya' },
        { label: 'Ardahan', value: 'ardahan' },
        { label: 'Artvin', value: 'artvin' },
        { label: 'Balıkesir', value: 'balikesir' },
        { label: 'Bartın', value: 'bartin' },
        { label: 'Batman', value: 'batman' },
        { label: 'Bayburt', value: 'bayburt' },
        { label: 'Bilecik', value: 'bilecik' },
        { label: 'Bingöl', value: 'bingol' },
        { label: 'Bitlis', value: 'bitlis' },
        { label: 'Bolu', value: 'bolu' },
        { label: 'Çanakkale', value: 'canakkale' },
        { label: 'Çankırı', value: 'cankiri' },
        { label: 'Çorum', value: 'corum' },
        { label: 'Denizli', value: 'denizli' },
        { label: 'Diyarbakır', value: 'diyarbakir' },
        { label: 'Düzce', value: 'duzce' },
        { label: 'Edirne', value: 'edirne' },
        { label: 'Elazığ', value: 'elazig' },
        { label: 'Erzincan', value: 'erzincan' },
        { label: 'Erzurum', value: 'erzurum' },
        { label: 'Eskişehir', value: 'eskisehir' },
        { label: 'Gaziantep', value: 'gaziantep' },
        { label: 'Giresun', value: 'giresun' },
        { label: 'Gümüşhane', value: 'gumushane' },
        { label: 'Hakkari', value: 'hakkari' },
        { label: 'Hatay', value: 'hatay' },
        { label: 'Iğdır', value: 'igdir' },
        { label: 'Isparta', value: 'isparta' },
        { label: 'İstanbul', value: 'istanbul' },
        { label: 'İzmir', value: 'izmir' },
        { label: 'Kahramanmaraş', value: 'kahramanmaras' },
        { label: 'Karabük', value: 'karabuk' },
        { label: 'Karaman', value: 'karaman' },
        { label: 'Kars', value: 'kars' },
        { label: 'Kastamonu', value: 'kastamonu' },
        { label: 'Kayseri', value: 'kayseri' },
        { label: 'Kilis', value: 'kilis' },
        { label: 'Kırıkkale', value: 'kirikkale' },
        { label: 'Kırklareli', value: 'kirklareli' },
        { label: 'Kırşehir', value: 'kirsehir' },
        { label: 'Kocaeli', value: 'kocaeli' },
        { label: 'Kütahya', value: 'kutahya' },
        { label: 'Malatya', value: 'malatya' },
        { label: 'Manisa', value: 'manisa' },
        { label: 'Mardin', value: 'mardin' },
        { label: 'Mersin', value: 'mersin' },
        { label: 'Muğla', value: 'mugla' },
        { label: 'Muş', value: 'mus' },
        { label: 'Nevşehir', value: 'nevsehir' },
        { label: 'Niğde', value: 'nigde' },
        { label: 'Ordu', value: 'ordu' },
        { label: 'Osmaniye', value: 'osmaniye' },
        { label: 'Rize', value: 'rize' },
        { label: 'Sakarya', value: 'sakarya' },
        { label: 'Samsun', value: 'samsun' },
        { label: 'Şanlıurfa', value: 'sanliurfa' },
        { label: 'Siirt', value: 'siirt' },
        { label: 'Sinop', value: 'sinop' },
        { label: 'Sivas', value: 'sivas' },
        { label: 'Şırnak', value: 'sirnak' },
        { label: 'Tekirdağ', value: 'tekirdag' },
        { label: 'Tokat', value: 'tokat' },
        { label: 'Trabzon', value: 'trabzon' },
        { label: 'Tunceli', value: 'tunceli' },
        { label: 'Uşak', value: 'usak' },
        { label: 'Van', value: 'van' },
        { label: 'Yalova', value: 'yalova' },
        { label: 'Yozgat', value: 'yozgat' },
        { label: 'Zonguldak', value: 'zonguldak' }
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([]);

    const [eczaneListe, setEczaneListe] = useState([]);
    //Değişken tanımlamaları bitiş

    //
    let tempCounty = [];

    ilceVeriAl = (veri) => {
        tempCounty.push(ApiFetch.fetchilcedata(veri)); 
        const tempList = ApiFetch.dataEdit(tempCounty);
        setItems2(tempList);
    };


    eczaneListeleme = (a, b) => {
        setEczaneListe(ApiFetch.fetcheczanedata(a, b));
    }


    //

    //Render
    return (
        <View style={styles.container}>

        <View style={styles.chooseArea}>


            <Text style={styles.titleText}>Nöbetçi Eczaneler</Text>
            <View style={styles.cityArea}>

                <DropDownPicker style={styles.cityPicker} containerStyle={{}}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Lütfen il seçiniz"
                    onSelectItem={(item) => {

                        ilceVeriAl(item.value);
                    }}
                />

            </View>

            <View style={styles.cityArea}>
                <DropDownPicker style={styles.cityPicker} containerStyle={{}}
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    placeholder="Lütfen ilçe seçiniz"
                    onChangeValue={(value) => {
                    }}
                    onSelectItem={(item) => {
                        const tempCity = value;
                        eczaneListeleme(tempCity, item.value);
                    }}
                />

            </View>

            
        </View>
        <ShowDistrictArea getEczaneListe={eczaneListe} />
        </View>


    );

}


/* React Native LifeCycle
export class ListelemeSayfasi extends Component {

    componentDidMount() {
        let tempCounty = [];

        ilceVeriAl = (veri) => {
            tempCounty.push(ApiFetch.fetchilcedata(veri));
            const tempList = ApiFetch.dataEdit(tempCounty);
            setItems2(tempList);
        };


        eczaneListeleme = (a, b) => {
            setEczaneListe(ApiFetch.fetcheczanedata(a, b));
        }
    }
    

    render() {
        return (

            <View style={styles.chooseArea}>


                <Text style={styles.titleText}>Nöbetçi Eczaneler</Text>
                <View style={styles.cityArea}>

                    <DropDownPicker style={styles.cityPicker} containerStyle={{}}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Lütfen il seçiniz"
                        onSelectItem={(item) => {

                            ilceVeriAl(item.value);
                        }}
                    />

                </View>

                <View style={styles.cityArea}>
                    <DropDownPicker style={styles.cityPicker} containerStyle={{}}
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                        placeholder="Lütfen ilçe seçiniz"
                        onChangeValue={(value) => {
                        }}
                        onSelectItem={(item) => {
                            const tempCity = value;
                            eczaneListeleme(tempCity, item.value);
                        }}
                    />

                </View>
            </View>


        );
    }
}
*/


export default ShowDropDownPicker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',

    },
    chooseArea: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "visible",
        zIndex: 500,

    },
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
});