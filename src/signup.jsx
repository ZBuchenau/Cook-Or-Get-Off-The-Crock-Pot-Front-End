var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {username: '', password: ''};
  },
  handleUsernameChange: function(e) {
    this.setState({username: e.target.value});
    console.log('Username changed!');
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
    console.log('Password changed!');
  },
  handleSubmit : function(e){
    e.preventDefault();

    var formData = {};
    formData.username = this.state.username.trim();
    formData.password = this.state.password.trim();
    console.log(formData);
    $.post( "https://localhost:3000/users/signup", formData);
  },
  render: function() {
    return (
<div className="container well well-sm">
  <div className="row">
    <div className="col-md-12">
      <div className="well well-sm text-center">
        <h1>Sign Up</h1>
        <p>
          Please fill out the form to get started planning out your meals!</p>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <div className="well well-sm">
        <form onSubmit={this.handleSubmit} >

          <div className="row">
            <div className="col-md-6">
              <div className="form-group label-floating">
                <label htmlFor="first" className="control-label">First Name</label>
                <input type="text" className="form-control" id="first" placeholder=""/>
                <p className="help-block">First name please</p>
              </div>
              <div className="form-group label-floating">
                <label htmlFor="last" className="control-label">Last Name</label>
                <input type="text" className="form-control" id="last" placeholder=""/>
                <p className="help-block">Last name you heathen</p>
              </div>
              <div className="form-group label-floating">
                <label htmlFor="email" className="control-label">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="" />
                <p className="help-block">An email so we can send you all our marketing and advertising nonsense</p>
              </div>
              <div className="form-group label-floating">
                <label htmlFor="phone" className="control-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="" />
                <p className="help-block">Express yourself creativly!</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group label-floating">
                <label htmlFor="username" className="control-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="" value={this.state.username} onChange={this.handleUsernameChange}/>
                <p className="help-block">Express yourself creativly!</p>
              </div>
              <div className="form-group label-floating">
                <label htmlFor="password" className="control-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder=""               value={this.state.password} onChange={this.handlePasswordChange}/>
                <p className="help-block">The longet the better!</p>
              </div>
              <div className="form-group label-floating">
                <label htmlFor="password-re" className="control-label">Retype Password</label>
                <input type="password" className="form-control" id="password-re" placeholder="" />
                <p className="help-block">Make it the same</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <button type="submit" id="submit" className="btn btn-primary btn-block btn-raised">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>)
}
});
