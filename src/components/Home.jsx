import React, { useEffect, useReducer, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Blog from './Blog'

import { reducer, initialState } from '../reducer'
import { api } from '../api'
import { ActionTypes } from '../reducer/actionTypes'
import { MoonLoader } from 'react-spinners'


const Home = () => {

    const [state, disptch] = useReducer(reducer, initialState)

    const [ isloading , setIsloading ] = useState(false)

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    


    const fetchBLogs = async () => {
        setIsloading(true)
        await delay(1000);
        const res = await api.get('/blogs')
            .catch(e => console.log(e.message))

        disptch({ type: ActionTypes.FETCH_BLOGS, payload: res.data })
        setIsloading(false)
    }

    useEffect(() => {
        fetchBLogs()
    }, [])

    return (
        <Container className='pt-5 my-4'>
            {
                isloading ? 
                <div className='flex d-flex py-5 justify-content-center align-items-center'>
                <MoonLoader color="#36d7b7"/> </div>:
                <Row>

                {
                    state.blogs.map((blog) => (
                        
                            <Col key={blog.id} sm="12" md="6" lg="3" className='my-2'>
                                <Blog blog={blog}/>
                            </Col>
                    
                    ))
                }

            </Row>
            }
           

        </Container>
    )
}

export default Home