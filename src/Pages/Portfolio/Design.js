import React from "react";
import {Col, Container, Spinner} from "reactstrap";
import {Link} from "react-router-dom";
import DesignData from "../../Data/DesignData"

class Design extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fileStatus: props.src ? 'loading' : 'no image to load'
        }
    }

    setFileStatus(status) {
        this.setState({ fileStatus: status })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.src != nextProps.src){
            this.setState({
                fileStatus: nextProps.src ? 'loading' : 'no image to load'
            })
        }
    }
    render() {
        return (
            <Container className="d-flex row ml-auto mr-auto">
                {Object.keys(DesignData).map(key => (
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center flex-column align-items-start">
                        {(() => {
                            var status = {
                                'loading': () => {
                                    return (<Spinner/>)
                                },
                                'loaded': () => {
                                    return null
                                },
                                'failed to load': () => {
                                    return (<p>{this.state.fileStatus}</p>)
                                },
                                'no image to load': () => {
                                    return (<p>{this.state.fileStatus}</p>)
                                },
                            };
                            return status[this.state.fileStatus]()
                        })()}
                        <img onLoad={this.setFileStatus.bind(this, 'loaded')}
                             onError={this.setFileStatus.bind(this, 'failed to load')}
                             className="img-coverphoto"
                             src={DesignData[key].portfolioImage}
                             alt={DesignData[key].name} key={key} height={500}/>
                        <div><h2 className="title">{DesignData[key].title}</h2><p>{DesignData[key].description}</p>
                            <ul className="tags">{DesignData[key].tags.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })}</ul>
                        </div>
                        <button className="btn btn-primary"><Link to={DesignData[key].link}>Read
                            more</Link></button>
                    </Col>
                ))}
            </Container>
        );
    }
}


export default Design;