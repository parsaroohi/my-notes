import React, { useState, useContext, useEffect } from "react";
import { StyleSheet } from 'react-native'
import { Button, TextArea, Form, Item, Input, Label, Text } from 'native-base'
import Layout from "../components/Layout";
import { NoteContent } from '../context/NoteContext'
import { strings } from "../locale/i18n";

const UpdateNoteScreen = (props) => {
    const [note, setNote] = useState()
    const context = useContext(NoteContent)

    useEffect(() => {
        let noteIndex = context.getNotes.findIndex(n => n._id === props.route.params.id)
        if (noteIndex > -1) {
            setNote({
                _id: props.route.params.id,
                title: context.getNotes[noteIndex].title,
                content: context.getNotes[noteIndex].content
            })
        }
    }, [context.getNotes, props.route.params.id])

    const updateNote = () => {
        context.updateNote(note, props.route.params.id)
        props.navigation.navigate('Home')
    }

    const deleteNote = () => {
        context.deleteNote(props.route.params.id)
        props.navigation.navigate('Home')
    }

    if (!note) return <Text>Processing...</Text>

    return (
        <Layout title={strings('updateHeaderTitle')} footer={
            <>
                <Button full onPress={() => props.navigation.navigate('Home')}>
                    <Text>{strings('cancel_btn')}</Text>
                </Button>
                <Button full onPress={updateNote}>
                    <Text>{strings('editNote_btn')}</Text>
                </Button>
                <Button full onPress={deleteNote}>
                    <Text>{strings('deleteNote_btn')}</Text>
                </Button>
            </>
        }>
            <Form style={styles.container}>
                <Item>
                    <Label>{strings('titleInput')}:</Label>
                    <Input value={note.title} onChange={title => setNote({ title, content: note.content })} />
                    <TextArea style={styles.container}
                        value={note.content} onChange={content =>
                            setNote({ title: note.title, content })} bordered
                        placeholder={strings('contentInput')} />
                </Item>
            </Form>
        </Layout>
    )
}

export default UpdateNoteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})