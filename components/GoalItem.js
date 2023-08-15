import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {

    return (
        <View style={styles.goalsItem}>
            <Pressable android_ripple={{ color: '#dddddd' }} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed})=> pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
        </View >
    );
}

export default GoalItem
const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: '#fff'
    },
    pressedItem:{
        opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: '#fff'
    }
})