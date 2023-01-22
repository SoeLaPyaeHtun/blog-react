import React, { useEffect, useReducer } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Blog from './Blog'

import { reducer, initialState } from '../reducer'
import { api } from '../api'
import { ActionTypes } from '../reducer/actionTypes'


const Home = () => {

    const [state, disptch] = useReducer(reducer, initialState)


    const fetchBLogs = async () => {
        const res = await api.get('/blogs')
            .catch(e => console.log(e.message))

        disptch({ type: ActionTypes.FETCH_BLOGS, payload: res.data })
    }

    useEffect(() => {
        fetchBLogs()
    }, [])

    return (
        <Container className='pt-5 my-4'>
            <Row>

                {
                    state.blogs.map((blog) => (
                        
                            <Col key={blog.id} sm="12" md="6" lg="3" className='my-2'>
                                <Blog blog={blog}/>
                            </Col>
                    
                    ))
                }

            </Row>

        </Container>
    )
}

export default Home