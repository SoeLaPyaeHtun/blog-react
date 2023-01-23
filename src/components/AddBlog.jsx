import React, { useReducer, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { set, useForm } from 'react-hook-form'
import { api } from '../api';
import { v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router';
import { reducer, initialState } from '../reducer'
import { ActionTypes } from '../reducer/actionTypes';

const AddBlog = () => {

    const { register, handleSubmit, watch, formState : {errors}} = useForm();

    const [ isloading , setIsloading ] = useState(false)

    const nagivate = useNavigate();

    const [ state, dispatch ] = useReducer(reducer, initialState)

    const onSubmit = async (data) => {
        setIsloading(true)
        data = {id : uuidv4(), ...data}
        const res = await api.post('/blogs',data)

        dispatch({type: ActionTypes.ADD_BLOG, payload: res.data})
        setIsloading(false)
        nagivate('/')
    }

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{
            marginTop: 100
        }}>
            <Row className='w-75'>
                <Col>
                    <Card className='mx-auto'>
                        <Card.Header>Add New Blog</Card.Header>

                        <Card.Body>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="blog.title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="title name" {...register("title", {required: true})}/>
                                </Form.Group>
                                {errors.title && <p className='text-danger' role='alert'>Title is required</p>}
                                <Form.Group className="mb-3" controlId="blog.description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} {...register("description", {required : true, minLength: 20})} />
                                </Form.Group>
                                {errors.description && <p className='text-danger' role='alert'>Description is required and at least must be 200 character</p>}
                
                                {isloading ? 
                                <Button type='submit' className='btn btn-primary'>Add Blog</Button>
                                    :  <Button type='submit' className='btn btn-primary'>Add Blog</Button>
                                }

                            </Form>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>

        </Container>
    )
}

export default AddBlog