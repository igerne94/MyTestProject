import React from 'react';

export const SnomedSearchComponent = class SnomedSearchComponent extends React.Component {

  onSearchChange = (event) => {
    let request = event.target.value;
    if(request.length > 2) {
      this.props.searchCallback(request);
    }
  }

  renderItem(item) {
    return (
      <div className="item-block">
        <div>
            <div className="main-term">{item.concept.pt.term}</div>
            <div>{item.concept.fsn.term}</div>
        </div>
        <div>
          <div className="code-caption">SCTID</div>
          <div>{item.concept.conceptId}</div>
        </div>
{/*
        {item.$icd2 ? 
          <div>
            <div className="code-caption">ICPC-2</div>
            <div>{item.$icd2}</div>
          </div>
        : null}

        {item.$icpc10 ? 
          <div>
            <div className="code-caption">ICD-10</div>
            <div>{item.$icpc10}</div>
          </div>
        : null}
        */}
      </div>
    );
  }

  renderResult() {
    if (this.props.concepts) {
      let json = JSON.parse(this.props.concepts); // string to JSON

      if (Array.isArray(json.items)) {
        return json.items.map((item, index) =>
          <div key={index}>
              {this.renderItem(item)}
          </div>);
      }
      
    }
    return '';
  }

  render() {
      return (
          <div>
              <input 
              id="code"
              autoComplete="off"
                type='text'
                placeholder='Code'
                onChange={evt => this.onSearchChange(evt)}
                />
            {this.renderResult()}
          </div>
      )
  }

}

export default SnomedSearchComponent;

