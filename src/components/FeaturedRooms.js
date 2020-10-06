import React, { Component } from "react";
import { RoomContext } from "../context";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    

    return (
      <div>
        from featured rooms
      </div>
    );
  }
}
