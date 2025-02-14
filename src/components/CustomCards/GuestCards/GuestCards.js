import * as React from 'react';
import { View, Text, ActivityIndicator ,TouchableOpacity} from 'react-native';

////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';


    //////////////app pakages/////////////
import {
    Avatar,
} from 'react-native-paper';

import { BASE_URL } from '../../../utills/ApiRootUrl';

const GuestCards = (props) => {
    return (
        <View style={styles.card}>

                    <Avatar.Image
                    source={{uri:BASE_URL+props.guestlogo}}
                     // source={require('../../../assets/dataimages/user.png')}
                        size={65}
                        style={{backgroundColor:Colors.appgreycolor}}
                    />
                    <View style={{
                        justifyContent: "center", alignContent: 'center',
                      marginLeft:wp(5),width:wp(60)
                    }}>
                        <Text style={styles.itemmaintext}>{props.guestname}
                        </Text>
                        <Text style={styles.itemsubtext}>{props.guestemail}
                        </Text>
                        <Text style={styles.itemsubtext}>{props.guestgender}
                        </Text>

                    </View>
                    {props.type === "CreateTrip"?
                            <TouchableOpacity 
                            style={styles.docimagechangeview}
                            onPress={ props.onpresstype }>
                    <Text style={styles.docimagechangetext}>Change</Text>
                    </TouchableOpacity>
                :null}
            
            </View>



    )
};

export default GuestCards;