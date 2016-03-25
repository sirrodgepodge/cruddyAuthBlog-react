// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, { Component } from 'react';

class AddPostForm extends Component {

  render() {
    return (
      <li className="blog-add-post" data-id="">
        <input id="title" className="blog-add-post-title" type="text" placeholder="Title" onChange={this.props.titleChange} value={this.props.title}/>
        <textarea id="body" className="blog-add-post-body" placeholder="Body" onChange={this.props.bodyChange} value={this.props.body}/>
        <button id="add-post"
                onClick={this.props.buttonClickFunc}>
          {this.props.buttonStr}
        </button>
      </li>
    );
  }
}

export default AddPostForm;
