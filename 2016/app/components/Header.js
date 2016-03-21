import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import constants from 'helpers/constants'
import Button from 'components/Button'
import Newsletter from 'components/Newsletter'

export default class Header extends Component {
  render() {
    let isHomeScreen = this.context.router.isActive('/', true)
    return (
      <header className={"Header" + (isHomeScreen ? "" : " Header--padded")}>
      {isHomeScreen ? (
        <div className="Home__Header">
          <div className="Home__Header__Wrapper">
            <div className="Home__Header__Content">
              <h1>August 25-26 in Salt Lake City, UT</h1>
              <p>
                Facebook's ReactJS has taken client side development by storm.
                From single-page apps, to server rendering, to native mobile, to apps on your TV, ReactJS is everywhere.
                Come find out what makes it so incredible.
              </p>
              <div className="Home__Header__Buttons">
                <Button href={constants.Links.TICKET_SALES} className="large">Register Now</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button href={constants.Links.PROPOSAL_FORM} className="large transparent">Submit Proposal</Button>
              </div>
              <ul className="Home__Header__Nav navigation">
                <li><Link to="/speakers">Speakers</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/venue">Venue</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
                <li><Link to="/conduct">Conduct</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <img className="Home__Header__ReactLogo" src="assets/img/ReactLogo.svg"/>
          </div>
          <div className="Home__Header__Newsletter">
            <Newsletter/>
          </div>
        </div>
      ) : (
        <div>
          <div className="Header__Logo col col-2">
          </div>
          <div className="Header__Nav__Wrapper col col-6 align-right">
            <ul className="Header__Nav navigation">
              <li><Link activeClassName="active" to="/speakers">Speakers</Link></li>
              <li><Link activeClassName="active" to="/schedule">Schedule</Link></li>
              <li><Link activeClassName="active" to="/venue">Venue</Link></li>
              <li><Link activeClassName="active" to="/sponsors">Sponsors</Link></li>
              <li><Link activeClassName="active" to="/conduct">Conduct</Link></li>
              <li><Link activeClassName="active" to="/about">About</Link></li>
            </ul>
            <Button href={constants.Links.TICKET_SALES} className="medium">Tickets</Button>
          </div>
        </div>
      )}
      </header>
    )
  }
}

Header.contextTypes = {
  router: PropTypes.object
}
