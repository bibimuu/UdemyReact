import React, { Component } from 'react';
import {connect} from "react-redux";
import _ from "lodash";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import FloatingActionButton from "material-ui/FloatingActionButton/";
import ContentAdd from "material-ui/svg-icons/content/add";
import { Link } from "react-router-dom";

import {readEvents}  from "../actions";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  // renderEvents() {
  //   return 
  //   this.props.events.map(event => 
  //     <tr key={event.id}>
  //       <td>{event.id}</td>
  //       <td>{event.title}</td>
  //       <td>{event.body}</td>
  //     </tr>
  //   )
  // }

  render(){
    const style = {
      position: "fixed",
      right:12,
      bottom:12
    }
    return(
      <>
      <FloatingActionButton style={style} containerElement={<Link to="/events/new"/>}>
        <ContentAdd/>
      </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll = {false} adjustForCheckbox={false} >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = ({readEvents})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
