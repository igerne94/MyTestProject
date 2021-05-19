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

      codeSystemPromise = (url) => {
        let promise = fetch(url,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          }
        ).then(response => response.json());
        return promise;
      }
     
      handleClick = () => {
          // ICPC2
        let codeSystemUrl1 = 'https://snowstorm.rundberg.no/browser/MAIN/ICPC2/members'
        + '?limit=10'
        + '&active=true'
        + '&referenceSet=450993002'
        + '&referencedComponentId=' + 35489007;
        fetch(codeSystemUrl1)
            .then(response => response.json())
            .then(data => {
                
                console.log(data);
            });
            

            // ICD
            let codeSystemUrl = 'https://snowstorm.conteir.no/browser/MAIN/members'
        + '?limit=10'
        + '&active=true'
        + '&referenceSet=447562003'
        + '&referencedComponentId=' + 35489007;
        fetch(codeSystemUrl)
            .then(response => response.json())
            .then(data => {
                
                console.log(data);
            });
            
        let codeSystemUrl3 = 'https://api.helsedirektoratet.no/innhold/'
        + 'innhold'
        + '?kodeverk='
        + 'ICPC-2'
        + '&kode='
        + 'p76';
        fetch(codeSystemUrl3,
            {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Ocp-Apim-Subscription-Key': '89b72a3ad5cf4723b3f489c3eb4d82a1'
                }
              })
            .then(response => response.json())
            .then(data => {
                
                console.log(data);
            });

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
                        id="id1"
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
                        id="id2"
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
                        id="id3"
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
                        id="id4"
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
                        id="id5"
                        type='text'
                        autoComplete="off"
                        placeholder="tiltak"
                        />
                    </div> 
                    
                    <div>
                        <button onClick={this.handleClick}>
                            Click me
                        </button>
                    </div>

                    {/* the sixth, functional*/}
                    <div className="row">
                        <div className="col">
                            <p>Årsak (symptom, plage eller tentativ diagnose):</p>
                        </div>
                    </div>

                    <div className="form-group">
                        <DisordersAutosuggest/>  
                    </div>

                   

            </div>

        )
    }

}

export default Record;