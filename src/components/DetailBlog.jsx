import React, { useEffect, useReducer } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { api } from '../api'
import { reducer, initialState } from '../reducer'
import { ActionTypes } from '../reducer/actionTypes'

const DetailBlog = () => {

    const { blogid } = useParams()

    const [state , dispatch ]  = useReducer(reducer, initialState)

    const selectBlog = async () => {
            const res = await api.get(`blogs/${blogid}`)

            dispatch({type: ActionTypes.SELECTED_BLOG, payload: res.data})

            console.log(res.data)

    }

    useEffect(() => {
        selectBlog()
    },[blogid])

  return (
    <Container className='pt-5 my-4'>
            <h1>{state.blog.title}</h1>
            <h4>{state.blog.description}</h4>
            <Link className='btn btn-primary' to='/'>back to home</Link>
    </Container>
  )
}

export default DetailBlog