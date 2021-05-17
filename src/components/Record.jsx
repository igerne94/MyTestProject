import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import DisordersAutosuggest from '../components/DisordersAutosuggest';

export const Record = class Record extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            response: ''
        };
      }

    renderTerms() {
        if(this.state.response) {
          let json = JSON.parse(this.state.response);
          console.log(json);
  
          if(Array.isArray(json.items)) {
              return json.items.map((item, index) =>
                  <li key={index}>
                      <div>
                          Generic drug <span>{index+1}</span>: <span>{item.pt.term}</span> <span>{item.conceptId}</span>
                      </div>
                      {Array.isArray(item.commercialItems) ?
                          <ul>
                              {this.renderCommercial(item.commercialItems)}
                          </ul>
                      : null
                      }
                  </li>
              )
          }
        }
        return null;
    }

    render() {
        return (
            <div className="form-group">
                {/* the first*/}
                <div className="row">
                    <div className="col">
                    <p>Data:</p>
                    </div>
                </div>
                <div className="form-group">
                    <input
                    id="id"
                    type='text'
                    autoComplete="off"
                    placeholder="data"
                    />
                </div>

                {/* the second*/}
                <div className="row">
                    <div className="col">
                    <p>Notat:</p>
                    </div>
                </div>

                <div className="form-group">
                    <input
                    id="id"
                    type='text'
                    autoComplete="off"
                    placeholder="notat"
                    />
                </div>

                {/* the third*/}
                <div className="row">
                    <div className="col">
                    <p>Funn:</p>
                    </div>
                </div>

                <div className="form-group">
                    <input
                    id="id"
                    type='text'
                    autoComplete="off"
                    placeholder="funn"
                    />
                </div>

                {/* the fourth*/}
                <div className="row">
                    <div className="col">
                    <p>Vurdering:</p>
                    </div>
                </div>

                <div className="form-group">
                    <input
                    id="id"
                    type='text'
                    autoComplete="off"
                    placeholder="vurdering"
                    />
                </div>

                {/* the fifth*/}
                <div className="row">
                    <div className="col">
                    <p>Tiltak:</p>
                    </div>
                </div>

                <div className="form-group">
                    <input
                    id="id"
                    type='text'
                    autoComplete="off"
                    placeholder="tiltak"
                    />
                </div>

                  {/* the sixth, functional*/}
                  <div className="row">
                    <div className="col">
                    <p>Årsak (symptom, plage eller tentativ diagnose):</p>
                    </div>
                </div>

                <div className="form-group">
                    <DisordersAutosuggest/>
                    {/*<input
                    id="id"
                    type='text'
                    autoComplete="off"
                    placeholder="code"
                    />*/}
                </div>

            </div>
        )
    }

}

export default Record;
