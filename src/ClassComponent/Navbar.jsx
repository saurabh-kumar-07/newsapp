import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }
  getInputData(e){
    this.setState({search:e.target.value})
  }
  postData(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-danger sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/" onClick={()=>{
              this.props.changeSearch('')
              this.setState({search:""})
            }}>NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light active" aria-current="page" to="/" onClick={()=>{
                    this.props.changeSearch('')
                    this.setState({search:""})
                  }}>All</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/politics" onClick={()=>{
                    this.props.changeSearch('')
                    this.setState({search:""})
                  }}>Politics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/crime" onClick={()=>{
                    this.props.changeSearch('')
                    this.setState({search:""})
                  }}>Crime</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/education" onClick={()=>{
                    this.props.changeSearch('')
                    this.setState({search:""})
                  }}>Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/entertainment" onClick={()=>{
                    this.props.changeSearch('')
                    this.setState({search:""})
                  }}>Entertainment</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Other
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/science" onClick={()=>{
                      this.props.changeSearch('')
                      this.setState({search:""})
                    }}>Science</Link></li>
                    <li><Link className="dropdown-item" to="/technology" onClick={()=>{
                      this.props.changeSearch('')
                      this.setState({search:""})
                    }}>Technology</Link></li>
                    <li><Link className="dropdown-item" to="/sports" onClick={()=>{
                      this.props.changeSearch('')
                      this.setState({search:""})
                    }}>Sports</Link></li>
                    <li><Link className="dropdown-item" to="/cricket" onClick={()=>{
                      this.props.changeSearch('')
                      this.setState({search:""})
                    }}>Cricket</Link></li>
                    <li><Link className="dropdown-item" to="/covid-19" onClick={()=>{
                      this.props.changeSearch('')
                      this.setState({search:""})
                    }}>Covid-19</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/jokes" onClick={()=>{
                      this.props.changeSearch('')
                      this.setState({search:""})
                    }}>Jokes</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage('hi')}>Hindi</button></li>
                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage('en')}>English</button></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={(e)=>this.postData(e)}>
                <input className="form-control me-2" type="search" name='search' onChange={(e)=>this.getInputData(e)} placeholder="Search" aria-label="Search" value={this.state.search} />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
