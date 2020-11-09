import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,    
    TextInput,
    Button,
   
} from "react-native";
import { Formik } from 'formik';
import * as yup from "yup";

const validation=yup.object({
    SYS:yup.string()
        .required("required")
        .matches(/^\d+$/)
        .test("is num","Only number",(val)=>{
            return  parseInt(val)>0 && parseInt(val)<200;
        }),
    DIA:yup.string()
        .required("required")
        .test("is num","Only number",(val)=>{
            return parseInt(val)>0 && parseInt(val)<200;
        })
})


const Formview = ({uploadData,onPress}) => (
    <View style={styles.container}>
        <Formik
        initialValues={{SYS:'',DIA:''}}
        validationSchema={validation}
        onSubmit={(values,actions)=>{
            actions.resetForm();            
            uploadData(values);
            console.log(values);
            onPress();
        }}
        >
            {(props)=>(
                
                    <View>
                        <TextInput style={styles.input}
                        placeholder="Give your Sys BP"
                        placeholderTextColor="#d3d3d3" 
                        selectionColor={'white'}
                        onChangeText={props.handleChange('SYS')}
                        value={props.values.SYS}
                        keyboardType="numeric"
                        keyboardAppearance="dark"
                        />
                        <TextInput style={styles.input}
                        placeholder="Give your DIA BP"
                        placeholderTextColor="#d3d3d3" 
                        selectionColor={'white'}
                        onChangeText={props.handleChange('DIA')}
                        value={props.values.DIA}
                        keyboardType="numeric"
                        keyboardAppearance="dark"
                        />
                        <View style={{padding:10}}>
                        <Button  title="submit" onPress={props.handleSubmit}/>     
                        </View>                       
                    </View>
                
            )}
        </Formik>
    </View>
    )
export default Formview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        justifyContent: 'center'
    },
    input:{
        borderWidth:2,
        borderColor:"white",
        borderRadius:6,
        padding:10,
        margin:10,
        color:"#fff",
        
    }
});