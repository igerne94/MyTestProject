import React from 'react';
import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from "react-collapsible-component";

export const HTMLRender = class HTMLRender extends React.Component {

  render() {
    return (
      <div>
        <div>{this.renderJson()}</div>
      </div>
    );
  }

  renderItem(item) {
    return (
   
      <div className="infobit">
          <div><h1>{item.tittel}</h1></div>
          <div name={item.kortTittel}><h2>{item.kortTittel !== item.tittel ? item.kortTittel : ''}</h2></div>
          <div name={item.id}>{item.intro ? item.intro : ''}</div>
          <div name={item.id}>{item.forstPublisert ? item.forstPublisert.substring(0,11) : ''}</div>
          <div dangerouslySetInnerHTML={{ __html: item.tekst }}></div>
          
          <CollapsibleComponent name={item.id}>
            {item?.data?.rasjonale ? <CollapsibleHead><h2>Rasjonale</h2></CollapsibleHead> : null}
            {item?.data?.rasjonale ? <CollapsibleContent><div dangerouslySetInnerHTML={{ __html: item.data.rasjonale }}></div></CollapsibleContent> : null}

            {<CollapsibleHead><h2>Metadata</h2></CollapsibleHead>}

            <CollapsibleContent><table><tbody>
                  <tr>
                    <td style={{fontWeight: "bold" }}>Id</td><td>{item.id ? item.id : null}</td>
                  </tr>

                  <tr>
                    <td style={{fontWeight: "bold" }}>Eier</td><td>{item.eier ? item.eier : null}</td>
                  </tr>

                  <tr>
                    <td style={{fontWeight: "bold" }}>Sist Oppdatert</td><td>{item.sistOppdatert ? item.sistOppdatert : null}</td>
                  </tr>

                  {
                    item.forstPublisert ?
                      (<tr>
                        <td>Forst Publisert</td><td>{item.forstPublisert}</td>
                      </tr>)
                      : null
                  }

                  {
                    (item.gruppeId) ?
                      <tr>
                        <td>Gruppe Id</td><td>{item.gruppeId}</td>
                      </tr>
                      : null
                  }

                
                  {
                    item?.koder?.['ICPC-2'] ?
                      (<tr>
                        <td>ICPC-2</td><td>{item?.koder['ICPC-2']}</td>
                      </tr>)
                      : null
                  }

                  {
                    item?.koder?.['ICD-10'] ?
                      (<tr>
                        <td>ICD-10</td><td>{item?.koder['ICD-10']}</td>
                      </tr>)
                      : null
                  }

                  {
                    item?.koder?.['lis-spesialitet'] ?
                      (<tr>
                        <td>lis-spesialitet</td><td>{item?.koder['lis-spesialitet']}</td>
                      </tr>)
                      : null
                  }

                  {
                    item?.koder?.['lis-laeringsmaal'] ?
                      (<tr>
                        <td>lis-laeringsmaal</td><td>{item?.koder['lis-laeringsmaal']}</td>
                      </tr>)
                      : null
                  }

                  {
                    item?.koder?.['SNOMED-CT'] ?
                      (<tr>
                        <td>SNOMED-CT</td><td>{item?.koder['SNOMED-CT']}</td>
                      </tr>)
                      : null
                  }


                  <tr>
                    <td style={{ fontWeight: "bold" }} colSpan="2">Tekniske data</td><td >{item.tekniskeData ? '' : 'none'}</td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: "bold" }}>Info Id</td><td>{(item.tekniskeData && item.tekniskeData.infoId) ? item.tekniskeData.infoId : ''}</td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: "bold" }}>Info type</td><td>{(item.tekniskeData && item.tekniskeData.infoType) ? item.tekniskeData.infoType : ''}</td>
                  </tr>
                  

               
                  {
                    (item.tekniskeData && item.tekniskeData.subType) ?
                      (<tr>
                        <td>Subtype</td><td>{item.tekniskeData.subType}</td>
                      </tr>)
                      : null
                  }

                  {
                    (item.tekniskeData && item.tekniskeData.HapiId) ?
                      (<tr>
                        <td>HAPI id</td><td>{item.tekniskeData.HapiId}</td>
                      </tr>)
                      : null
                  }

                  {
                    Array.isArray(item.tema) ?
                      <tr>
                        <td colSpan="2">{this.renderTema(item.tema)}</td>
                      </tr>
                      : null
                  }


                  {
                    Array.isArray(item.links) ?
                      <tr>
                        <td colSpan="2">{this.renderLinks(item.links)}</td>
                      </tr>
                      : null
                  }

                  {
                    item.attachments ?
                      (<tr>
                        <td>Attachments</td><td>{item.attachments}</td>
                      </tr>)
                      : null
                  }

                  <tr>
                    <td style={{ fontWeight: "bold" }}>Dokument type</td><td>{item.dokumentType ? item.dokumentType : ''}</td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: "bold" }}>Sist importert til Hapi</td><td>{item.sistImportertTilHapi ? item.sistImportertTilHapi : ''}</td>
                  </tr>
              </tbody></table></CollapsibleContent>


            <CollapsibleHead>
              <h2>Links navigation</h2>
            </CollapsibleHead>
            <CollapsibleContent>
            
            
            <ol>
                  {this.renderLinksList(item.links)}
            </ol>
            

            
            </CollapsibleContent>

          </CollapsibleComponent>

    </div>
    );
  }

  renderLinksList(links) {
    if (links != null) {
      let barn = [];
      links.forEach(link => {
        if(link.$title) barn.push(link);
      });

      if(barn.length > 0) {
        return barn.map((item, index) => 
          <li key={index}>
            <div>
              <span className="link" onClick={() => this.props.linkCallback(item.href)}>{item.$title}</span>
            </div>
          </li>
        );
      }
    }        
  }

  renderJson() {
    if (this.props.data) {
      let json = JSON.parse(this.props.data);
      if (Array.isArray(json) && window.location.href.indexOf('getid') > -1) {
        return json.map((item, index) =>
          <div key={index}>

            <div>{item.kortTittel}</div>
            <div>{item.id}</div>
            <p> this string will never be written</p>
          </div>
        )
      }
      else if (Array.isArray(json) && !window.location.href.indexOf('getid') > -1) {
        return json.map((item, index) =>
          <div key={index}>
            <div>
              {this.renderItem(item)}
            </div>
          </div>);
      } else {
        let item = json;
        return (
          this.renderItem(item, 0)
          );
      }
    }
    return '';
  }


  renderLinks(links) {
    if (links != null)
      return links.map((item, index) =>
        <div key={index}>

          <table><tbody>

            <tr>
              <td style={{ fontWeight: "bold" }}>Rel</td><td>{item.rel ? item.rel : ''}</td>
            </tr>

            <tr>
              <td style={{ fontWeight: "bold" }}>Type</td><td>{item.type ? item.type : ''}</td>
            </tr>

            <tr>
              <td>Href</td><td><div className="link" onClick={() => this.props.linkCallback(item.href)}>{item.href ? item.href : ''}</div></td>
            </tr>

            <tr>
              <td>Struktur Id</td><td>{item.strukturId ? item.strukturId : ''}</td>
            </tr>

          </tbody></table>

        </div>);
  }

  renderTema(tema) {
    if (tema != null)
      return tema.map((item, index) =>
        <div key={index}>

          <table><tbody>

            <tr>
              <td style={{ fontWeight: "bold" }}>Tema</td><td>{item.tema ? item.tema : ''}</td>
            </tr>

           

          </tbody></table>

        </div>);
  }


}

export default HTMLRender;