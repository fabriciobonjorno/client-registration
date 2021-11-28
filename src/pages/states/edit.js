import React, { useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validationPost = yup.object().shape({
  name: yup.string().required().max(255),
  initials: yup.string().required().max(2)
})
function StateEdit() {
  const { id } = useParams()
  let history = useHistory()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationPost)
  })
  const onSubmit = data => axios.put(`http://api-registrations.herokuapp.com/api/v1/states/${id}`, data)
    .then(() => {
      console.log("Deu certo")
      history.push('/states/states')
    }).catch(() => {
      console.log("Deu erro")
    })

  useEffect(() => {
    axios.get(`http://api-registrations.herokuapp.com/api/v1/states/${id}`)
      .then((response) => {
        reset(response.data)
      })

  }, [])

  return (
    <Container>
      <div>
        <main>
          <div className="card-post">
            <Row className="mt-5 text-center"><h1>Edit State</h1></Row>
            <hr />
            <div className="card-body-post">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="col-md-4">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" name="name" {...register("name")} />
                    <p className={errors.name ? 'alert alert-danger' : 'd.none'}>{errors.name?.message}</p>
                  </Col>
                  <Col className="col-md-4">
                    <label className="form-label">Initials</label>
                    <input className="form-control" type="text" name="initials" {...register("initials")} />
                    <p className={errors.initials ? 'alert alert-danger' : 'd.none'}>{errors.initials?.message}</p>
                  </Col>
                  <Col className="col-md-4 mt-4">
                    <Button variant="secondary" type="submit">
                      Send
                    </Button>
                  </Col>
                </Row>
                <div className="btn-back">
                  <Link to='/states/states'>
                    <Button variant="secondary">
                      Back
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </main>

      </div>
    </Container>
  )
}
export default StateEdit