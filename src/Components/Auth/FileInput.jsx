import React from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';
import Dropzone, { useDropzone } from 'react-dropzone';

const DropPlace = styled.div`
    height: 100px;
    border-radius: 10px;
    border: 2px solid green;
`;
const ItemList = styled.li``;
const ListWrapper = styled.div``;
const List = styled.ul`
    height: 40px;
    background-color: #ccc;
`;
function Basic(props) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map((file) => (
        <ItemList key={file.path}>
            {file.path} - {file.size} bytes
        </ItemList>
    ));

    return (
        <section className='container'>
            <DropPlace {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </DropPlace>
            <ListWrapper>
                <h4>Files</h4>
                <List>{files}</List>
            </ListWrapper>
        </section>
    );
}

const FileInput = ({ control, name }) => {
    // const { acceptedFiles, getInputProps, getRootProps } = useDropzone();
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ field: {onChange, onBlur, value} }) => {
                console.log(value);
                return (
                    <>
                        <Dropzone onDrop={() => {}}>
                            {({ acceptedFiles, getRootProps, getInputProps }) => (
                                    <>
                                        <DropPlace {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p>Кидайте файлы сюда</p>
                                        </DropPlace>
                                        <ListWrapper acceptedFiles={acceptedFiles}>
                                            
                                        </ListWrapper>
                                    </>
                                )
                            }
                        </Dropzone>
                    </>
                );
            }}></Controller>
        // <Basic />
    );
};

export default FileInput;
