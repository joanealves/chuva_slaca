import React from 'react'
// import ReactDOM from "react-dom"

import { EditorState, Editor as DraftEditor } from "draft-js"
import "./Editor.styles.js"
import * as S from './Editor.styles'

//Editor Wrapper Component//
export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    updateEditorState(editorState) {
        this.setState({ editorState });
    }

    render() {

        console.log("EditorState: ", this.state.editorState);

        return (
            <S.EditorWrapper>
                <S.EditorContainer>
                    <DraftEditor
                        placeholder=""
                        editorState={this.state.editorState}
                        onChange={this.updateEditorState.bind(this)}
                    />
                </S.EditorContainer>
            </S.EditorWrapper>
        );
    }

}
// ReactDOM.render(<Editor />, document.getElementById("root"));