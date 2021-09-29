import React, { useCallback, useContext, useState } from "react";
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'
import { useFocusEffect } from '@react-navigation/native'
import Layout from "../components/Layout";
import NoteContent from "../components/NoteContent";
import { strings } from "../locale/i18n";

const HomeScreen = ({ props }) => {
    const [notes, setNote] = useState([])
    const context = useContext(NoteContent)

    useFocusEffect(
        useCallback(() => {
            setNote(context.getNotes)
        }, [context.getNotes])
    )

    return (
        <Layout title={strings('mainHeaderTitle')} footer={
            <Button full onPress={() => props.navigation.navigate('Add')}>
                <Text style={{ fontFamily: 'Vazir' }}>{strings("addNote_btn")}</Text>
            </Button>
        } >
            <FlatList data={notes} keyExtractor={note => note._id}
                renderItem={note => (
                    <TouchableOpacity onPress={() =>
                        props.navigation.navigate('Update', { id: note.item._id })}>
                        <NoteContent note={{ ...note }} />
                    </TouchableOpacity>
                )} />
        </Layout>
    )
}

export default HomeScreen