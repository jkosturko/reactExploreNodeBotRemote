alert('test')
'use strict';
var RemoteController = React.createClass({
  render: function () {
    return(
    <div className="remoteController panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Remote Control</h3>
      </div>
      <div className="panel-body">
        <Buttons value="Left"/>
        <Buttons value="Right"/>
        <Buttons value="Forward"/>
        <Buttons value="Backward"/>
      </div>
    </div>
    );
  }
});

var Buttons = React.createClass({
  handleClick: function () {
    console.log('childer', this.props);

    socket.emit('click', { direction: this.state.value });
    socket.broadcast.emit('user connected');        
  },
  render: function () {
    return(
        <input type="button" className="btn btn-default btn-lg btn-block" onClick={this.handleClick} value={this.props.value} />
    );
  }
});

  React.render(
    <RemoteController/>,
    document.getElementById('content')
  );     