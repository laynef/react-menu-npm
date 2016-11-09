/**
* @Author: Layne Faler <laynefaler>
* @Date:   11-05-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 11-08-2016
*/

import React from 'react';
import { Router, Route, Link } from 'react-router';

var Menu = React.createClass({
  propTypes: {
    menuList: React.PropTypes.array.isReqired
  },
  render: function() {

    var MenuElements = menuList.map(function(e,i,a) {
      var link = e.replace(/[^a-zA-Z]/g, '').toLowerCase();
      if (e === "Home") link = "";
      return (
        <li>
          <Link to={"/" + link}>{e}</Link>
        </li>
      );
    });

    return (
      <div id="menu">
        <ul>
          <MenuElements menuList={this.props.MenuList} />
        </ul>
      </div>
    );
  }
});

module.exports = Menu;
