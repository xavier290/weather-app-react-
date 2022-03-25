import { Fragment, useState } from "react";

//components
import Loader from './Loader';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
  
const ErrorHandler = ({message}) => {
    const [show, setShow] = useState(true);
    
    if  (message == null) return <div></div>;

    return (
        <div className="loader">
            {(show == true) ? (
                <Fragment>
                    <Alert variant="danger" onClose={() => setShow(false)}>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            {message}
                        </p>
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close
                            </Button>
                        </div>
                    </Alert>
                    <Loader />
                </Fragment>
            ) : (
                <Loader />
            )}
        </div>
    ); 
  }

  export default ErrorHandler;