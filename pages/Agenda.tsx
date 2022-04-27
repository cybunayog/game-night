import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import moment from "moment";
import * as AddCalendarEvent from 'react-native-add-calendar-event';


//import Typography from '../components/Typography';


//****************************************************************************************************************** */

//  const Agenda = Agenda.create({
//   const [items, setItems] = useState[]);

// return <View>
//   <Agenda
//     items={this.state.items}
//     loadItemsForMonth={this.loadItems}
//     selected={'2017-05-16'}
//   </View>;

// })

// export default Agenda;

const TIME_NOW_IN_UTC = moment.utc();

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Schedule = () => {
    const [items, setItems] = useState({});

    // const currentDate=()=>{
    //     var date = new Date().getDate();
    //     var month = new Date().getMonth() + 1;
    //     var year = new Date().getFullYear();

    //   setCurrentDate(date + '-' + month + '-' + year);
    // } 

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    // for (let j = 0; j < numItems; j++) {
                    //     items[strTime].push({
                    //         name: 'Item for ' + strTime + ' #' + j,
                    //         height: Math.max(50, Math.floor(Math.random() * 150)),
                    //     });
                    // }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text>{item.name}</Text>
                            <Avatar.Text label="J" />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };
    // const currentDate=()=>{
    //     var date = new Date().getDate();
    //     var month = new Date().getMonth() + 1;
    //     var year = new Date().getFullYear();

    //   Alert.alert(date + '-' + month + '-' + year);
    // }

    // var date = new Date().getDate(); //To get the Current Date
    // var month = new Date().getMonth() + 1; //To get the Current Month
    // var year = new Date().getFullYear();
    //myDate: Date;


    let selectedDate = new Date().toString()

    return (
        <View style={{ flex: 3, width: 375 }}>
            <Agenda
                //items={items}

                items={{

                    '2022-05-10':
                        [{
                            day: '2022-05-10',
                            name: 'Starbucks\n809 N Azusa Ave. \nHost: Danielle Dominguez \nSeats Open: 5/8 \nTime: 7:30pm',
                            height: 80
                        }]

                }}


                loadItemsForMonth={loadItems}
                selected={selectedDate}
                //selected={'2022-02-22'}
                //initialDate='myDate'
                renderItem={renderItem}

                marked
            />
        </View>
    );
};

export default Schedule;


  //********************************************************************************************************* */
