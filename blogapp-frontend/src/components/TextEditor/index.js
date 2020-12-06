import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import '../../App.css';

const TextEditor = ({handleContentChange}) => {

    const [content, setContent] = useState('');

    useEffect(()=>{
        handleContentChange(content)
    },[content])


    const handleChange = (value) => {
        console.log("vallluueee--> ", value);
        setContent(value)
        // handleContentChange(value);
    }

    const modules = {
        toolbar: {
            container: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean'], ['code-block']
            ],
        },
        clipboard: {
            matchVisual: false,
        },
    }

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'code-block',
    ]

    return (
        <div className="App">
            <ReactQuill
                value={content}
                theme="snow"
                onChange={handleChange}
                modules={modules}
                formats={formats}
            />
        </div>
    );
}


export default TextEditor;
