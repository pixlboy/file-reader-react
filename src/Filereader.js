import React, {Component, Fragment} from 'react';
import axios from 'axios';

class Filereader extends Component {

  constructor(){
    super();
    this.state = {
      selectedFile: null,
      fileContent : [],
      defaultLines : 2,
      delimiter : '|'
    };
    this.columns = 4;
    this.uploadPath = 'http://localhost:4200/upload';
    this.readFile = 'http://localhost:4200/read';
    this.selectFile = this.selectFile.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.getFileContent = this.getFileContent.bind(this);
    this.handleDelimitChange = this.handleDelimitChange.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
  }

  async getFileContent() {
    axios.get(this.readFile, {
      params: {
        filename: 'users.txt'
      }
    })
    .then(res => {
      this.processResponse(res.data);
    })
  }

  processResponse(data){
    this.setState({
      fileContent: data
    });
  }

  uploadFile(){
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    axios.post(this.uploadPath, data)
    .then(res => { 
      console.log('File Successfully uploaded');
    })
  }

  selectFile(event){
    this.setState({
      selectedFile: event.target.files[0],
    }, () => {
      this.uploadFile();
    });
  }

  handleDelimitChange(event){
    this.setState({
      delimiter: event.target.value
    })
    this.processResponse(this.state.fileContent);
  }

  handleLimitChange(event){
    this.setState({
      defaultLines: event.target.value
    })
  }

  render(){

    const cells = (item) => {
      return item.split(this.state.delimiter).slice(0, this.columns)
      .map((item, idx) => {
        return <td key={idx}>{item}</td>
      });
    };
    
    const row = this.state.fileContent.slice(0, this.state.defaultLines)
      .map((item, idx) => {
        return <tr key={idx}>
          {cells(item)}
        </tr>
      }
    );

    const contents = 
      <table className="table table-striped table-bordered">
        <tbody>
          {row}
        </tbody>
      </table>;

    return (
      <Fragment>
        <header>
          <form>
            <div className="row">
              <div className="col">
                <label className="float-left">Select file:</label>
                <input type="file" className="btn btn-light" name="file" onChange={this.selectFile}/>
              </div>
              <div className="col">
                <label className="float-left">Upload &amp; Read</label>
                <button type="button" className="btn btn-primary form-control" onClick={this.getFileContent}>Read</button>
              </div>
              <div className="col">
                <label className="float-left">Delimiter:</label>
                <input type="text" name="delimiter" className="form-control" value={this.state.delimiter} onChange={this.handleDelimitChange} />
              </div>
              <div className="col">
                <label className="float-left">Lines:</label>
                <input type="text" name="lines" className="form-control" value={this.state.defaultLines} onChange={this.handleLimitChange}/>
              </div>
            </div>
          </form>
        </header>
        <section>
          {contents}
        </section>
      </Fragment>
    );
  }

}

export default Filereader;

