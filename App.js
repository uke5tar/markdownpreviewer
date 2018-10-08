class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        value: 'Heading\n' +
        '=======\n\n' +
        'Sub-heading\n-----------\n\n' +
        '### Another deeper heading\n\n' +
        'Paragraphs are separated\nby a blank line.' +
        'Leave 2 spaces at the end of a line to do a\nline break\n\n' +
        'Text attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\n' +
        'Shopping list:\n* apples\n* oranges\n* pears\n\n' +
        'Numbered list:\n1. apples\n2. oranges\n3. pears\n\n' +
        'The rain---not the reign---in\nSpain.'
      };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
     this.setState({
        value: event.target.value,
     });
    }
  
  
  render() {
    
    const createMarkup = () => {
      return {__html: marked(this.state.value)};
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdownpreviewer</h1>
        </header>
        <main className="App-content">
          <div className="Markdownpreviewer-wrapper">
            <section className="markdown">
                <p className="info first">Insert Text here</p>
                <h2 className="section-title">Markdown</h2>
                <textarea className="markdown content" value={this.state.value} onChange={this.handleChange}/>
            </section>
            <section className="preview">
                <p className="info second">See Result here</p>
                <h2 className="section-title">Preview</h2>
              <div className="preview content" dangerouslySetInnerHTML={createMarkup()} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));