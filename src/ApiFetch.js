import axios, { Axios } from 'axios';


function fetchilcedata(itemCity) {
    let tempData = [];
    fetch('https://www.nosyapi.com/apiv2/pharmacy/city?city=' + itemCity + '&apikey=kJkEYbnf8aoAYB470O8FYiIeWaKayeMpq9m8zldHcbiIhMl0LQvuKXno7zTa')
        .then((response) => response.json())
        .then(
            (json) => {
                tempData.push(json.data);
            }
        )
        
        return tempData;
        

};

function fetcheczanedata(cityName, countyName) {
    let tempData = [];
    axios.get('https://www.nosyapi.com/apiv2/pharmacyLink?city=' + cityName + '&county=' + countyName + '&apikey=kJkEYbnf8aoAYB470O8FYiIeWaKayeMpq9m8zldHcbiIhMl0LQvuKXno7zTa')
        .then(res => {
            this.setState(() => {
                tempData = res.data;
            })
        });
    return tempData;
};

function dataEdit(unList) {
    let showListItemTemp = [];
    unList.map((item,
        index) => {
        const
            temp = {
                label:
                    item.ilceAd,
                value:
                    item.ilceSlug,
            };
        showListItemTemp.push(temp);
    });
    return showListItemTemp;
};

export default { fetcheczanedata, fetchilcedata, dataEdit };