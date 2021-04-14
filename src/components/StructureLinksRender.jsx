import React from 'react';
//import { Link } from 'react-router-dom';

export const StructureLinksRender = class StructureLinksRender extends React.Component {


  render() {
    return (
      <div>
        <div>{this.structureLinksRender()}</div>
      </div>
    );
  }

  structureLinksRender() {
   
      return <div>
        <div>{this.renderLinks}</div>

        </div>
  }
}

export default StructureLinksRender;