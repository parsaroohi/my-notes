import React, { useState, useContext } from "react";
import uuid from 'react-native-uuid'
import { StyleSheet } from 'react-native'
import { Button, TextArea, Form, Item, Input, Label, Text } from 'native-base'
import Layout from "../components/Layout";
import { NoteContent } from '../context/NoteContext'
import { strings } from "../locale/i18n";

const AddNoteScreen = (props) => {
    const [getTitle, setTitle] = useState('')
    const [getContent, setContent] = useState('')
    const context = useContext(NoteContent)

    const saveNote = () => {
        const note = {
            _id: uuid(),
            title: getTitle,
            content: getContext
        }
        console.log(note);
        context.addNote(note)
        props.navigation.navigate('Home')
    }

    return (
        <Layout title={strings('addHeaderTitle')} footer={
            <>
                <Button full onPress={saveNote}>
                    <Text>{strings('saveNote_btn')}</Text>
                </Button>
                <Button full onPress={() => props.navigation.navigate('Home')}>
                    <Text>{strings('cancel_btn')}</Text>
                </Button>
            </>
        }>
            <Form style={styles.container}>
                <Item>
                    <Label>{strings('titleInput')}:</Label>
                    <Input value={getTitle} onChange={title => setTitle(title)} />
                    <TextArea style={styles.container}
                        value={getContent} onChange={content => setContent(content)} bordered
                        placeholder={strings('contentInput')} />
                </Item>
            </Form>
        </Layout>
    )
}

export default AddNoteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})